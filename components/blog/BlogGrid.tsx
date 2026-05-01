'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'

interface BlogPost {
    title: string
    slug: string
    excerpt: string
    category: string
    date: string
    readTime: string
    featured?: boolean
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-50px" })

    // Featured post is the first one
    const featuredPost = posts.find(p => p.featured) || posts[0]
    const otherPosts = posts.filter(p => p !== featuredPost)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6
            }
        }
    }

    return (
        <section ref={containerRef} className="relative overflow-hidden">
            {/* Top transition gradient from hero */}
            <div className="h-24 bg-gradient-to-b from-[#020408] to-[#FAFAFA]" />

            {/* Main content area */}
            <div className="bg-[#FAFAFA] pb-24 sm:pb-32 relative">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.02] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* ═══════════════════════════════════════════════════════════════
                    FEATURED POST
                ═══════════════════════════════════════════════════════════════ */}
                    {featuredPost && (
                        <motion.div
                            className="mb-20"
                            transition={{ duration: 0.8 }}
                        >
                            {/* Section label */}
                            <div className="flex items-center gap-3 mb-8">
                                <Sparkles size={16} className="text-dfw-red-400" />
                                <span className="text-overline text-dfw-red-500 tracking-luxury">Featured Article</span>
                            </div>

                            <Link href={`/blog/${featuredPost.slug}`} className="group relative block rounded-3xl overflow-hidden h-[450px] sm:h-[500px] hover-lift">
                                {/* Background */}
                                <div className="absolute inset-0 bg-dfw-navy">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/60 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy/80 to-transparent z-10" />

                                    {/* Decorative gradient */}
                                    <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-dfw-red-500/30 via-dfw-navy to-blue-600/20" />

                                    {/* Animation overlay on hover */}
                                    <div className="absolute inset-0 bg-dfw-red-500/0 group-hover:bg-dfw-red-500/10 transition-colors duration-500 z-10" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 z-20">
                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <span className="px-4 py-1.5 rounded-full bg-dfw-red-500/90 text-white text-overline tracking-luxury">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-overline text-white/70 flex items-center gap-2">
                                            <Clock size={12} />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-display text-white mb-4 group-hover:text-dfw-red-300 transition-colors duration-500 text-balance">
                                        {featuredPost.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-body-lg text-white/60 max-w-2xl mb-8 line-clamp-2">
                                        {featuredPost.excerpt}
                                    </p>

                                    {/* CTA */}
                                    <span className="inline-flex items-center gap-3 text-overline text-white tracking-luxury group-hover:gap-4 transition-all duration-300">
                                        Read Article
                                        <ArrowRight size={14} className="text-dfw-red-400" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* ═══════════════════════════════════════════════════════════════
                    GRID
                ═══════════════════════════════════════════════════════════════ */}
                    <div>
                        {/* Section label */}
                        <motion.div
                            className="flex items-center gap-3 mb-10"
                        >
                            <span className="text-heading font-header text-dfw-navy uppercase">Latest Updates</span>
                        </motion.div>

                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            variants={containerVariants}
                            
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {otherPosts.map((post, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group block h-full"
                                    >
                                        <div className="relative h-full bg-white rounded-2xl border border-gray-100 hover:border-dfw-red-500/30 hover-lift overflow-hidden transition-colors duration-500">
                                            {/* Image placeholder */}
                                            <div className="h-48 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-dfw-navy via-dfw-navy/90 to-dfw-red-500/30" />
                                                <div className="absolute inset-0 bg-dfw-red-500/0 group-hover:bg-dfw-red-500/20 transition-colors duration-500" />

                                                {/* Category badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="glass-premium px-3 py-1.5 rounded-full text-overline text-white tracking-luxury">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                                {/* Meta */}
                                                <div className="flex items-center gap-3 text-caption text-gray-400 mb-4">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar size={12} />
                                                        {post.date}
                                                    </span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock size={12} />
                                                        {post.readTime}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-heading font-header text-dfw-navy mb-3 group-hover:text-dfw-red-600 transition-colors duration-300 line-clamp-2">
                                                    {post.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-body text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                {/* CTA */}
                                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                                    <span className="text-overline tracking-luxury text-dfw-navy group-hover:text-dfw-red-500 transition-colors duration-300">
                                                        Read Now
                                                    </span>
                                                    <ArrowRight size={14} className="text-gray-400 group-hover:text-dfw-red-500 group-hover:translate-x-1 transition-all duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
