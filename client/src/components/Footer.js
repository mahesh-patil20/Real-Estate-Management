import React from 'react'
import "./FooterStyle.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import footerimg from "../assets/footerdiv.png"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div>
                <img src={footerimg} alt="" className='footerimg' />
            </div>
            <div className="mainFooter123">

                <div className="blocks123">

                    <div className="block1123">
                        <div className="tab1123">
                            <div className="address123">
                                {/* <p className="Addresshead"><b>OFFICE ADDRESS</b></p> */}
                                <p className="fullAddress123">
                                    
Maximizing efficiency to perfection, we optimize operations and enhance productivity for your real estate endeavors. Committed to excellence, we ensure your success by delivering impactful results. Seamlessly managing property portfolios, we pave the way for your triumph. Discover a new level of control, precision, and growth with Vistaville.</p>
                            </div>
                            <div className="implinks123">
                                <p className="linkshead123"><b>IMPORTANT LINKS</b></p>
                                <ul>
                                    <li><NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'black' : 'black', })}><p id='footlink123'>Home</p></NavLink></li>
                                    <li><NavLink to="/homeabout" style={({ isActive }) => ({ color: isActive ? 'black' : 'black', })}><p id='footlink123'>About Us</p></NavLink></li>
                                    <li><NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'black' : 'black', })}><p id='footlink123'>Log In</p></NavLink></li>
                                </ul>
                            </div>
                            {/* </div>
                        <div className="tab1"> */}
                            <div className="contactDetails123">
                                <p className="contact1123"><b>CONTACT US</b></p>
                                <div className="contactemail123">
                                    <div>
                                        <MailOutlineIcon></MailOutlineIcon>
                                    </div>
                                    <div>
                                        <a className="iamemail123" href="mailto: contact@vistaville.com" target="_blank" rel="noreferrer">contact@vistaville.com</a>
                                    </div>
                                </div>
                                <div className="contactemail123">
                                    <div>
                                        <CallOutlinedIcon></CallOutlinedIcon>
                                    </div>
                                    <div>
                                        <a className="iamemail123" href="tel: +91-992-034-1878">1234567890</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="footerbelow123">
                <div className="footerbelowinside123">© VISTAVILLE - All Rights Reserved.</div>
            </div>

            {/* <Outlet/> */}
        </>
    )
}

export default Footer