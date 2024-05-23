import React from 'react'
import "./VideoList.css"
import Filters from '../Filters/Filters'
import { UseGlobalContext } from '../../Data/Data'
import VideoSkeleton from './VideoSkeleton'
import { Link } from 'react-router-dom'
const VideoList = () => {
    const { IsLoading, CategoryId, IsError, items, nFormatter, getTimeDifference, parseDuration } = UseGlobalContext();
    if (IsLoading) {
        return (
            <div className="row">
                {[...Array(20)].map((_, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                        <VideoSkeleton />
                    </div>
                ))}
            </div>
        );
    }

    if (IsError) {
        return <p>Error loading data.</p>;
    }
    return (
        <>
            <div className="row mb-4 filters">
                <div className="col-12">
                    <Filters />
                </div>
            </div>
            <div className="row videos-list">
                {
                    items.map((CurVideo, index) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                                <Link to={`/Videos/${CategoryId}/${CurVideo.id}`}>
                                    <div className="card bg-primary-1 border-0 rounded-1">
                                        <div className="img">
                                            <img src={CurVideo.snippet.thumbnails.medium.url} alt={CurVideo.snippet.channelTitle} title={CurVideo.snippet.channelTitle} loading='lazy' className='img-fluid rounded-2' />
                                            <span className='text-white fs-12 bg-primary-1 px-2 py-1'>{CurVideo.contentDetails.duration ? parseDuration(CurVideo.contentDetails.duration) : "1:20"}</span>
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className='m-0 text-white'>{CurVideo.snippet.title.length > 35 ? `${CurVideo.snippet.title.slice(0, 35)}...` : CurVideo.snippet.title}</h6>
                                            <ul className='p-0 m-0 mt-2'>
                                                <li>
                                                    <p className='m-0 tertiary-color fs-15'>{CurVideo.snippet.channelTitle.length > 40 ? `${CurVideo.snippet.channelTitle.slice(0, 40)}...` : CurVideo.snippet.channelTitle}</p>
                                                </li>
                                                <li className='d-flex gap-3 align-items-center'>
                                                    <p className='m-0 tertiary-color fs-15 '>{nFormatter(CurVideo.statistics.viewCount)} views</p>
                                                    <p className='m-0 tertiary-color fs-15'>{getTimeDifference(CurVideo.snippet.publishedAt)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default VideoList
