import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Our Projects | Skyline Builders Vadodara',
  description:
    'Explore luxury 2, 3 & 4 BHK apartments and penthouses by Skyline Builders in Alkapuri, Gotri, and Sama. Ready to move and under construction homes in Vadodara.',
  path: '/projects',
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
