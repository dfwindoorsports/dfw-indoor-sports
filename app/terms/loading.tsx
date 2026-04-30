import { Skeleton } from '@/components/ui/Skeleton'

export default function LegalPageLoading() {
 return (
 <div className="bg-[#FAFAFA] min-h-screen">
 {/* Hero skeleton */}
 <div className="relative h-[35vh] min-h-[280px] bg-dfw-navy overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
 <div className="container mx-auto max-w-3xl space-y-4">
 <Skeleton className="h-5 w-24 rounded-full bg-white/10" />
 <Skeleton className="h-12 w-2/3 bg-white/10" />
 <Skeleton className="h-4 w-1/3 bg-white/10" />
 </div>
 </div>
 </div>

 {/* Content skeleton */}
 <div className="py-16 bg-[#FAFAFA]">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
 <div className="space-y-8">
 {Array.from({ length: 6 }).map((_, i) => (
 <div key={i} className="space-y-4">
 <Skeleton className="h-8 w-48" />
 <Skeleton className="h-4 w-full" />
 <Skeleton className="h-4 w-full" />
 <Skeleton className="h-4 w-3/4" />
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 )
}
