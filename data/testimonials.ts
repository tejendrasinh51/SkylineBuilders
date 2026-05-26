export interface Testimonial {
  id: string
  quote: string
  name: string
  designation: string
  property: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Skyline Builders delivered exactly what they promised — quality craftsmanship, transparent pricing, and a home we are truly proud of. The Meridian exceeded every expectation we had.',
    name: 'Rajesh Patel',
    designation: 'Business Owner',
    property: 'The Meridian, Alkapuri',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'From booking to possession, the entire process was smooth. The quality of construction and amenities exceeded our expectations completely. We recommend Skyline without hesitation.',
    name: 'Priya & Anand Shah',
    designation: 'IT Professionals',
    property: 'Skyline Residences, Gotri',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'As an NRI investor, I was skeptical about buying remotely. Skyline\'s team was transparent, responsive, and delivered on every commitment. The Pinnacle is a landmark investment.',
    name: 'Mihir Desai',
    designation: 'NRI Investor',
    property: 'The Pinnacle, Sama',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'What sets Skyline apart is their attention to detail — from the lobby finishes to the clubhouse design. Our family found not just an apartment, but a lifestyle upgrade.',
    name: 'Dr. Neha Mehta',
    designation: 'Physician',
    property: 'The Meridian, Alkapuri',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'We visited multiple builders across Vadodara before choosing Skyline. Their RERA compliance, on-time delivery track record, and after-sales support made the decision easy.',
    name: 'Ketan & Rina Joshi',
    designation: 'Entrepreneurs',
    property: 'Skyline Residences, Gotri',
    rating: 5,
  },
]
