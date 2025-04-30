
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Calendar, Scroll, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-earth-100 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <NavItem path="/" icon={<Home />} label="Home" isActive={isActive('/')} />
        <NavItem path="/map" icon={<Map />} label="Groves" isActive={isActive('/map')} />
        <NavItem path="/rituals" icon={<Calendar />} label="Rituals" isActive={isActive('/rituals')} />
        <NavItem path="/scrolls" icon={<Scroll />} label="Scrolls" isActive={isActive('/scrolls')} />
        <NavItem path="/circle" icon={<Circle />} label="Circle" isActive={isActive('/circle')} />
      </div>
    </nav>
  );
};

interface NavItemProps {
  path: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ path, icon, label, isActive }: NavItemProps) => (
  <Link to={path} className="flex flex-col items-center justify-center p-2">
    <div className={cn(
      "p-2 rounded-full transition-all duration-300",
      isActive 
        ? "text-forest-600 bg-forest-100" 
        : "text-gray-500 hover:text-forest-500 hover:bg-forest-50"
    )}>
      {icon}
    </div>
    <span className={cn(
      "text-xs mt-1",
      isActive ? "text-forest-600 font-medium" : "text-gray-500"
    )}>
      {label}
    </span>
  </Link>
);

export default Navigation;
