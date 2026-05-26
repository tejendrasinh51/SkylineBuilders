import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import AboutIntro from '@/components/home/AboutIntro'
import StatsSection from '@/components/home/StatsSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import AmenitiesPreview from '@/components/home/AmenitiesPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutIntro />
        <StatsSection />
        <FeaturedProjects />
        <AmenitiesPreview />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
