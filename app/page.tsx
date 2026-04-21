'use client'

import { HeroScene } from './3d/scenes/HeroScene'
import { Navigation } from './components/Navigation'
import { PortfolioSection } from './components/PortfolioSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      {/* Hero Section */}
      <HeroScene />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
