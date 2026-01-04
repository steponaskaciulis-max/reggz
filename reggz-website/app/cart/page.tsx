'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const router = useRouter()
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Cart is Empty</h1>
            <p className="text-gray-600 text-lg mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              href="/collections"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Shopping Cart</h1>
          <p className="text-gray-600 mb-8">{getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row gap-6"
                >
                  <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.product.name}</h3>
                      <p className="text-gray-600 mb-2">Size: {item.size}</p>
                      <p className="text-2xl font-bold text-primary-600">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="px-3 py-1 border-2 border-gray-300 rounded hover:border-gray-400 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="px-3 py-1 border-2 border-gray-300 rounded hover:border-gray-400 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-red-600 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {getTotalPrice() >= 100 ? 'Free' : '$10.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">
                      ${(getTotalPrice() + (getTotalPrice() >= 100 ? 0 : 10) + getTotalPrice() * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    // In a real app, this would redirect to checkout
                    alert('Checkout functionality would be implemented here')
                  }}
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors mb-4"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/collections"
                  className="block w-full text-center py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Continue Shopping
                </Link>

                {getTotalPrice() < 100 && (
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    Add ${(100 - getTotalPrice()).toFixed(2)} more for free shipping
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}