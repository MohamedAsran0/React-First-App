import './About.css'
export default function About() {
  return (
    <main>
      <section id='about' className='d-flex justify-content-center align-items-center'>
        <div className='container text-white'>

          <h2 className='fs-1 fw-bold text-center'>ABOUT COMPOENET</h2>

          <div className='d-flex justify-content-center align-items-center my-4'>
            <div className="line me-3"></div>

            <i className="fa-solid fa-star"></i>

            <div className="line ms-3"></div>
          </div>

          <div className='row'>

            <div className="col-md-6">
              <div className="inner ps-md-5">
                <p className='mb-0 pb-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="inner pe-md-5">
                <p className='mb-0 pb-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
