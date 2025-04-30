
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { SacredSite } from '@/types';

// This is a temporary placeholder for the Mapbox token
// In a production app, this would be stored in environment variables
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN";

interface MapComponentProps {
  sites?: SacredSite[];
  onSiteClick?: (site: SacredSite) => void;
  onMapClick?: (lngLat: { lng: number; lat: number }) => void;
}

const MapComponent = ({ sites = [], onSiteClick, onMapClick }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(MAPBOX_TOKEN);
  const [showTokenInput, setShowTokenInput] = useState<boolean>(MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || mapboxToken === "YOUR_MAPBOX_TOKEN") return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [0, 20], // Default to a view of Earth
      zoom: 2,
      pitch: 40,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add user location control
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );

    // Add markers for sacred sites
    sites.forEach(site => {
      const marker = new mapboxgl.Marker({
        color: '#3c8c3e',
        draggable: false
      })
        .setLngLat([site.location.lng, site.location.lat])
        .addTo(map.current!);
      
      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`<div class="p-2">
          <h3 class="font-semibold">${site.title}</h3>
          <p class="text-xs text-gray-600">${site.ritualType || 'Sacred Site'}</p>
        </div>`);
      
      marker.setPopup(popup);
      
      // Add click event
      marker.getElement().addEventListener('click', () => {
        if (onSiteClick) onSiteClick(site);
      });
    });

    // Add click event to map
    if (onMapClick) {
      map.current.on('click', (event) => {
        onMapClick(event.lngLat);
      });
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [sites, onSiteClick, onMapClick, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const token = formData.get('token') as string;
    
    if (token) {
      setMapboxToken(token);
      localStorage.setItem('mapbox_token', token);
      setShowTokenInput(false);
    }
  };

  const handleTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      localStorage.setItem('mapbox_token', e.target.value);
    }
  };

  useEffect(() => {
    // Check for token in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  if (showTokenInput) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4 bg-earth-50 rounded-lg">
        <div className="kin-card p-6 max-w-md w-full">
          <h3 className="text-xl font-serif mb-4 text-forest-800">Mapbox API Token Required</h3>
          <p className="mb-4 text-sm text-gray-600">
            To use the Sacred Grove Map, please enter your Mapbox public token. 
            You can get one from the <a href="https://www.mapbox.com/account/access-tokens" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline">Mapbox website</a>.
          </p>
          <form onSubmit={handleTokenSubmit}>
            <input 
              type="text" 
              name="token"
              placeholder="Enter your Mapbox public token"
              className="kin-input w-full mb-4"
              onChange={handleTokenInput}
            />
            <button type="submit" className="kin-button w-full">
              Save Token
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
