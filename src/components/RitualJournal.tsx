
import React, { useState } from 'react';
import { Calendar, Image, Circle, FileText } from 'lucide-react';
import { Ritual, RitualType } from '@/types';

interface RitualJournalProps {
  onSaveRitual?: (ritual: Omit<Ritual, 'id' | 'userId' | 'createdAt'>) => void;
}

const RitualJournal = ({ onSaveRitual }: RitualJournalProps) => {
  const [action, setAction] = useState<string>('');
  const [reflection, setReflection] = useState<string>('');
  const [ritualType, setRitualType] = useState<RitualType>('meditation');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [useLocation, setUseLocation] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  
  const ritualTypes: { value: RitualType; label: string; icon: React.ReactNode }[] = [
    { value: 'meditation', label: 'Meditation', icon: <Circle size={18} /> },
    { value: 'offering', label: 'Offering', icon: <Circle size={18} /> },
    { value: 'planting', label: 'Planting', icon: <Circle size={18} /> },
    { value: 'cleaning', label: 'Cleaning', icon: <Circle size={18} /> },
    { value: 'blessing', label: 'Blessing', icon: <Circle size={18} /> },
    { value: 'other', label: 'Other', icon: <Circle size={18} /> },
  ];

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setUseLocation(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          setUseLocation(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setUseLocation(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!action.trim()) return;
    
    const ritual = {
      action,
      reflection,
      location: useLocation && location ? location : undefined,
      photo: photoPreview || undefined,
    };
    
    if (onSaveRitual) {
      onSaveRitual(ritual);
    }
    
    // Reset form
    setAction('');
    setReflection('');
    setPhotoPreview(null);
    setUseLocation(false);
  };

  return (
    <div className="kin-card p-6">
      <h2 className="text-2xl font-serif mb-4 text-forest-800">Earth Ritual Journal</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="ritualType" className="block text-sm font-medium text-gray-700 mb-1">
            Ritual Type
          </label>
          <div className="flex flex-wrap gap-2">
            {ritualTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                className={`px-3 py-2 rounded-full text-sm flex items-center gap-1.5 transition-all ${
                  ritualType === type.value
                    ? 'bg-forest-600 text-white'
                    : 'bg-earth-100 text-gray-700 hover:bg-earth-200'
                }`}
                onClick={() => setRitualType(type.value)}
              >
                {type.icon}
                {type.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="action" className="block text-sm font-medium text-gray-700 mb-1">
            Sacred Action
          </label>
          <input
            type="text"
            id="action"
            placeholder="What did you do to honor the Earth today?"
            className="kin-input w-full"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="reflection" className="block text-sm font-medium text-gray-700 mb-1">
            Reflection
          </label>
          <textarea
            id="reflection"
            placeholder="Share your thoughts, feelings, or insights..."
            className="kin-input w-full min-h-[100px]"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="useLocation"
              checked={useLocation}
              onChange={() => {
                if (!useLocation) {
                  getLocation();
                } else {
                  setUseLocation(false);
                  setLocation(null);
                }
              }}
              className="mr-2"
            />
            <label htmlFor="useLocation" className="text-sm text-gray-700">
              Add Location
            </label>
          </div>
          
          <div>
            <label htmlFor="photo" className="bg-earth-100 hover:bg-earth-200 text-gray-700 px-3 py-2 rounded-full text-sm flex items-center gap-1.5 cursor-pointer transition-all">
              <Image size={18} />
              Add Photo
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        
        {photoPreview && (
          <div className="mb-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
                onClick={() => setPhotoPreview(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
        
        <button type="submit" className="kin-button w-full">
          <Calendar size={18} />
          Record Sacred Action
        </button>
      </form>
    </div>
  );
};

export default RitualJournal;
