
import React, { useState } from 'react';
import RitualJournal from '@/components/RitualJournal';
import { Ritual } from '@/types';
import { mockRituals } from '@/services/mockData';

const RitualsPage = () => {
  const [rituals, setRituals] = useState<Ritual[]>(mockRituals);
  
  const handleSaveRitual = (newRitual: Omit<Ritual, 'id' | 'userId' | 'createdAt'>) => {
    const ritual: Ritual = {
      ...newRitual,
      id: Date.now().toString(),
      userId: 'user1', // In a real app, this would come from auth
      createdAt: new Date()
    };
    
    setRituals([ritual, ...rituals]);
    
    // Show success message
    alert('Ritual recorded successfully!');
  };
  
  return (
    <div className="pb-20">
      <div className="relative pt-6 pb-4 px-4">
        <div className="sacred-pattern opacity-10" />
        <h1 className="text-2xl font-serif font-bold text-forest-800 text-center">
          Ritual Journal
        </h1>
      </div>
      
      <div className="px-4">
        <div className="max-w-md mx-auto">
          <RitualJournal onSaveRitual={handleSaveRitual} />
          
          <div className="mt-8">
            <h3 className="text-xl font-serif font-semibold text-forest-800 mb-4">
              Recent Rituals
            </h3>
            
            {rituals.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No rituals recorded yet. Start your practice today.
              </p>
            ) : (
              <div className="space-y-4">
                {rituals.map((ritual) => (
                  <div key={ritual.id} className="kin-card p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-forest-700">
                        {ritual.action}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {new Date(ritual.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {ritual.photo && (
                      <div className="mb-2 rounded-lg overflow-hidden h-32">
                        <img 
                          src={ritual.photo} 
                          alt="Ritual"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {ritual.reflection && (
                      <p className="text-sm text-gray-600">
                        {ritual.reflection}
                      </p>
                    )}
                    
                    {ritual.location && (
                      <div className="mt-2 text-xs text-gray-500">
                        Location recorded
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualsPage;
