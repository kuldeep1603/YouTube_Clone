import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CommentSkeleton = () => {
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className="row mb-3">
                    <div className="col-sm-1 col-2 ps-sm-0">
                        <Skeleton count={1} height={"45px"} width={"45px"} className='rounded-circle' />
                    </div>
                    <div className="col-sm-11 col-10 ">
                        <Skeleton count={1} style={{ height: "20px" }} />
                        <Skeleton count={1} className='mt-2' style={{ height: "50px" }} />
                    </div>
                </div>
            </SkeletonTheme>
        </>
    )
}

export default CommentSkeleton
