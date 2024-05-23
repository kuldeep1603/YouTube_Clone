import React from 'react'
import "./SearchData.css";
import { UseGlobalContext } from '../../Data/Data';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';

const SearchData = () => {
    const { SearchItems, CategoryId } = UseGlobalContext();
    return (
        <>
            <section className='section searchdata'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 d-md-block d-none">
                            <SideBar />
                        </div>
                        <div className="col-md-11 col-12">
                            <div className="row">
                                {
                                    SearchItems.map((CurVideo, index) => {
                                        return (
                                            <div className="col-12 mb-3" key={index}>
                                                <Link to={`/Videos/${CategoryId}/${CurVideo.id.videoId ? CurVideo.id.videoId : CurVideo.id}`}>
                                                    <div className="card bg-primary-1">
                                                        <div className="row">
                                                            <div className="col-sm-5">
                                                                <img src={CurVideo.snippet.thumbnails.high.url} alt={CurVideo.snippet.channelTitle} title={CurVideo.snippet.channelTitle} className='img-fluid rounded-1' loading='lazy' />
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="card-body">
                                                                    <h6 className='m-0 fs-18 text-white'>{CurVideo.snippet.title}</h6>
                                                                    <p className='m-0 tertiary-color mt-2 fs-15 text'>{CurVideo.snippet.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchData
