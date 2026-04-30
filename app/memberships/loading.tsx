import { Skeleton, SkeletonPricingCard } from '@/components/ui/Skeleton'

export default function MembershipsLoading() {
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

            {/* Info section skeleton */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <Skeleton className="h-8 w-64 mx-auto" />
                        <Skeleton className="h-4 w-full max-w-lg mx-auto" />
                        <Skeleton className="h-4 w-3/4 mx-auto" />
                    </div>
                </div>
            </div>

            {/* Pricing cards skeleton */}
            <div className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <Skeleton className="h-4 w-32 mx-auto" />
                        <Skeleton className="h-10 w-64 mx-auto" />
                        <Skeleton className="h-5 w-96 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonPricingCard key={i} />
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ skeleton */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl space-y-6">
                    <Skeleton className="h-10 w-48 mb-12" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="border-b border-gray-100 pb-4">
                            <Skeleton className="h-6 w-full max-w-md" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
