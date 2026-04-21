'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Chen',
    role: 'Creative Director',
    content:
      'The 3D animations and interactions completely transformed our digital presence. The attention to detail is extraordinary.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content:
      'Working with this team was seamless. They delivered a futuristic experience that exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Founder & CEO',
    content:
      'The website is not just beautiful—it's performant and engaging. Our conversion rates improved significantly.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Lead',
    content:
      'The interactive elements keep visitors engaged. This is exactly what we needed to stand out in our market.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background via-primary/5 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold glow-text-lg mb-4">
            Loved by Innovators
          </h2>
          <p className="text-lg glow-text max-w-2xl mx-auto">
            See what our clients have to say about their experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg tech-border-primary bg-gradient-to-br from-background/80 to-background/60 hover:from-primary/20 hover:to-secondary/10 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
