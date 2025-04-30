
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Calendar, Scroll, Circle } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Map className="h-8 w-8 text-forest-600" />,
      title: 'Sacred Grove Map',
      description: 'Discover and mark sacred sites around the world. Connect with earth energy spots near you.',
      path: '/map'
    },
    {
      icon: <Calendar className="h-8 w-8 text-forest-600" />,
      title: 'Ritual Journal',
      description: 'Record your daily earth-honoring practices. Build a relationship with nature through consistent action.',
      path: '/rituals'
    },
    {
      icon: <Scroll className="h-8 w-8 text-forest-600" />,
      title: 'Wisdom Scrolls',
      description: 'Ancient and modern ecological wisdom in poetic form. Draw inspiration for your practice.',
      path: '/scrolls'
    },
    {
      icon: <Circle className="h-8 w-8 text-forest-600" />,
      title: 'Kin Circle',
      description: 'Join a global community of earth guardians. Share practices and support each other.',
      path: '/circle'
    }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="sacred-pattern" />
      
      {/* Hero Section */}
      <div className="pt-12 pb-16 px-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-forest-400 to-forest-700 p-5 shadow-lg animate-pulse-gentle">
            <div className="w-full h-full rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white animate-spin-slow" />
            </div>
          </div>
          
          <h1 className="text-4xl font-serif font-bold text-forest-800 mb-4">
            Kin Sacred Earth Companion
          </h1>
          
          <p className="text-gray-600 mb-8">
            Reconnect with Earth's wisdom through daily practices, sacred mapping, and community ritual.
          </p>
          
          <button 
            onClick={() => navigate('/map')}
            className="kin-button mx-auto"
          >
            Begin Your Journey
          </button>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => navigate(feature.path)}
              className="kin-card p-5 cursor-pointer hover:translate-y-[-4px]"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-forest-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="px-4 pb-24">
        <div className="max-w-md mx-auto text-center">
          <blockquote className="font-serif text-lg italic text-forest-700">
            "We are the Earth, made of the same stuff; there is no other, no division between us and 'lower' or 'higher' forms of being."
          </blockquote>
          <cite className="block mt-2 text-sm text-gray-500">
            — Estella Lauder, Earth Elder
          </cite>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
