import { Skeleton } from '@/components/ui/Skeleton'

export default function ContactLoading() {
 return (
 <div className="bg-[#FAFAFA] min-h-screen">
 {/* Hero skeleton */}
 <div className="relative h-[40vh] min-h-[300px] bg-dfw-navy overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
 <div className="container mx-auto max-w-4xl space-y-6">
 <Skeleton className="h-6 w-24 rounded-full bg-white/10" />
 <Skeleton className="h-12 w-2/3 bg-white/10" />
 <Skeleton className="h-5 w-1/2 bg-white/10" />
 </div>
 </div>
 </div>

 {/* Contact content skeleton */}
 <div className="py-20 bg-[#FAFAFA]">
 <div className="container mx-auto px-4">
 <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
 {/* Form skeleton */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
 <Skeleton className="h-8 w-48" />
 <Skeleton className="h-4 w-full" />
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-2">
 <Skeleton className="h-4 w-20" />
 <Skeleton className="h-12 w-full rounded-lg" />
 </div>
 <div className="space-y-2">
 <Skeleton className="h-4 w-20" />
 <Skeleton className="h-12 w-full rounded-lg" />
 </div>
 </div>
 <div className="space-y-2">
 <Skeleton className="h-4 w-16" />
 <Skeleton className="h-12 w-full rounded-lg" />
 </div>
 <div className="space-y-2">
 <Skeleton className="h-4 w-20" />
 <Skeleton className="h-32 w-full rounded-lg" />
 </div>
 <Skeleton className="h-12 w-full rounded-lg" />
 </div>

 {/* Info skeleton */}
 <div className="space-y-8">
 <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
 <Skeleton className="h-6 w-40" />
 <div className="space-y-4">
 {Array.from({ length: 3 }).map((_, i) => (
 <div key={i} className="flex gap-4">
 <Skeleton className="h-12 w-12 rounded-lg" />
 <div className="flex-1 space-y-2">
 <Skeleton className="h-4 w-20" />
 <Skeleton className="h-5 w-40" />
 </div>
 </div>
 ))}
 </div>
 </div>
 <Skeleton className="h-64 w-full rounded-2xl" />
 </div>
 </div>
 </div>
 </div>
 </div>
 )
}
