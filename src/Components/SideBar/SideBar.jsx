import React from 'react'
import { FaMusic } from "react-icons/fa6";
import { FaHackerNewsSquare } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { BsFillTrophyFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { MdOutlinePets } from "react-icons/md";
import { SiRemedyentertainment } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";

import { Link } from 'react-router-dom';
import "./SibeBar.css";
import { UseGlobalContext } from '../../Data/Data';

export const MenuItems = [
    { title: "Home", id: 0, icon: <IoHome size={20} className='text-white' /> },
    { title: "Shorts", id: 20, icon: <SiYoutubeshorts size={20} className='text-white' /> },
    { title: "Music", id: 10, icon: <FaMusic size={20} className='text-white' /> },
    { title: "News", id: 25, icon: <FaHackerNewsSquare size={20} className='text-white' /> },
    { title: "Sports", id: 17, icon: <BsFillTrophyFill size={20} className='text-white' /> },
    { title: "Gaming", id: 20, icon: <IoGameController size={20} className='text-white' /> },
    { title: "Pets & Animals", id: 15, icon: <MdOutlinePets size={20} className='text-white' /> },
    { title: "Entertainment", id: 24, icon: <SiRemedyentertainment size={20} className='text-white' /> },
    { title: "People & Blogs", id: 22, icon: <LiaBlogSolid size={20} className='text-white' /> },
]

const SideBar = () => {
    const { handleCategory } = UseGlobalContext();
    return (
        <>
            <div className="card card-body bg-primary-1 h-100vh sidebar">
                <ul className='m-0 p-0'>
                    {
                        MenuItems.slice(0, 4).map((CurMenu, index) => {
                            const { title, id, icon } = CurMenu;
                            return (
                                <li className='mb-4' onClick={() => handleCategory(id)} key={index}>
                                    <Link className='d-flex  justify-content-center align-items-center flex-column gap-1'>
                                        {icon}
                                        <p className='text-white m-0 fs-12'>{title}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </>
    )
}

export default SideBar
