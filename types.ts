export type EventCategory = 'all' | 'flagship' | 'technical' | 'non-technical';

export interface SymposiumEvent {
  id: string;
  title: string;
  codeName: string;
  category: 'flagship' | 'technical' | 'non-technical';
  characterPatron: string;
  characterRole: string;
  characterQuote: string;
  tagline: string;
  description: string;
  rounds: {
    roundNumber: number;
    title: string;
    description: string;
    duration: string;
  }[];
  rules: string[];
  teamSize: string;
  prizePool: string;
  firstPrize: string;
  secondPrize: string;
  timeSlot: string;
  venue: string;
  coordinators: {
    name: string;
    phone: string;
    role: string;
  }[];
  iconName: string;
  badgeColor: string;
  accentGlow: string;
}

export interface RegistrationData {
  fullName: string;
  collegeName: string;
  degreeAndDept: string;
  yearOfStudy: string;
  email: string;
  phone: string;
  characterAvatar: string;
  selectedEvents: string[];
  teamName?: string;
  teamMembersCount?: number;
  foodPreference: 'veg' | 'non-veg';
  registrationId: string;
  timestamp: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  category: 'inauguration' | 'flagship' | 'technical' | 'non-technical' | 'break' | 'valedictory';
  venue: string;
  day: 'day1' | 'day2';
  description: string;
}

export interface Coordinator {
  name: string;
  designation: string;
  role: string;
  partyRole: string; // e.g. "The Dungeon Master", "The Mage (011)", "The Radio Chief"
  avatar: string;
  contact?: string;
  email?: string;
}
