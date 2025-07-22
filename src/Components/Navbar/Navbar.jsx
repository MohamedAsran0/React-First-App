import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg navbar-dark py-3 fixed-top">
                <div className="container">
                    <Link className="navbar-brand fs-2 fw-bold" to={'/React-First-App/'}>START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold text-white mt-1 me-3 p-2" aria-current="page" to={'about'}>ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold text-white mt-1 me-3 p-2" to={'portfolio'}>PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold text-white mt-1 me-3 p-2" to={'contact'}>CONTACT</NavLink>
                            </li>
                           
                            
                        </ul>
                    
                    </div>
                </div>
            </nav>

        </>
    )
}
