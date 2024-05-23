import React, { useEffect, useState, useReducer } from 'react'
import "./SingleVideo.css"
import { useParams } from 'react-router-dom'
import { BASE_API_URL, API_KEY, UseGlobalContext } from '../../Data/Data'
import { reducer } from '../../Data/Reducer'
import { BsBellFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import Comments from '../Comments/Comments'
import Recommeded from './Recommeded/Recommeded'
import { UserDefaultImg } from "../../Data/Data"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const initialState = {
    SingleDetails: null,
    IsLoading: true,
    IsError: false,
    ChannelDetails: null,
    Comments: [],
    Recommeded: [],
}
const SingleVideo = () => {
    const { nFormatter } = UseGlobalContext();
    const { VideoId } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchdata = async (url, actionType) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.items);
            if (data.items) {
                dispatch({
                    type: actionType,
                    payload: {
                        items: data.items[0],
                    }
                })
            } else {
                dispatch({ type: "SET_ERROR" })
            }
        } catch (error) {
            console.log(error);
        }
    }
    const CommentsFetchdata = async (url, actionType) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.items);
            if (data.items) {
                dispatch({
                    type: actionType,
                    payload: {
                        items: data.items,
                    }
                })
            } else {
                dispatch({ type: "SET_ERROR" })
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        setTimeout(() => {
            if (state.SingleDetails) {
                fetchdata(`${BASE_API_URL}/channels?part=snippet,statistics&id=${state.SingleDetails.snippet.channelId}&key=${API_KEY}`, "CHANNEL_DATA");
            }
        }, 500);
    }, [state.SingleDetails]);

    // fetch data useffect
    useEffect(() => {
        setTimeout(() => {
            if (VideoId) {
                fetchdata(`${BASE_API_URL}/videos?part=snippet,contentDetails,statistics&id=${VideoId}&key=${API_KEY}`, "SINGLE_DATA");
                CommentsFetchdata(`${BASE_API_URL}/commentThreads?part=snippet&videoId=${VideoId}&key=${API_KEY}`, "COMMENTS_DATA");
                CommentsFetchdata(`${BASE_API_URL}/search?part=snippet&relatedToVideoId=${VideoId}&type=video&key=${API_KEY}`, "REALTED_DATA");
            }
        }, 500);
    }, [VideoId]);

    return (
        <>
            <section className='section video-details'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            {state.SingleDetails && (
                                <>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            {
                                                state.IsLoading ? (
                                                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                                        <Skeleton count={1} style={{ height: "300px" }} />
                                                    </SkeletonTheme>
                                                ) : (
                                                    <iframe
                                                        width="100%"
                                                        className='rounded-2 single-video'
                                                        src={`https://www.youtube.com/embed/${VideoId}`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        loading='lazy'
                                                    ></iframe>
                                                )
                                            }
                                        </div>
                                        {state.ChannelDetails && (
                                            <>
                                                <div className="col-12 mb-3">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-1 col-md-1 col-sm-1 col-2 pe-sm-0">
                                                            <img src={state.ChannelDetails.snippet.thumbnails.high.url ? state.ChannelDetails.snippet.thumbnails.high.url : UserDefaultImg} alt={state.ChannelDetails.snippet.title} title={state.ChannelDetails.snippet.title} loading='lazy' className='channel-logo img-fluid rounded-circle' />
                                                        </div>
                                                        <div className="col-lg-4 col-sm-5 col-5">
                                                            <h5 className='text-white fs-16 mb-0 text-ellipsis fw-700'>{state.SingleDetails.snippet.channelTitle}</h5>
                                                            <span className='text-white fs-14 light-color'>{nFormatter(state.ChannelDetails.statistics.subscriberCount)} subscribers</span>
                                                        </div>
                                                        <div className="col-lg-3 col-sm-4 col-5">
                                                            <a href="#" className='rounded-pill p-2 text-white bg-black-light text-capitalize d-flex gap-2 align-items-center flex-wrap justify-content-center'><BsBellFill size={16} /> Subscribed</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <ul className='d-flex  m-0 p-0 gap-3 align-items-center flex-wrap'>
                                                        <li>
                                                            <a href="#" className='rounded-pill px-4 py-2 fs-14 text-white bg-black-light text-capitalize d-flex gap-2 align-items-center flex-wrap justify-content-center'><BiLike size={18} />{nFormatter(state.SingleDetails.statistics.likeCount)}  |   <BiDislike size={18} /> </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className='rounded-pill px-4 py-2 fs-14 text-white bg-black-light text-capitalize d-flex gap-2 align-items-center flex-wrap justify-content-center'><FaRegEye size={18} />{nFormatter(state.SingleDetails.statistics.viewCount)} View</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className='rounded-pill px-4 py-2 fs-15 text-white bg-black-light text-capitalize d-flex gap-2 align-items-center flex-wrap justify-content-center'><TbShare3 size={18} /> Share</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className='rounded-pill px-4 py-2 fs-15 text-white bg-black-light text-capitalize d-flex gap-2 align-items-center flex-wrap justify-content-center'><HiDownload size={17} /> Download</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    {
                                                        state.IsLoading ? (
                                                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                                                <Skeleton count={1} style={{ height: "150px" }} />
                                                            </SkeletonTheme>
                                                        ) : (
                                                            <div className="card card-body bg-black-light rounded-2">
                                                                <p className='fs-15 light-color'>{state.SingleDetails.snippet.description}</p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                            <div className="row">
                                <Comments Comments={state.Comments} loading={state.IsLoading} />
                            </div>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className='text-white fs-20 fw-700 m-0 mb-3'>Recommeded Videos</h4>
                                </div>
                                <Recommeded />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleVideo
