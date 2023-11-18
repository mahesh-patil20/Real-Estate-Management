import React from 'react'
import "./HomeStyles.css"
import rightsecimg from "../assets/hometrial2.png"
import verficiation from "../assets/id-removebg-preview.png"
import results from "../assets/online-exam.svg"
import createexam from "../assets/hometrial4.avif"
import homeimg1 from "../assets/homeimg1.png"
import testi1 from "../assets/testi1.jpg"
import testi2 from "../assets/testi2.jpg"
import testi3 from "../assets/testi3.jpg"
import Footer from './Footer'
import { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.title = 'Sangrah | Home';
  }, [])
  return (
    <>
      <div className="sec1123">
        <Fade bottom>
          <div className="leftsec123">
            <h2>Efficient Property Portfolio Management at Your Fingertips</h2>
            <div className="seewhy123">Discover why real estate professionals prefer Vistaville over other property management solutions.</div>
            <div className="seewhyinfo123">"Vistaville is my go-to property management platform. It allows me to streamline and optimize my property processes with ease, free from any hiccups. Vistaville's user-friendly interface simplifies the property management process, making it the ultimate choice for my business. Our company relies on Vistaville for all our property management needs due to its efficiency and round-the-clock support."</div>
          </div>

        </Fade>
        <Fade bottom>
          <div className="rightsec123">
            <img src={rightsecimg} alt="" id="firstimg123" />
          </div>
        </Fade>
      </div>

      <div>
        <img src={homeimg1} alt="" className='footerimg' />
      </div>
      <div className="outerhead11">
        <Zoom>
          <div id='heading111'>Efficient Inventory Management</div>
        </Zoom>
      </div>
      <div className="sec2111">
        <div className="sec2div1222">
          <Fade left>
            <div className="left123">
              <h3>Property Management</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Efficiently organize and track your property portfolio using our intuitive management tools.</li>
                  <li>Add and categorize your properties, set occupancy levels, and monitor any maintenance needs.</li>
                  <li>Generate reports to analyze property trends and make informed real estate decisions.</li>
                </ul>
              </div>
            </div>

          </Fade>
          <Fade right>
            <div className="right123">
              <img src={createexam} alt="" id="secondimg123" />
            </div>
          </Fade>
        </div>


        <div className="sec2div1222">
          <Fade left>
            <div className="right123">
              <img src={verficiation} alt="" id="thirdimg123" />
            </div>
          </Fade>
          <Fade right>
            <div className="left123">
              <h3>Verify Property and Start Management</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Efficiently verify your property listings within 60 seconds.</li>
                  <li>Access 24/7/365 customer support for any assistance.</li>
                  <li>Utilize cutting-edge property management software.</li>
                </ul>
              </div>
            </div>

          </Fade>
        </div>
        <div className="sec2div1222">
          <Fade left>
            <div className="left123">
              <h3>Property Updates</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Login to access the latest property updates on our platform.</li>
                  <li>Check property availability and receive feedback or notifications.</li>
                  <li>Utilize these updates to inform your real estate decisions and achieve your property goals.</li>
                </ul>
              </div>
            </div>

          </Fade>
          <Fade right>
            <div className="right123">
              <img src={results} alt="" id="forthimg123" />
            </div>
          </Fade>
        </div>

      </div >
      <Zoom>
        <div id='heading211'>Testimonials</div>
      </Zoom>
      <Slide bottom cascade>
        <div className="outertestimonials123">
          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"Our property sale with Vistaville surpassed expectations. The platform's innovative features and responsive support team made the process stress-free. A reliable choice for selling property."</span>
                <div className="testimonial-user123">
                  <img src={testi1} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">Brian Marchman</span>
                    <div className="user-job-details123">
                      <span className="user-job">Property Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"Vistaville exceeded my expectations in the property search. The platform's intuitive design and comprehensive listings provided a seamless experience. Finding my ideal property was quick and efficient. Highly recommend for any property seeker."</span>
                <div className="testimonial-user123">
                  <img src={testi2} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">Brian Marchman</span>
                    <div className="user-job-details123">
                      <span className="user-job">Property Seeker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"Vistaville made selling our property a breeze. The platform's user-friendly interface and effective tools led to a quick and successful sale. Highly recommended for its seamless experience."</span>
                <div className="testimonial-user123">
                  <img src={testi3} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">Brian Marchman</span>
                    <div className="user-job-details123">
                      <span className="user-job">Property Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Footer />
    </>
  )
}

export default Home
