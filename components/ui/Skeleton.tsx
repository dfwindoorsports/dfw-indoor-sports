'use client'

import React from 'react'

interface SkeletonProps {
    className?: string
}

/**
 * Base skeleton component with shimmer animation
 */
export function Skeleton({ className = '' }: SkeletonProps) {
    return (
        <div
            className={`relative overflow-hidden bg-gray-200 dark:bg-white/10 rounded ${className}`}
            aria-hidden="true"
        >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    )
}

/**
 * Text skeleton - shows multiple lines of text placeholders
 */
export function SkeletonText({
    lines = 3,
    className = ''
}: {
    lines?: number
    className?: string
}) {
    return (
        <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
                />
            ))}
        </div>
    )
}

/**
 * Card skeleton - complete card placeholder
 */
export function SkeletonCard({
    className = '',
    hasImage = true,
    imageHeight = 'h-48'
}: {
    className?: string
    hasImage?: boolean
    imageHeight?: string
}) {
    return (
        <div className={`rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden ${className}`}>
            {hasImage && <Skeleton className={`${imageHeight} w-full rounded-none`} />}
            <div className="p-6 space-y-4">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-6 w-3/4" />
                <SkeletonText lines={2} />
                <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>
        </div>
    )
}

/**
 * Pricing card skeleton
 */
export function SkeletonPricingCard({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 ${className}`}>
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-10 w-24 mb-6" />
            <div className="space-y-3 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-4 flex-1" />
                    </div>
                ))}
            </div>
            <Skeleton className="h-12 w-full rounded-lg" />
        </div>
    )
}

/**
 * Coach/Profile card skeleton
 */
export function SkeletonProfileCard({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden ${className}`}>
            <Skeleton className="h-64 w-full rounded-none" />
            <div className="p-6 text-center space-y-3">
                <Skeleton className="h-6 w-32 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto" />
                <div className="flex justify-center gap-2 pt-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>
            </div>
        </div>
    )
}

/**
 * Hero skeleton
 */
export function SkeletonHero({ className = '' }: { className?: string }) {
    return (
        <div className={`relative h-[70vh] min-h-[500px] bg-[#020408] overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-4xl space-y-6">
                    <Skeleton className="h-8 w-32 rounded-full" />
                    <Skeleton className="h-16 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                </div>
            </div>
        </div>
    )
}

/**
 * Featured article skeleton
 */
export function SkeletonFeaturedCard({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-3xl overflow-hidden h-[450px] bg-dfw-navy relative ${className}`}>
            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 space-y-6">
                <div className="flex items-center gap-4">
                    <Skeleton className="h-8 w-24 rounded-full bg-white/10" />
                    <Skeleton className="h-4 w-20 bg-white/10" />
                </div>
                <Skeleton className="h-12 w-3/4 bg-white/10" />
                <Skeleton className="h-16 w-2/3 bg-white/10" />
                <Skeleton className="h-4 w-32 bg-white/10" />
            </div>
        </div>
    )
}

export default Skeleton
