import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-bg-1 py-5'>

                <div className="container text-white text-center">

                    <div className='p-4'>

                        <div className="row gy-4">

                            <div className="col-md-4">

                                <div className="inner">

                                    <h3>LOCATION</h3>
                                    <p>2215 John Daniel Drive</p>
                                    <p>Clark, MO 65243</p>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="inner footer-first-section-middle">

                                    <h3>AROUND THE WEB</h3>
                                    <ul className='list-unstyled d-flex justify-content-center'>
                                        <li><i className="fa-brands fa-facebook"></i></li>
                                        <li><i className="fa-brands fa-twitter"></i></li>
                                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                                        <li><i className="fa-solid fa-globe"></i></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="inner">

                                    <h3>ABOUT FREELANCER</h3>
                                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-bg-2 text-white text-center p-3">
                <p>Copyright &copy; Your Website 2021</p>
            </div>
        </footer>
    )
}

