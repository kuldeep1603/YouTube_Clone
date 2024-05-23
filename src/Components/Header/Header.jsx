import React from 'react'
import "./Header.css"
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMicrophone } from "react-icons/hi2";
import { FaChromecast } from "react-icons/fa";
import { UseGlobalContext } from '../../Data/Data';
import { Link } from 'react-router-dom';
import OffcanvasSide from '../SideBar/OffcanvasSide';

const Header = () => {

    const { handleShow, searchQuery, handleQuery, handleFormSubmit } = UseGlobalContext();

    return (
        <>
            <section className='header py-3'>
                <div className="container-fluid px-4">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-5 col-2">
                            <ul className='d-flex m-0 p-0 gap-3 flex-wrap align-items-center'>
                                <li>
                                    <a href='#' onClick={handleShow}><FaBars size={21} className='text-white' /></a>
                                </li>
                                <li className='d-sm-block d-none'>
                                    <Link to={`/`} className="d-flex gap-2 flex-wrap align-items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.83em" height="1.9em" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" /><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" /></svg>
                                        <h1 className='text-white m-0 fs-20 fw-800'>YouTube</h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-7 col-10">
                            <form action="" autoComplete='off' onSubmit={handleFormSubmit}>
                                <div class="input-group">
                                    <input type="text" value={searchQuery} onChange={(e) => handleQuery(e.target.value)} class="form-control px-3 py-2" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                    <button class="btn " type="button" id="button-addon2"><GoSearch size={20} className='text-white' /></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-1 d-md-block d-none">
                            <a href='#' className='bg-black-light rounded-circle text-white mic'><HiMicrophone size={18} /></a>
                        </div>
                        <div className="col-2 d-md-block d-none">
                            <ul className='d-flex gap-3 m-0 p-0 align-items-center justify-content-end'>
                                <li>
                                    <FaChromecast size={22} />
                                </li>
                                <li>
                                    <IoIosNotificationsOutline size={25} />
                                </li>
                                <li>
                                    <img src="./img/Kuldeep_Mourya.jpg" alt="Kuldeep Mourya" title='Kuldeep Mourya' loading='lazy' className='img-fluid rounded-circle user-img object-fit-cover' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <OffcanvasSide />
        </>
    )
}

export default Header
