
import React from 'react';

const CirclePage = () => {
  return (
    <div className="pb-20">
      <div className="relative pt-6 pb-4 px-4">
        <div className="sacred-pattern opacity-10" />
        <h1 className="text-2xl font-serif font-bold text-forest-800 text-center">
          Kin Circle
        </h1>
      </div>
      
      <div className="px-4">
        <div className="max-w-md mx-auto">
          <div className="kin-card p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-earth-100 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest-300 to-forest-600 animate-pulse-gentle" />
            </div>
            
            <h2 className="text-xl font-serif mb-2">Join the Circle</h2>
            <p className="text-gray-600 mb-6">
              Connect with other Earth guardians, share wisdom, and participate in synchronized rituals.
            </p>
            
            <button className="kin-button mx-auto">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirclePage;
