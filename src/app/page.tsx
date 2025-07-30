import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import FreightTypesSection from "@/components/freight-types-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FreightTypesSection />
      <ContactSection />
    </main>
  )
}
