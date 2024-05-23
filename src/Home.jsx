import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import VideoList from './Components/VideoList/VideoList'

const Home = () => {
    return (
        <>
            <section className='section home position-relative'>
                <div className="container-fluid ps-md-0">
                    <div className="row">
                        <div className="col-md-1 d-md-block d-none">
                            <SideBar />
                        </div>
                        <div className="col-md-11 col-12">
                            <VideoList/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
