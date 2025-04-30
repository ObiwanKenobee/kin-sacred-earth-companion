
import React, { useState } from 'react';
import KinScrollFeed from '@/components/KinScrollFeed';
import { mockScrolls } from '@/services/mockData';

const ScrollsPage = () => {
  const [scrolls] = useState(mockScrolls);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  
  const handleBookmark = (scrollId: string) => {
    if (bookmarked.includes(scrollId)) {
      setBookmarked(bookmarked.filter(id => id !== scrollId));
    } else {
      setBookmarked([...bookmarked, scrollId]);
    }
  };
  
  const handleShare = (scrollId: string) => {
    alert(`Sharing scroll ${scrollId} with your circle (Feature coming soon)`);
  };
  
  return (
    <div className="pb-20">
      <div className="relative pt-6 pb-4 px-4">
        <div className="sacred-pattern opacity-10" />
        <h1 className="text-2xl font-serif font-bold text-forest-800 text-center">
          Sacred Scrolls
        </h1>
      </div>
      
      <div className="px-4">
        <div className="max-w-md mx-auto">
          <KinScrollFeed 
            scrolls={scrolls}
            onBookmark={handleBookmark}
            onShare={handleShare}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollsPage;
