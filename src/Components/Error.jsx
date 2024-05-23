import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='section d-flex justify-content-center align-items-center height-100vh'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <h4 className='text-white fs-20 fw-700 mb-4'>Page Not Found ...!</h4>
                        <Link to={`/`} className='text-white bg-secondary-1 px-4 py-2 rounded-2'>Home</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error
