
import React, { useState } from 'react';
import MapComponent from '@/components/MapComponent';
import { SacredSite } from '@/types';
import { mockSacredSites } from '@/services/mockData';
import { X } from 'lucide-react';

const MapPage = () => {
  const [sites] = useState<SacredSite[]>(mockSacredSites);
  const [selectedSite, setSelectedSite] = useState<SacredSite | null>(null);
  
  const handleSiteClick = (site: SacredSite) => {
    setSelectedSite(site);
  };
  
  const handleMapClick = () => {
    // For now, we just log the click
    console.log('Map clicked');
  };
  
  return (
    <div className="relative min-h-screen pb-16">
      <div className="h-[calc(100vh-8rem)]">
        <MapComponent 
          sites={sites}
          onSiteClick={handleSiteClick}
          onMapClick={handleMapClick}
        />
      </div>
      
      {selectedSite && (
        <div className="fixed bottom-20 left-0 right-0 px-4 z-10">
          <div className="kin-card p-5 max-w-md mx-auto shadow-lg">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-1">
                {selectedSite.title}
              </h3>
              <button 
                className="text-gray-500 p-1" 
                onClick={() => setSelectedSite(null)}
              >
                <X size={18} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">
              {selectedSite.ritualType || 'Sacred Site'} • Shared by {selectedSite.submittedBy}
            </p>
            
            {selectedSite.photoUrl && (
              <div className="mb-3 rounded-lg overflow-hidden h-40">
                <img 
                  src={selectedSite.photoUrl} 
                  alt={selectedSite.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <p className="text-sm text-gray-700">
              {selectedSite.description}
            </p>
            
            <div className="mt-3 text-xs text-gray-500">
              Added on {new Date(selectedSite.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
