import { Skeleton } from '@/components/ui/Skeleton'

export default function SportsLoading() {
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

            {/* Sports grid skeleton */}
            <div className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <Skeleton className="h-4 w-28 mx-auto" />
                        <Skeleton className="h-10 w-56 mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
                                <Skeleton className="h-56 w-full rounded-none" />
                                <div className="p-8 space-y-4">
                                    <Skeleton className="h-8 w-40" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-10 w-32 rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
