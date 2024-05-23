import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import "./Filters.css"
import { UseGlobalContext } from '../../Data/Data';
const items = [
    { id: 0, value: "All", },
    { id: 10, value: "Music", },
    { id: 1, value: "Film & Animation", },
    { id: 2, value: "Autos & Vehicles", },
    { id: 15, value: "Pets & Animals" },
    { id: 17, value: "Sports", },
    // { id: 18, value: "Short Movies", },
    // { id: 19, value: "Travel & Events", },
    { id: 20, value: "	Gaming", },
    // { id: 21, value: "Videoblogging", },
    { id: 22, value: "People & Blogs", },
    { id: 24, value: "Entertainment", },
    { id: 25, value: "News & Politics", },
    { id: 26, value: "Howto & Style", },
    { id: 23, value: "Comedy", },
]


const Filters = () => {
    const { handleCategory } = UseGlobalContext();
    return (
        <>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    450: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                {
                    items.map((e, i) => {
                        return (
                            <SwiperSlide className="px-2 py-2 rounded-1" key={i}>
                                <a onClick={() => handleCategory(e.id)} className="text-white fs-14">{e.value}</a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Filters
