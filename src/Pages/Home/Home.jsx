
import './Home.css'

import image from '../../assets/images/avatar.svg'


export default function Home() {
    return (
        <main>
            <section id='home' className='d-flex justify-content-center align-items-center'>
                <div className='container text-center text-white'>
                    <img src={image} className='my-5' alt="Avatar" />

                    <h2 className='fs-1 fw-bold'>START FRAMEWORK</h2>

                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <div className="line me-3"></div>
                        
                        <i className="fa-solid fa-star"></i>
                        
                        <div className="line ms-3"></div>
                    </div>

                    <p className='mb-0 pb-5'>Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </section>
        </main>
    )
}
