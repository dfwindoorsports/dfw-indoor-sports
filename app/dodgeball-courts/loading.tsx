import { Skeleton } from '@/components/ui/Skeleton'

export default function SportPageLoading() {
    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            {/* Hero skeleton */}
            <div className="relative h-[60vh] min-h-[500px] bg-dfw-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-4xl space-y-6">
                        <Skeleton className="h-6 w-28 rounded-full bg-white/10" />
                        <Skeleton className="h-16 w-3/4 bg-white/10" />
                        <Skeleton className="h-6 w-1/2 bg-white/10" />
                        <Skeleton className="h-12 w-40 rounded-lg bg-white/10" />
                    </div>
                </div>
            </div>

            {/* Intro section */}
            <div className="py-16 bg-white">
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

            {/* Features skeleton */}
            <div className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <Skeleton className="h-4 w-28 mx-auto" />
                        <Skeleton className="h-10 w-48 mx-auto" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 space-y-4">
                                <Skeleton className="h-12 w-12 rounded-lg" />
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing skeleton */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 space-y-4">
                        <Skeleton className="h-10 w-40 mx-auto" />
                    </div>
                    <Skeleton className="h-64 w-full max-w-4xl mx-auto rounded-2xl" />
                </div>
            </div>

            {/* FAQ skeleton */}
            <div className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Skeleton className="h-10 w-32 mb-12" />
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                                <Skeleton className="h-6 w-3/4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
