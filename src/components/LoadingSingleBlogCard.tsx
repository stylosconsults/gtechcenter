import React from 'react';

const LoadingSingleBlogCard = () => {
    return (
        <div className="flex justify-evenly">
            {/* Left Column - Main Content */}
            <div className="w-[60%] flex flex-col gap-[2em]">
                {/* Image Skeleton */}
                <div className="w-full h-[550px] bg-gray-200 animate-pulse rounded-md"></div>
                
                {/* Title Skeleton */}
                <div className="h-10 bg-gray-200 animate-pulse rounded-md w-[90%]"></div>
                
                {/* Description Skeleton */}
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded-md w-[95%]"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded-md w-[90%]"></div>
                </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-[28%] flex flex-col gap-[6em] p-1">
                {/* Search Bar
                <div className="flex border rounded-md overflow-hidden h-[52px]">
                    <div className="w-[80%] bg-gray-200 animate-pulse"></div>
                    <div className="w-[20%] bg-gray-300 animate-pulse"></div>
                </div> */}

                {/* Category */}
                <div className="space-y-3">
                    <div className="h-8 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
                    <div className="p-7 bg-gray-100">
                        <div className="h-6 bg-gray-200 animate-pulse rounded-md w-2/3"></div>
                    </div>
                </div>

                {/* Recent Posts */}
                <div className="h-[400px] space-y-3">
                    <div className="h-8 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
                    <div className="space-y-2">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="h-[60px] bg-gray-200 animate-pulse rounded-md"></div>
                        ))}
                    </div>
                </div>

                {/* Tag Cloud */}
                <div className="space-y-3">
                    <div className="h-8 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
                    <div className="flex flex-wrap gap-2">
                        {[...Array(12)].map((_, index) => (
                            <div key={index} className="h-8 w-20 bg-gray-200 animate-pulse rounded-md"></div>
                        ))}
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default LoadingSingleBlogCard;