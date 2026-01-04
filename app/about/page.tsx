'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Reggz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are more than just a clothing brand. We are a movement dedicated to quality, style, and authenticity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
              alt="About Reggz"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded with a vision to revolutionize the fashion industry, Reggz was born from a simple belief:
              everyone deserves access to premium quality clothing that does not compromise on style or sustainability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What started as a small idea has grown into a brand that stands for something bigger. We are committed
              to creating timeless pieces that you will love for years to come, all while maintaining ethical production
              practices and supporting sustainable fashion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every garment in our collection is carefully designed and crafted to meet the highest standards of quality.
              We believe that great style is about feeling confident in what you wear, and that confidence comes from
              knowing you are wearing something made with care and attention to detail.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4">Quality First</h3>
            <p className="text-gray-600">We never compromise on quality. Every piece is crafted with premium materials and attention to detail.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Sustainable Fashion</h3>
            <p className="text-gray-600">We are committed to sustainable practices and ethical production. Fashion should not cost the earth.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">Authentic Style</h3>
            <p className="text-gray-600">Our designs reflect real style for real people. Timeless, versatile, and always on trend.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900 text-white rounded-2xl p-12 mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            To empower individuals to express their unique style through high-quality, sustainable fashion that makes
            them look and feel their best. We are building a brand that stands the test of time, both in quality and values.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Reggz?</h2>
          <p className="text-gray-600 mb-8">Explore our collections and find your perfect style</p>
          <Link
            href="/collections"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
