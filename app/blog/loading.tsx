import { Skeleton, SkeletonCard, SkeletonFeaturedCard } from '@/components/ui/Skeleton'

export default function BlogLoading() {
 return (
 <div className="bg-[#020408] min-h-screen">
 {/* Hero skeleton */}
 <div className="relative w-full h-[70vh] min-h-[600px] bg-[#020408] overflow-hidden flex items-end">
 <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/50 to-[#020408]/20" />
 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
 <div className="max-w-4xl space-y-6">
 <div className="flex items-center gap-4">
 <Skeleton className="h-8 w-24 rounded-full bg-white/10" />
 <Skeleton className="h-4 w-20 bg-white/10" />
 <Skeleton className="h-4 w-16 bg-white/10" />
 </div>
 <Skeleton className="h-14 w-3/4 bg-white/10" />
 <Skeleton className="h-6 w-2/3 bg-white/10" />
 <div className="flex items-center gap-4 pt-4">
 <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
 <div className="space-y-2">
 <Skeleton className="h-3 w-16 bg-white/10" />
 <Skeleton className="h-4 w-32 bg-white/10" />
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Content skeleton */}
 <section className="relative overflow-hidden">
 <div className="h-24 bg-gradient-to-b from-[#020408] to-[#FAFAFA]" />
 <div className="bg-[#FAFAFA] pb-24 sm:pb-32 relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 {/* Featured article skeleton */}
 <div className="mb-20">
 <div className="flex items-center gap-3 mb-8">
 <Skeleton className="h-4 w-4 rounded-full" />
 <Skeleton className="h-4 w-32" />
 </div>
 <SkeletonFeaturedCard />
 </div>

 {/* Grid skeleton */}
 <div>
 <Skeleton className="h-8 w-40 mb-10" />
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {Array.from({ length: 4 }).map((_, i) => (
 <SkeletonCard key={i} />
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 )
}
