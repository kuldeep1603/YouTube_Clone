import React from 'react'
import "./Recommeded.css"
import { Link } from 'react-router-dom'
import { UseGlobalContext } from '../../../Data/Data'
import RecommeddedSkeleton from './Skeleton'

const Recommeded = () => {
    const { items, nFormatter, CategoryId, getTimeDifference, IsLoading, IsError } = UseGlobalContext();
    const data = items.slice(0, 15);
    if (IsLoading) {
        return (
            <div className="row">
                {[...Array(20)].map((_, index) => (
                    <RecommeddedSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (IsError) {
        return <p>Error loading data.</p>;
    }
    return (
        <>
            {
                data.map((CurElem, index) => {
                    return (
                        <Link to={`/Videos/${CategoryId}/${CurElem.id}`}>
                            <div className="col-12 mb-4" key={index}>
                                <div className="row">
                                    <div className="col-sm-6 col-12">
                                        <img src={CurElem.snippet.thumbnails.medium.url} alt={CurElem.snippet.channelTitle} title={CurElem.snippet.channelTitle} loading='lazy' className='img-fluid rounded-2' />
                                    </div>
                                    <div className="col-sm-6 col-12 mt-sm-0 mt-3">
                                        <h6 className='m-0 text-white '>{CurElem.snippet.title.length > 35 ? `${CurElem.snippet.title.slice(0, 35)}...` : CurElem.snippet.title}</h6>
                                        <ul className='p-0 m-0 mt-2'>
                                            <li>
                                                <p className='m-0 tertiary-color fs-15'>{CurElem.snippet.channelTitle.length > 40 ? `${CurElem.snippet.channelTitle.slice(0, 40)}...` : CurElem.snippet.channelTitle}</p>
                                            </li>
                                            <li className='d-flex gap-3 align-items-center'>
                                                <p className='m-0 tertiary-color fs-15 '>{nFormatter(CurElem.statistics.viewCount)} views</p>
                                                <p className='m-0 tertiary-color fs-15'>{getTimeDifference(CurElem.snippet.publishedAt)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }

        </>
    )
}

export default Recommeded
