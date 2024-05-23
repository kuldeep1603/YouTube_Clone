import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { UseGlobalContext } from '../../Data/Data';
import "../Header/Header.css"
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import { MenuItems } from "../SideBar/SideBar"

function OffcanvasSide() {
    const { handleClose, show, handleCategory } = UseGlobalContext();
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <ul className='d-flex m-0 p-0 gap-3 flex-wrap align-items-center'>
                            <li>
                                <a href='#' onClick={handleClose}><FaBars size={20} className='text-white' /></a>
                            </li>
                            <li className=''>
                                <Link to={`/`} className='d-flex gap-2 flex-wrap align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.83em" height="1.9em" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" /><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" /></svg>
                                    <h1 className='text-white m-0 fs-20 fw-800'>YouTube</h1>
                                </Link>
                            </li>
                        </ul>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='m-0 p-0'>
                        {
                            MenuItems.map((CurMenu, index) => {
                                const { title, id, icon } = CurMenu;
                                return (
                                    <li className='mb-2 rounded-2' onClick={() => handleCategory(id)} key={index}>
                                        <NavLink className='d-flex px-2 py-2 align-items-center  gap-3 '>
                                            {icon}
                                            <p className='text-white m-0 fs-16'>{title}</p>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffcanvasSide
