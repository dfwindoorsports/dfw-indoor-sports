import { Skeleton, SkeletonProfileCard } from '@/components/ui/Skeleton'

export default function CoachesLoading() {
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

 {/* Intro section skeleton */}
 <div className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto text-center space-y-4">
 <Skeleton className="h-8 w-64 mx-auto" />
 <Skeleton className="h-4 w-full max-w-lg mx-auto" />
 <Skeleton className="h-4 w-3/4 mx-auto" />
 </div>
 </div>
 </div>

 {/* Coaches grid skeleton */}
 <div className="py-20 bg-[#FAFAFA]">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16 space-y-4">
 <Skeleton className="h-4 w-24 mx-auto" />
 <Skeleton className="h-10 w-56 mx-auto" />
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
 {Array.from({ length: 8 }).map((_, i) => (
 <SkeletonProfileCard key={i} />
 ))}
 </div>
 </div>
 </div>

 {/* CTA section skeleton */}
 <div className="py-20 bg-dfw-navy">
 <div className="container mx-auto px-4 text-center space-y-6">
 <Skeleton className="h-10 w-64 mx-auto bg-white/10" />
 <Skeleton className="h-5 w-96 mx-auto bg-white/10" />
 <Skeleton className="h-14 w-48 mx-auto rounded-lg bg-white/10" />
 </div>
 </div>
 </div>
 )
}
