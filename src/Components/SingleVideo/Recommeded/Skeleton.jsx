import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const RecommeddedSkeleton = () => {
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className="row ">
                    <div className="col-sm-6 col-12">
                        <Skeleton count={1} style={{ height: "120px", width:"100%" }} />
                    </div>
                    <div className="col-sm-6 col-12 mt-sm-0 mt-3">
                        <Skeleton count={1} style={{height:"30px"}} />
                        <Skeleton count={1} className='mt-2'/>
                        <Skeleton count={1} className='mt-2'/>
                    </div>
                </div>
            </SkeletonTheme>
        </>
    )
}

export default RecommeddedSkeleton
