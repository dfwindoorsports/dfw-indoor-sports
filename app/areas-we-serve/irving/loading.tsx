import { Skeleton } from '@/components/ui/Skeleton'

export default function CityPageLoading() {
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

            {/* Stats skeleton */}
            <div className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="text-center space-y-2">
                                <Skeleton className="h-10 w-16 mx-auto" />
                                <Skeleton className="h-4 w-20 mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Intro skeleton */}
            <div className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-10 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <Skeleton className="h-12 w-40 rounded-lg" />
                        </div>
                        <Skeleton className="h-80 w-full rounded-2xl" />
                    </div>
                </div>
            </div>

            {/* Services skeleton */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <Skeleton className="h-4 w-24 mx-auto" />
                        <Skeleton className="h-10 w-56 mx-auto" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-6 space-y-4">
                                <Skeleton className="h-12 w-12 rounded-lg" />
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
