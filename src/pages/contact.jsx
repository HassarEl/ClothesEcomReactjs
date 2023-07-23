import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const contact = () => {
  return <>
    <section className="contact-wrapper p-5">
      <div className="container-xxl">
        <div className="row">
          <div className='text-center'>
            <h1>#Reach Out To Us</h1>
            <p className='text-white fs-3'>We Only a Step away from you</p>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-info">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
                <div className="col-6 p-3">
                  <map name="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13231.604951936435!2d-6.867277249999999!3d33.99507045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1689953195712!5m2!1sfr!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </map>
                </div>

                <div className="col-6 d-flex justify-content-center">
                  <div className="footer-details">
                    <div className="text-center mb-5">
                      <h1>Contact Information</h1>
                    </div>
                    <p className='mb-3'><b>Address :</b> 97 000 Rue Nakhil, Hey Riad, Rabat, MAROC</p>
                    <p className='mb-3'><b>Phone :</b> <a href="tel:+212690221821" className=''>Call Us at +212(000-000-000)</a></p>
                    <p className='mb-5'><b>Hours Open :</b> From 8:30 to 21:30</p>
                    <p className='mb-3'><b>Follow Us </b> </p>
                    <div className="col-4 social-icons mb-3 d-flex justify-content-around">
                      <Link><AiFillTwitterCircle className='fs-3 px-1'/></Link>
                      <Link><BsFacebook className='fs-3 px-1'/></Link>
                      <Link><BsInstagram className='fs-3 px-1'/></Link>
                      <Link><BsLinkedin className='fs-3 px-1'/></Link>
                    </div>
                    <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam est aperiam ipsam, explicabo, cupiditate expedita suscipit rerum et ipsum quos sunt incidunt aliquid fuga quibusdam. Assumenda, sit. Alias, rerum officiis?</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section className="form p-5">
      <div className="container-xxl">
        <div className="row">
          
          <div className="d-flex justify-content-center align-items-center">
            <div className="card col-8">
              <div className="text-center mb-3">
                <h2>Send Us A Message</h2>
              </div>
              <div className="col-12 d-flex mb-3">
                <div className="col-6 p-2">
                  <input 
                    type="text"
                    className='form-control p-2'
                    placeholder='Enter Your First Name'
                    aria-label='Enter First Name'
                    aria-describedby='basic-addon2' />
                </div>
                <div className="col-6 p-2">
                  <input 
                    type="text"
                    className='form-control p-2'
                    placeholder='Enter your Second Name'
                    aria-label='Enter Second Name'
                    aria-describedby='basic-addon2' />
                </div>
                
              </div>
              <div className='col-12 p-2'>
                <label className='fs-4'>Enter Your Email</label>
                <input 
                    type="email"
                    className='form-control p-2'
                    placeholder='Enter Your Email'
                    aria-label='Enter First Name'
                    aria-describedby='basic-addon2' />
              </div>

              <div className='col-12 p-2'>
                <label className='fs-4'>Enter Your Message</label>
                <textarea
                  id='floatingTextarea'
                  className='form-control p-2'
                  aria-label='Enter First Name'
                  aria-describedby='basic-addon2'>
                      
                    </textarea>
              </div>
              <div className="col-4 p-3">
                <button type='submit' className='btn btn-primary'>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default contact
