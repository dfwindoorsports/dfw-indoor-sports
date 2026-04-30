import { Skeleton } from '@/components/ui/Skeleton'

export default function AboutLoading() {
 return (
 <div className="bg-[#FAFAFA] min-h-screen">
 {/* Hero skeleton */}
 <div className="relative h-[60vh] min-h-[500px] bg-dfw-navy overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
 <div className="container mx-auto max-w-4xl space-y-6">
 <Skeleton className="h-6 w-32 rounded-full bg-white/10" />
 <Skeleton className="h-16 w-3/4 bg-white/10" />
 <Skeleton className="h-6 w-1/2 bg-white/10" />
 </div>
 </div>
 </div>

 {/* Story section skeleton */}
 <div className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
 <div className="space-y-6">
 <Skeleton className="h-4 w-24" />
 <Skeleton className="h-10 w-3/4" />
 <Skeleton className="h-4 w-full" />
 <Skeleton className="h-4 w-full" />
 <Skeleton className="h-4 w-2/3" />
 </div>
 <Skeleton className="h-80 w-full rounded-2xl" />
 </div>
 </div>
 </div>

 {/* Stats skeleton */}
 <div className="py-16 bg-[#FAFAFA]">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
 {Array.from({ length: 4 }).map((_, i) => (
 <div key={i} className="text-center space-y-2">
 <Skeleton className="h-12 w-20 mx-auto" />
 <Skeleton className="h-4 w-24 mx-auto" />
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Team skeleton */}
 <div className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16 space-y-4">
 <Skeleton className="h-4 w-24 mx-auto" />
 <Skeleton className="h-10 w-48 mx-auto" />
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
 {Array.from({ length: 3 }).map((_, i) => (
 <div key={i} className="rounded-2xl border border-gray-100 bg-[#050911] overflow-hidden">
 <Skeleton className="h-64 w-full rounded-none" />
 <div className="p-6 text-center space-y-3">
 <Skeleton className="h-6 w-32 mx-auto" />
 <Skeleton className="h-4 w-24 mx-auto" />
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 )
}
