'use client'

import { Canvas3D } from '../3d/Canvas3D'
import { ParticleSystem } from '../3d/ParticleSystem'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="w-full min-h-screen bg-background">
      {/* Header */}
      <div className="relative w-full h-96 overflow-hidden">
        <Canvas3D cameraPosition={[0, 0, 6]}>
          <ParticleSystem count={200} size={1.2} color={0x00ffff} speed={0.03} />
        </Canvas3D>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold glow-text-lg text-center"
          >
            Get in Touch
          </motion.h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold glow-text mb-8">Let's Connect</h2>
              <div className="space-y-6">
                {[
                  { title: 'Email', value: 'hello@futuristic3d.com' },
                  { title: 'Phone', value: '+1 (555) 123-4567' },
                  { title: 'Location', value: 'Digital Space, Internet' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                    <p className="text-lg glow-text">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg tech-border-primary bg-gradient-to-br from-primary/5 to-secondary/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold glow-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-primary/20 rounded p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold glow-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-primary/20 rounded p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold glow-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-primary/20 rounded p-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded font-bold hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Send Message
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded text-green-400 text-center"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold glow-text-lg text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: 'How can I customize the 3D animations?',
                a: 'You can adjust animation parameters through the admin panel. Settings include particle count, animation speed, and color themes.',
              },
              {
                q: 'Is this website mobile-friendly?',
                a: 'Yes! The website is fully responsive and optimized for all devices including mobile, tablet, and desktop.',
              },
              {
                q: 'Can I add more 3D scenes?',
                a: 'Absolutely! The system is modular, allowing you to add as many custom 3D scenes as you need.',
              },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg tech-border-primary cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold glow-text">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-300">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Futuristic 3D Experience. Let&apos;s build something amazing together.
          </p>
        </div>
      </footer>
    </main>
  )
}
