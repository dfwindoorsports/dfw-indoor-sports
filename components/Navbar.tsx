'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight, ChevronDown, Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, CONTACT_INFO } from '@/constants'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <>
      <nav
        className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${isOpen
          ? 'bg-white border-gray-100'
          : scrolled
            ? 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-md'
            : 'bg-white border-gray-100'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-[110]">
          <div className="flex justify-between items-center h-16 md:h-[72px]">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0 group cursor-pointer relative z-50">
              <Link href="/" className="flex items-center gap-2 select-none">
                <Image src="/images/dfwlogo.png" alt="DFW Indoor Sports" width={120} height={48} className="h-10 md:h-12 w-auto" priority />
              </Link>
            </div>

            {/* Desktop Nav — 4 clean groups */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <div className="flex items-center">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="relative group/menu">
                    {item.children ? (
                      <>
                        <button
                          className={`relative px-4 py-3 flex items-center gap-1.5 text-[13px] font-semibold tracking-wide transition-colors duration-300 group-hover/menu:text-dfw-red ${pathname?.startsWith(item.href) ? 'text-dfw-navy' : 'text-gray-600'
                            }`}
                        >
                          {item.label}
                          <ChevronDown size={12} className="transition-transform duration-300 group-hover/menu:rotate-180 opacity-50" />

                          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-dfw-red transition-all duration-300 group-hover/menu:w-3/4 ${pathname?.startsWith(item.href) ? 'w-3/4' : ''}`}></span>
                        </button>

                        {/* Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform translate-y-1 group-hover/menu:translate-y-0">
                          <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden p-1.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center justify-between px-4 py-3 text-[13px] font-medium text-gray-600 hover:text-dfw-red hover:bg-red-50/50 transition-all rounded-lg group/item"
                              >
                                <span>{child.label}</span>
                                <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-dfw-red" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative px-4 py-3 block text-[13px] font-semibold tracking-wide transition-colors duration-300 hover:text-dfw-red ${pathname === item.href ? 'text-dfw-navy' : 'text-gray-600'
                          }`}
                      >
                        {item.label}
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-dfw-red transition-all duration-300 group-hover:w-3/4 ${pathname === item.href ? 'w-3/4' : ''}`}></span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right actions — Phone + Book CTA */}
              <div className="pl-6 border-l border-gray-200 flex items-center gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="hidden xl:flex items-center gap-2 text-[13px] font-semibold text-gray-500 hover:text-dfw-red transition-colors"
                >
                  <Phone size={14} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-dfw-red text-white text-[13px] font-bold rounded-full overflow-hidden transition-all hover:bg-red-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Book Now</span>
                  <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="lg:hidden flex items-center gap-2 z-50">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="p-2 text-dfw-navy hover:text-dfw-red transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 -mr-2 text-dfw-navy hover:text-dfw-red transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed inset-0 z-[90] bg-white"
            >
              <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03]"></div>

              <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto relative z-10">

                <nav className="flex-1 space-y-1">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.15 }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      {item.children ? (
                        <div className="py-2">
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 font-header font-bold text-xl text-dfw-navy uppercase"
                            >
                              {item.label}
                            </Link>
                            <button
                              onClick={() => toggleExpanded(item.label)}
                              className="p-3 text-dfw-navy hover:text-dfw-red transition-colors"
                              aria-label={`Toggle ${item.label} menu`}
                            >
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${expandedItems.includes(item.label) ? 'rotate-180' : ''}`}
                              />
                            </button>
                          </div>
                          <AnimatePresence>
                            {expandedItems.includes(item.label) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 border-l-2 border-dfw-red/20 space-y-1 pb-3">
                                  {item.children.map(child => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-sm font-medium text-gray-500 hover:text-dfw-red transition-colors py-2.5 pl-2"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-4 font-header font-bold text-xl text-dfw-navy uppercase hover:text-dfw-red transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile bottom actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 pt-6 border-t border-gray-100 space-y-3"
                >
                  <a
                    href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-dfw-red text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm gap-3 shadow-lg active:scale-[0.98] transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full border-2 border-dfw-navy text-dfw-navy py-3.5 rounded-full font-bold uppercase tracking-widest text-sm gap-2 active:scale-[0.98] transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>

                  <div className="flex justify-center gap-8 mt-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    <a href="https://instagram.com/dfwindoorsports/" target="_blank" rel="noreferrer" className="hover:text-dfw-navy transition-colors py-2">Instagram</a>
                    <a href="https://facebook.com/dfwindoorsports" target="_blank" rel="noreferrer" className="hover:text-dfw-navy transition-colors py-2">Facebook</a>
                    <a href="https://x.com/dfwindoorsports" target="_blank" rel="noreferrer" className="hover:text-dfw-navy transition-colors py-2">X</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}