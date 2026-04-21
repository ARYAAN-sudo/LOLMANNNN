'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Visits', value: '12,543', change: '+12%' },
    { label: 'Interactions', value: '3,892', change: '+8%' },
    { label: 'Messages', value: '127', change: '+5%' },
    { label: 'Projects', value: '8', change: '0%' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold glow-text">Admin Dashboard</h1>
          <Link href="/" className="px-4 py-2 text-primary hover:underline">
            ← Back to Site
          </Link>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-primary/20 px-8">
        <div className="max-w-7xl mx-auto flex gap-8">
          {['overview', 'content', 'analytics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-semibold capitalize transition-all ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold glow-text mb-8">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-lg tech-border-primary bg-gradient-to-br from-primary/10 to-secondary/10"
                  >
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold glow-text mb-2">{stat.value}</p>
                    <p className="text-green-400 text-sm">{stat.change}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'content' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold glow-text mb-8">Content Manager</h2>
              <div className="space-y-6">
                {[
                  { title: 'Hero Title', current: 'Welcome to the Future' },
                  { title: 'Hero Description', current: 'Experience cutting-edge 3D animations...' },
                  { title: 'Portfolio Section', current: 'Portfolio - Interactive 3D experiences...' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-lg tech-border-primary"
                  >
                    <label className="block text-sm font-semibold glow-text mb-2">
                      {item.title}
                    </label>
                    <textarea
                      defaultValue={item.current}
                      className="w-full h-20 bg-background/50 border border-primary/20 rounded p-3 text-foreground focus:outline-none focus:border-primary"
                    />
                    <button className="mt-3 px-4 py-2 bg-primary text-background rounded font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
                      Save Changes
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold glow-text mb-8">Analytics</h2>
              <div className="p-6 rounded-lg tech-border-primary text-center">
                <p className="text-gray-400">Analytics dashboard coming soon</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold glow-text mb-8">Settings</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-lg tech-border-primary">
                  <h3 className="text-xl font-semibold glow-text mb-4">Animation Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold glow-text mb-2">
                        Particle Count
                      </label>
                      <input
                        type="number"
                        defaultValue="500"
                        className="w-full bg-background/50 border border-primary/20 rounded p-3 text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold glow-text mb-2">
                        Animation Speed
                      </label>
                      <input
                        type="range"
                        defaultValue="50"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
