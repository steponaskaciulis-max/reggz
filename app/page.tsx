'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { featuredProducts } from '@/data/products'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Reggz Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="text-primary-400">Reggz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Premium Quality, Timeless Style
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/collections"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collections</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our curated selection of premium clothing that combines style, comfort, and quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {['T-Shirts', 'Hoodies', 'Jeans'].map((category, index) => (
              <Link key={category} href={`/collections?category=${category.toLowerCase()}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1521572163474-6864f9cf17ab' : index === 1 ? '1556821840-3a63f95609a7' : '1542272604-787c3835535d'}?w=800&q=80`}
                    alt={category}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{category}</h3>
                    <p className="text-white/90">Shop Collection →</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked selections just for you</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Reggz, we believe that clothing is more than just fabric—it's a statement of who you are.
              We combine premium materials with exceptional craftsmanship to create pieces that stand the test of time.
              Every garment tells a story, and we're here to help you write yours.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}