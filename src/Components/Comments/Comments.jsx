import React from 'react'
import "./Comments.css"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { UseGlobalContext } from '../../Data/Data'
import { UserDefaultImg } from "../../Data/Data"
import CommentSkeleton from './CommentSkeleton';
const Comments = ({ Comments, loading }) => {
    const { getTimeDifference, IsError } = UseGlobalContext();
    if (loading) {
        return (
            <div className="row">
                {[...Array(20)].map((_, index) => (
                    <CommentSkeleton key={index} />
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
                Comments.map((CurComments, index) => {
                    return (
                        <div className="col-12" key={index}>
                            <div className="card card-body bg-primary-1">
                                <div className="row">
                                    <div className="col-sm-1 col-2 ps-sm-0 ">
                                        <a href={CurComments.snippet.topLevelComment.snippet.authorChannelUrl} target='_blank'>
                                            <img src={CurComments.snippet.topLevelComment.snippet.authorProfileImageUrl ? CurComments.snippet.topLevelComment.snippet.authorProfileImageUrl : UserDefaultImg} alt={CurComments.snippet.topLevelComment.snippet.authorDisplayName} title={CurComments.snippet.topLevelComment.snippet.authorDisplayName} className='img-fluid rounded-circle' loading='lazy' />
                                        </a>
                                    </div>
                                    <div className="col-sm-11 col-10">
                                        <ul className='d-flex p-0  flex-wrap m-0 gap-3 align-items-center'>
                                            <li>
                                                <span className='fs-15 text-white text-ellipsis'>{CurComments.snippet.topLevelComment.snippet.authorDisplayName}</span>
                                            </li>
                                            <li>
                                                <span className='text-white fs-14'>{getTimeDifference(CurComments.snippet.topLevelComment.snippet.publishedAt.slice(0, 10))}</span>
                                            </li>
                                        </ul>
                                        <p className='text-white fs-15 mt-2 mb-1'>{CurComments.snippet.topLevelComment.snippet.textOriginal}</p>
                                        <ul className='d-flex gap-3 align-items-center flex-wrap m-0  p-0'>
                                            <li className='d-flex gap-2 align-items-center flex-wrap'>
                                                <BiLike size={18} />
                                                <span>{CurComments.snippet.topLevelComment.snippet.likeCount}</span>
                                            </li>
                                            <li>
                                                <BiDislike size={18} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Comments
