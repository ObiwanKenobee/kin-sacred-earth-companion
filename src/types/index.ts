
export interface SacredSite {
  id: string;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
  photoUrl?: string;
  ritualType?: string;
  submittedBy: string;
  description: string;
  createdAt: Date;
}

export interface Ritual {
  id: string;
  userId: string;
  action: string;
  location?: {
    lat: number;
    lng: number;
  };
  photo?: string;
  reflection?: string;
  createdAt: Date;
}

export interface KinScroll {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: Date;
}

export interface GaiaMessage {
  sender: 'user' | 'gaia';
  content: string;
  timestamp: Date;
  guideType?: 'monk' | 'elder' | 'animal';
}

export type RitualType = 'meditation' | 'offering' | 'planting' | 'cleaning' | 'blessing' | 'other';
