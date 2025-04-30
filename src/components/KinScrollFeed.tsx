
import React from 'react';
import { KinScroll } from '@/types';

interface KinScrollFeedProps {
  scrolls: KinScroll[];
  onBookmark?: (scrollId: string) => void;
  onShare?: (scrollId: string) => void;
}

const KinScrollFeed = ({ scrolls, onBookmark, onShare }: KinScrollFeedProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif mb-4 text-forest-800">Sacred Scrolls</h2>
      
      {scrolls.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-gray-500">No scrolls available yet.</p>
        </div>
      ) : (
        scrolls.map((scroll) => (
          <ScrollCard 
            key={scroll.id} 
            scroll={scroll} 
            onBookmark={onBookmark} 
            onShare={onShare} 
          />
        ))
      )}
    </div>
  );
};

interface ScrollCardProps {
  scroll: KinScroll;
  onBookmark?: (scrollId: string) => void;
  onShare?: (scrollId: string) => void;
}

const ScrollCard = ({ scroll, onBookmark, onShare }: ScrollCardProps) => {
  return (
    <div className="kin-card overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-forest-800">{scroll.title}</h3>
          <span className="text-xs text-gray-500">
            {new Date(scroll.createdAt).toLocaleDateString()}
          </span>
        </div>
        
        <div className="mb-4 whitespace-pre-line prose prose-sm max-w-none prose-green">
          {scroll.content}
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="text-gray-600">
            By {scroll.author}
          </div>
          
          <div className="flex gap-2">
            {onBookmark && (
              <button 
                onClick={() => onBookmark(scroll.id)}
                className="text-gray-500 hover:text-amber-600 p-1"
              >
                ☆
              </button>
            )}
            
            {onShare && (
              <button 
                onClick={() => onShare(scroll.id)}
                className="text-gray-500 hover:text-forest-600 p-1"
              >
                ⟳
              </button>
            )}
          </div>
        </div>
      </div>
      
      {scroll.tags && scroll.tags.length > 0 && (
        <div className="px-5 pb-4 pt-0 flex flex-wrap gap-1">
          {scroll.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-earth-100 text-earth-800 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KinScrollFeed;
