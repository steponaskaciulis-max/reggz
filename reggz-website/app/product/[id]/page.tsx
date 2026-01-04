'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { allProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const product = allProducts.find(p => p.id === params.id)
  const [selectedSize, setSelectedSize] = useState<string>('M')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/collections')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Collections
          </button>
        </div>
      </div>
    )
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity)
    // You could add a toast notification here
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary-600 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition-colors ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors mb-4"
            >
              Add to Cart
            </button>

            {/* Product Info */}
            <div className="border-t pt-8 mt-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Material</h4>
                  <p className="text-gray-600">Premium quality fabric for comfort and durability</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Care Instructions</h4>
                  <p className="text-gray-600">Machine wash cold, tumble dry low</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shipping</h4>
                  <p className="text-gray-600">Free shipping on orders over $100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => router.push(`/product/${relatedProduct.id}`)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{relatedProduct.name}</h3>
                  <p className="text-primary-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}