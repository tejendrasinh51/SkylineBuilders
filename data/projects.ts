export interface Configuration {
  type: string
  carpetArea: string
  price: string
  priceValue: number
  availability: 'available' | 'limited' | 'sold'
}

export interface NearbyPlace {
  name: string
  distance: string
}

export interface Project {
  id: string
  slug: string
  name: string
  tagline: string
  location: string
  area: string
  city: string
  type: string[]
  status: 'ready' | 'construction' | 'launch'
  statusLabel: string
  priceMin: number
  priceMax: number
  priceLabel: string
  completionDate: string
  totalUnits: number
  floorsCount: number
  description: string
  highlights: string[]
  images: string[]
  configurations: Configuration[]
  nearbyPlaces: NearbyPlace[]
  floorPlanImages: Record<string, string>
  mapEmbed: string
  reraNumber: string
  isFeatured: boolean
}

const IMG = {
  a: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200',
  b: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
  c: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
  d: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
  e: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200',
  f: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'the-meridian',
    name: 'The Meridian',
    tagline: 'Where Alkapuri meets elevated living',
    location: 'Alkapuri, Vadodara',
    area: 'Alkapuri',
    city: 'Vadodara',
    type: ['3 BHK', '4 BHK'],
    status: 'ready',
    statusLabel: 'Ready to Move',
    priceMin: 120,
    priceMax: 280,
    priceLabel: '₹1.2 Cr onwards',
    completionDate: 'Ready — Possession Open',
    totalUnits: 84,
    floorsCount: 18,
    description: `The Meridian stands as Skyline Builders' flagship address in Alkapuri — Vadodara's most prestigious residential corridor. Conceived for discerning families who refuse to compromise, this 18-storey tower redefines luxury living with panoramic city views, bespoke interiors, and world-class amenities at every level.

Every residence at The Meridian features floor-to-ceiling windows, Italian marble flooring in living areas, modular kitchens with premium fittings, and master suites designed as private sanctuaries. The building's architecture draws inspiration from contemporary European towers while respecting Vadodara's architectural heritage.

With possession now open, The Meridian offers immediate move-in for families seeking Alkapuri's finest address. Our dedicated relationship managers guide you through documentation, interior customization, and a seamless handover experience.`,
    highlights: [
      'Prime Alkapuri location with 360° city views',
      'Ready to move — immediate possession available',
      'Italian marble flooring in all living areas',
      'Private elevator lobby for select floors',
      'Rooftop infinity pool and sky lounge',
      'Dedicated concierge and valet parking',
      'Vastu-compliant layouts by renowned architects',
      'RERA registered with full transparency',
    ],
    images: [IMG.a, IMG.b, IMG.c, IMG.d, IMG.e, IMG.f],
    configurations: [
      { type: '3 BHK', carpetArea: '1,450 sq.ft', price: '₹1.2 Cr', priceValue: 120, availability: 'available' },
      { type: '3 BHK Plus', carpetArea: '1,650 sq.ft', price: '₹1.45 Cr', priceValue: 145, availability: 'available' },
      { type: '4 BHK', carpetArea: '2,100 sq.ft', price: '₹1.9 Cr', priceValue: 190, availability: 'limited' },
      { type: '4 BHK Duplex', carpetArea: '2,800 sq.ft', price: '₹2.8 Cr', priceValue: 280, availability: 'limited' },
    ],
    nearbyPlaces: [
      { name: 'Alkapuri Club', distance: '0.5 km' },
      { name: 'Akota Stadium', distance: '1.2 km' },
      { name: 'MS University', distance: '3 km' },
      { name: 'Vadodara Railway Station', distance: '4 km' },
      { name: 'Vadodara Airport', distance: '8 km' },
    ],
    floorPlanImages: {
      '3 BHK': IMG.c,
      '4 BHK': IMG.d,
    },
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=73.165%2C22.305%2C73.175%2C22.315&layer=mapnik&marker=22.31%2C73.17',
    reraNumber: 'PR/GJ/VADODARA/AAA/000001/180101',
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'skyline-residences',
    name: 'Skyline Residences',
    tagline: 'Modern living in the heart of Gotri',
    location: 'Gotri, Vadodara',
    area: 'Gotri',
    city: 'Vadodara',
    type: ['2 BHK', '3 BHK'],
    status: 'construction',
    statusLabel: 'Under Construction',
    priceMin: 75,
    priceMax: 120,
    priceLabel: '₹75 Lac onwards',
    completionDate: 'December 2025',
    totalUnits: 120,
    floorsCount: 14,
    description: `Skyline Residences brings Skyline Builders' signature quality to Gotri — one of Vadodara's fastest-growing residential neighbourhoods. Designed for young professionals and growing families, this 14-storey development offers thoughtfully planned 2 and 3 BHK homes with premium specifications at accessible price points.

The project features a contemporary facade with landscaped podiums, a fully equipped clubhouse, and green spaces that encourage community living. Each apartment maximizes natural light and cross-ventilation, with open-plan living areas and smart storage solutions throughout.

Construction is progressing on schedule with December 2025 as the targeted possession date. Early-bird buyers benefit from flexible payment plans, free interior consultation, and priority selection of preferred floors and views.`,
    highlights: [
      'Strategic Gotri location near major IT hubs',
      '2 & 3 BHK configurations from 950 sq.ft',
      'Flexible 20:80 payment plan available',
      'Clubhouse with pool and fitness centre',
      'Dedicated children\'s play and learning zones',
      'High-speed lifts and 100% power backup',
      'Pre-launch pricing for limited units',
      'Expected possession December 2025',
    ],
    images: [IMG.b, IMG.c, IMG.a, IMG.e, IMG.d, IMG.f],
    configurations: [
      { type: '2 BHK', carpetArea: '950 sq.ft', price: '₹75 Lac', priceValue: 75, availability: 'available' },
      { type: '2 BHK Premium', carpetArea: '1,100 sq.ft', price: '₹88 Lac', priceValue: 88, availability: 'available' },
      { type: '3 BHK', carpetArea: '1,250 sq.ft', price: '₹1.05 Cr', priceValue: 105, availability: 'available' },
      { type: '3 BHK Corner', carpetArea: '1,400 sq.ft', price: '₹1.2 Cr', priceValue: 120, availability: 'limited' },
    ],
    nearbyPlaces: [
      { name: 'Gotri Lake', distance: '0.8 km' },
      { name: 'Inorbit Mall', distance: '2.5 km' },
      { name: 'Sun Pharma Road', distance: '1 km' },
      { name: 'Vadodara Railway Station', distance: '6 km' },
      { name: 'Vadodara Airport', distance: '10 km' },
    ],
    floorPlanImages: {
      '2 BHK': IMG.b,
      '3 BHK': IMG.c,
    },
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=73.135%2C22.295%2C73.145%2C22.305&layer=mapnik&marker=22.30%2C73.14',
    reraNumber: 'PR/GJ/VADODARA/AAA/000002/180102',
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'the-pinnacle',
    name: 'The Pinnacle',
    tagline: 'Vadodara\'s most exclusive address',
    location: 'Sama, Vadodara',
    area: 'Sama',
    city: 'Vadodara',
    type: ['4 BHK', 'Penthouse'],
    status: 'launch',
    statusLabel: 'New Launch',
    priceMin: 210,
    priceMax: 450,
    priceLabel: '₹2.1 Cr onwards',
    completionDate: 'Launch Phase — Q4 2027',
    totalUnits: 48,
    floorsCount: 22,
    description: `The Pinnacle represents the apex of Skyline Builders' vision — an ultra-luxury tower in Sama reserved for those who seek the extraordinary. With only 48 residences across 22 floors, including exclusive penthouses with private terraces and plunge pools, The Pinnacle is Vadodara's answer to global luxury living.

Residences feature imported stone finishes, smart home automation, private lift lobbies for penthouse floors, and bespoke interior design consultations included with every booking. The sky deck offers an infinity pool, cigar lounge, and private dining rooms overlooking the city skyline.

Now in launch phase, The Pinnacle offers founding-member pricing, guaranteed appreciation benefits, and first access to the most coveted floor plans. Our invitation-only preview gallery welcomes serious buyers by appointment.`,
    highlights: [
      'Only 48 ultra-luxury residences',
      'Exclusive penthouses with private pools',
      'Private lift lobbies for premium floors',
      'Sky deck with infinity pool and lounge',
      'Imported finishes and smart home ready',
      'Bespoke interior design consultation included',
      'Founding-member launch pricing',
      'Invitation-only preview gallery',
    ],
    images: [IMG.e, IMG.f, IMG.a, IMG.b, IMG.c, IMG.d],
    configurations: [
      { type: '4 BHK', carpetArea: '2,400 sq.ft', price: '₹2.1 Cr', priceValue: 210, availability: 'available' },
      { type: '4 BHK Sky Villa', carpetArea: '2,900 sq.ft', price: '₹2.8 Cr', priceValue: 280, availability: 'available' },
      { type: 'Penthouse', carpetArea: '3,800 sq.ft', price: '₹3.6 Cr', priceValue: 360, availability: 'limited' },
      { type: 'Penthouse Grande', carpetArea: '4,500 sq.ft', price: '₹4.5 Cr', priceValue: 450, availability: 'sold' },
    ],
    nearbyPlaces: [
      { name: 'Sama Sports Complex', distance: '0.6 km' },
      { name: 'Sayajigunj', distance: '2 km' },
      { name: 'Kirti Mandir', distance: '3.5 km' },
      { name: 'Vadodara Railway Station', distance: '5 km' },
      { name: 'Vadodara Airport', distance: '7 km' },
    ],
    floorPlanImages: {
      '4 BHK': IMG.e,
      Penthouse: IMG.f,
    },
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=73.185%2C22.315%2C73.195%2C22.325&layer=mapnik&marker=22.32%2C73.19',
    reraNumber: 'PR/GJ/VADODARA/AAA/000003/180103',
    isFeatured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.isFeatured)
}
