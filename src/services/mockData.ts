
import { SacredSite, Ritual, KinScroll } from '@/types';

// Mock Sacred Sites
export const mockSacredSites: SacredSite[] = [
  {
    id: '1',
    title: 'Ancient Oak Grove',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    photoUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    ritualType: 'meditation',
    submittedBy: 'Oak Guardian',
    description: 'A peaceful grove of ancient oak trees, perfect for meditation and connecting with tree spirits.',
    createdAt: new Date('2023-03-15')
  },
  {
    id: '2',
    title: 'Crystal Waters Spring',
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    photoUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    ritualType: 'blessing',
    submittedBy: 'Water Keeper',
    description: 'A sacred spring with healing properties, traditionally used for water blessing ceremonies.',
    createdAt: new Date('2023-04-22')
  },
  {
    id: '3',
    title: 'Stone Circle Summit',
    location: {
      lat: 51.5074,
      lng: -0.1278
    },
    photoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    ritualType: 'offering',
    submittedBy: 'Stone Whisperer',
    description: 'Ancient stone circle at the summit of a small mountain, aligned with solstice sun movements.',
    createdAt: new Date('2023-01-05')
  }
];

// Mock Rituals
export const mockRituals: Ritual[] = [
  {
    id: '1',
    userId: 'user1',
    action: 'Morning meditation with oak tree',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    photo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    reflection: 'Felt a deep connection with the tree spirits today. The energy was particularly strong at dawn.',
    createdAt: new Date('2023-06-21')
  },
  {
    id: '2',
    userId: 'user1',
    action: 'Offered seeds to local birds',
    reflection: 'Shared organic seeds with the local birds and sat in silence listening to their songs for 30 minutes.',
    createdAt: new Date('2023-06-20')
  },
  {
    id: '3',
    userId: 'user1',
    action: 'Picked up trash at local creek',
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    reflection: 'Spent two hours cleaning the creek. Found many plastic pieces and a few glass bottles. The water felt grateful.',
    createdAt: new Date('2023-06-18')
  }
];

// Mock Scrolls (Eco-poems and Wisdom)
export const mockScrolls: KinScroll[] = [
  {
    id: '1',
    title: 'Whispers of the Ancient Oak',
    content: `Stand still within my shadow cast,
Time slows beneath my branches vast.
A thousand years I've watched the Earth,
Through death and life, through pain and mirth.

My roots remember what humans forget,
The sacred bond—an eternal debt.
To honor soil from which all springs,
To hear the song each season sings.`,
    author: 'Elder Oak Spirit',
    tags: ['trees', 'wisdom', 'time'],
    createdAt: new Date('2023-05-01')
  },
  {
    id: '2',
    title: "Water's Memory",
    content: `I am the river, I am the sea,
Carrying stories of all I see.
From mountaintop to ocean deep,
The Earth's emotions in me steep.

When you touch me with reverence and care,
My molecules dance, my memories share.
Remember that your body too,
Is mostly water—sacred and true.`,
    author: 'Water Keeper',
    tags: ['water', 'healing', 'flow'],
    createdAt: new Date('2023-05-12')
  },
  {
    id: '3',
    title: 'Daily Practice',
    content: `Each morning as the sun appears,
Place bare feet on soil with no fears.
Breathe deeply as the light arrives,
Feel how everything around you thrives.

One small action done with love,
Connects below and sky above.
This is the path of sacred being,
A humble practice of deep seeing.`,
    author: 'Morning Light Guide',
    tags: ['practice', 'ritual', 'daily'],
    createdAt: new Date('2023-05-24')
  }
];
