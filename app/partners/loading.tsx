import { Skeleton } from '@/components/ui/Skeleton'

export default function PartnersLoading() {
 return (
 <div className="bg-[#FAFAFA] min-h-screen">
 {/* Hero skeleton */}
 <div className="relative h-[50vh] min-h-[400px] bg-dfw-navy overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
 <div className="container mx-auto max-w-4xl space-y-6">
 <Skeleton className="h-6 w-32 rounded-full bg-white/10" />
 <Skeleton className="h-14 w-3/4 bg-white/10" />
 <Skeleton className="h-6 w-1/2 bg-white/10" />
 </div>
 </div>
 </div>

 {/* Intro skeleton */}
 <div className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto text-center space-y-4">
 <Skeleton className="h-8 w-64 mx-auto" />
 <Skeleton className="h-4 w-full max-w-lg mx-auto" />
 <Skeleton className="h-4 w-3/4 mx-auto" />
 </div>
 </div>
 </div>

 {/* Current partners skeleton */}
 <div className="py-20 bg-[#FAFAFA]">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12 space-y-4">
 <Skeleton className="h-4 w-28 mx-auto" />
 <Skeleton className="h-10 w-48 mx-auto" />
 </div>

 <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
 {Array.from({ length: 6 }).map((_, i) => (
 <Skeleton key={i} className="h-24 w-40 rounded-xl" />
 ))}
 </div>
 </div>
 </div>

 {/* Sponsorship tiers skeleton */}
 <div className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16 space-y-4">
 <Skeleton className="h-4 w-36 mx-auto" />
 <Skeleton className="h-10 w-64 mx-auto" />
 </div>

 <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
 {Array.from({ length: 3 }).map((_, i) => (
 <div key={i} className="rounded-2xl border border-gray-200 bg-[#050911] p-8 space-y-6">
 <Skeleton className="h-12 w-12 rounded-full mx-auto" />
 <Skeleton className="h-6 w-24 mx-auto" />
 <Skeleton className="h-10 w-20 mx-auto" />
 <div className="space-y-3 pt-6">
 {Array.from({ length: 4 }).map((_, j) => (
 <div key={j} className="flex items-center gap-3">
 <Skeleton className="h-4 w-4 rounded-full" />
 <Skeleton className="h-4 flex-1" />
 </div>
 ))}
 </div>
 <Skeleton className="h-12 w-full rounded-lg" />
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 )
}
