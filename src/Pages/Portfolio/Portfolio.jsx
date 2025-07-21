import './Portfolio.css'

import image1 from '../../assets/images/port1.png'
import image2 from '../../assets/images/port2.png'
import image3 from '../../assets/images/port3.png'

export default function Portfolio() {
  return (
    <main>
      <section id='portfolio' className='min-vh-100'>
        <div className='container text-center'>

          <div className='py-5'>
            <h2 className='fs-1 fw-bold'>PORTFOLIO COMPONENT</h2>

            <div className='d-flex justify-content-center align-items-center my-3'>
              <div className="line me-3"></div>

              <i className="fa-solid fa-star"></i>

              <div className="line ms-3"></div>
            </div>
          </div>


          <div className="row gy-4 mb-5">

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image1">
                <img src={image1} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image2">
                <img src={image2} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image3">
                <img src={image3} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image1">
                <img src={image1} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image2">
                <img src={image2} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6">
              <figure className='card rounded-3 overflow-hidden position-relative mb-0' data-bs-toggle="modal" data-bs-target="#image3">
                <img src={image3} className='w-100' alt="Image 1" />
                <figcaption className='d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </figcaption>
              </figure>
            </div>

          </div>


          {/* Modal 1 */}
          <div className="modal bg-primary bg-opacity-25 fade " id="image1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog my-0 h-100 d-flex justify-content-center align-items-center">
              <div className="modal-content ">
                <div className="modal-body p-0">
                  <img src={image1} className='w-100' alt="Image 1" />
                </div>
              </div>
            </div>
          </div>

          {/* Modal 2 */}
          <div className="modal bg-primary bg-opacity-25 fade " id="image2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog my-0 h-100 d-flex justify-content-center align-items-center">
              <div className="modal-content ">
                <div className="modal-body p-0">
                  <img src={image2} className='w-100' alt="Image 1" />
                </div>
              </div>
            </div>
          </div>

          {/* Modal 3 */}
          <div className="modal bg-primary bg-opacity-25 fade " id="image3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog my-0 h-100 d-flex justify-content-center align-items-center">
              <div className="modal-content ">
                <div className="modal-body p-0">
                  <img src={image3} className='w-100' alt="Image 1" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </main>
  )
}
