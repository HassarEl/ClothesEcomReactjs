import React from 'react'
import a6 from '../assets/images/about/a6.jpg'
import {Link} from 'react-router-dom'
import vid from '../assets/images/about/1.mp4'
import img1 from '../assets/images/blog/b1.jpg'
import img2 from '../assets/images/blog/b2.jpg'
import img3 from '../assets/images/blog/b3.jpg'
import img4 from '../assets/images/blog/b4.jpg'
import img5 from '../assets/images/blog/b5.jpg'
import img6 from '../assets/images/blog/b6.jpg'


const about = () => {
  return <>
    <section className="about-wrapper p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1 className='text-white mb-3'>#Know Us</h1>
            <p className='text-white fs-3'>Take to know us better...</p>
          </div>
        </div>
      </div>
    </section>

    <section className="know-us p-5 mb-3">
      <div className="container xxl">
        <div className="row">
          <div className="d-flex">
            <div className="col-6">
              <img src={a6} alt="" className='img-fluid p-3' />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center text-center">
              <div className='mb-3'>
                <h1>Who are We ?</h1>
              </div>
              <div className='mb-3'>
                <p>
                  Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit.
                  Ipsum minus assumenda tenetur, natus distinctio,
                  incidunt odio vel voluptas qui ad delectus vero enim
                  beatae recusandae cupiditate! Saepe reprehenderit
                  commodi aut quae perferendis sunt, quasi assumenda
                  nulla obcaecati minus debitis doloremque cumque quam
                  quaerat provident eveniet cupiditate ab fugiat quia
                  facilis eos. Ipsam, porro. Tempora facere quae iusto maiores
                  repellat adipisci?
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quo dolores, quam nam sapiente repellendus laudantium facere
                  perferendis laboriosam aperiam optio assumenda eius natus cumque
                  voluptas facilis excepturi cum iste sed.
                </p>
              </div>
              <div className='mt-5'>
                <Link className='fs-5' to={'/contact'}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="download p-3">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className='mb-4'>
              <h2 className='text-center'>Download Our <Link className='fs-3'><b>App</b></Link></h2>
            </div>
            <div className='col-6 mb-3'>
              <video loop muted src={vid} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blogs">
      <div className="container xxl">
        <div className="row">
          <div className="text-center">
            <h1>What Our Customer Say</h1>
            <p>Get To know our trusted customer say</p>
          </div>
          <div className="card col-6 blog-details-page my-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img1} alt="" className='img-fluid'/>
              </div>
              <div className="card-body col-8">
                  <span>Marvel Clein</span>
                  <p className='my-3'>
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. 
                    Unde quas voluptatum veniam dignissimos, 
                    sit laborum quidem ab officia, 
                    asperiores nam a magnam sunt iste itaque repudiandae 
                    tempora non corporis minus.
                  </p>
              </div>
            </div>
          </div>

          <div className="card col-6 blog-details-page my-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img4} alt="" className='img-fluid'/>
              </div>
              <div className="card-body col-8">
                  <span>Marvel Clein</span>
                  <p className='my-3'>
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. 
                    Unde quas voluptatum veniam dignissimos, 
                    sit laborum quidem ab officia, 
                    asperiores nam a magnam sunt iste itaque repudiandae 
                    tempora non corporis minus.
                  </p>
              </div>
            </div>
          </div>

          <div className="card col-6 blog-details-page my-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img2} alt="" className='img-fluid'/>
              </div>
              <div className="card-body col-8">
                  <span>Marvel Clein</span>
                  <p className='my-3'>
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. 
                    Unde quas voluptatum veniam dignissimos, 
                    sit laborum quidem ab officia, 
                    asperiores nam a magnam sunt iste itaque repudiandae 
                    tempora non corporis minus.
                  </p>
              </div>
            </div>
          </div>

          <div className="card col-6 blog-details-page my-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img3} alt="" className='img-fluid'/>
              </div>
              <div className="card-body col-8">
                  <span>Marvel Clein</span>
                  <p className='my-3'>
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. 
                    Unde quas voluptatum veniam dignissimos, 
                    sit laborum quidem ab officia, 
                    asperiores nam a magnam sunt iste itaque repudiandae 
                    tempora non corporis minus.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default about
