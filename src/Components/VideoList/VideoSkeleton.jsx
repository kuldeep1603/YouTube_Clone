import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const VideoSkeleton = () => {
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={1} style={{ height: "200px" }} />
                <Skeleton count={1} className='mt-3'/>
                <Skeleton count={1} width={"80%"} />
                <Skeleton count={1} width={"70%"}/>
            </SkeletonTheme>
        </>
    )
}

export default VideoSkeleton
