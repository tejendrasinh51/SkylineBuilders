import type { LucideIcon } from 'lucide-react'
import {
  Waves,
  Dumbbell,
  Trees,
  Shield,
  Car,
  Gamepad2,
  Zap,
  ArrowUpDown,
  Baby,
  Wifi,
  Thermometer,
  Coffee,
  UtensilsCrossed,
  Flower2,
  Bike,
  Droplets,
  Sun,
  Building2,
  Sparkles,
  Users,
} from 'lucide-react'

export interface Amenity {
  id: string
  icon: LucideIcon
  label: string
  description: string
}

export const amenities: Amenity[] = [
  { id: '1', icon: Waves, label: 'Infinity Pool', description: 'Temperature-controlled rooftop pool with skyline views' },
  { id: '2', icon: Dumbbell, label: 'Fitness Centre', description: 'Fully equipped gym with personal training zone' },
  { id: '3', icon: Trees, label: 'Landscaped Gardens', description: 'Meditation lawns and curated native plantations' },
  { id: '4', icon: Shield, label: '24/7 Security', description: 'CCTV surveillance, access control, and trained personnel' },
  { id: '5', icon: Car, label: 'Covered Parking', description: 'Dedicated basement parking with EV charging bays' },
  { id: '6', icon: Gamepad2, label: 'Clubhouse', description: 'Multi-purpose hall, indoor games, and lounge areas' },
  { id: '7', icon: Zap, label: 'Power Backup', description: '100% backup for lifts, common areas, and apartments' },
  { id: '8', icon: ArrowUpDown, label: 'High-Speed Lifts', description: 'Premium elevator systems with smart access' },
  { id: '9', icon: Baby, label: 'Kids Play Area', description: 'Safe, rubber-floored play zones for all ages' },
  { id: '10', icon: Sparkles, label: 'Smart Home Tech', description: 'Video door phones and home automation ready' },
  { id: '11', icon: Wifi, label: 'Fiber Internet', description: 'High-speed connectivity to every residence' },
  { id: '12', icon: Thermometer, label: 'Central AC Lobby', description: 'Climate-controlled grand entrance lobbies' },
  { id: '13', icon: Coffee, label: 'Café Lounge', description: 'Curated café space for residents and guests' },
  { id: '14', icon: UtensilsCrossed, label: 'Party Lawn', description: 'Outdoor celebration space with catering support' },
  { id: '15', icon: Flower2, label: 'Yoga Deck', description: 'Dedicated wellness terrace with morning sun' },
  { id: '16', icon: Bike, label: 'Cycling Track', description: 'Perimeter track for fitness and leisure rides' },
  { id: '17', icon: Droplets, label: 'Rainwater Harvesting', description: 'Sustainable water management systems' },
  { id: '18', icon: Sun, label: 'Solar Lighting', description: 'Common area lighting powered by solar panels' },
  { id: '19', icon: Building2, label: 'Concierge Desk', description: 'Dedicated front desk for resident services' },
  { id: '20', icon: Users, label: 'Community Hall', description: 'Spaces for gatherings, workshops, and events' },
]
