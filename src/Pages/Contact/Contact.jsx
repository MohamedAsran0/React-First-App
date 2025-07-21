import { useState } from 'react'
import './Contact.css'

export default function Contact() {



  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')


  return (
    <main>
      <section id='contact' className='pb-5'>
        <div className='container '>

          <div className='py-5'>
            <h2 className='fs-1 fw-bold text-center'>CONTACT SECTION</h2>

            <div className='d-flex justify-content-center align-items-center my-3'>
              <div className="line me-3"></div>

              <i className="fa-solid fa-star"></i>

              <div className="line ms-3"></div>
            </div>
          </div>

          <div className='form m-auto'>
            <label htmlFor="userName" className={`form-label ${nameInput !== '' ? 'top-0' :''}`}>userName :</label>
            <input type="text" className="form-control" id="userName" placeholder="userName" onInput={(e) => {setNameInput(e.target.value)}}></input>

            
            <label htmlFor="userAge" className={`form-label ${ageInput !== '' ? 'top-0' :''}`}>userAge :</label>
            <input type="number" className="form-control" id="userAge" placeholder="userAge" onInput={(e) => {setAgeInput(e.target.value)}}></input>

            
            <label htmlFor="userEmail" className={`form-label ${emailInput !== '' ? 'top-0' :''}`}>userEmail :</label>
            <input type="email" className="form-control" id="userEmail" placeholder="userEmail" onInput={(e) => {setEmailInput(e.target.value)}}></input>

            
            <label htmlFor="userPassword" className={`form-label ${passwordInput !== '' ? 'top-0' :''}`}>userPassword :</label>
            <input type="password" className="form-control" id="userPassword" placeholder="userPassword" onInput={(e) => {setPasswordInput(e.target.value)}}></input>

            <button>Send Message</button>
          </div>

        </div>
      </section>
    </main>
  )
}
