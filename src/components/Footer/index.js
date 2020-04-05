import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { FaMapMarkerAlt, FaEnvelopeSquare, FaPhoneSquare, FaArrowCircleRight } from 'react-icons/fa'


const Footer = () => (
                 <section className="sec-space light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 footer-widget">
                                <div className="main-logo">
                                    <Link to="index.html"> <img alt="" src="/img/main-logo.png" />  </Link>
                                    <span className="medium-font">ATLASPET PET ÜRÜNLERİ PAZ. ve TİCARET A.Ş.</span>
                                </div>
                                <span className="divider-2"></span>
                                <div className="text-widget">
                                    
                                    <ul>
                                        <li> <i><FaMapMarkerAlt className="footer-icons"/></i> <span> Göktürk Cad. No 2 D Blok D7 Göktürk Merkez Mah. EYÜP, <strong>İSTANBUL TÜRKİYE </strong></span></li>
                                        <li>  <i><FaEnvelopeSquare className="footer-icons"/></i><span><a href="#"> info@atlaspet.com.tr</a> </span> </li>
                                        <li>  <i><FaPhoneSquare className="footer-icons"/></i> <span><a href="#">www.bestpet.com.tr</a> </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">Diğer   </span> <strong>Markalarımız </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <i><FaArrowCircleRight className="footer-icons"/></i><a href="https://prochoice.com.tr"> Prochoice </a> </li>
                                    <li> <i><FaArrowCircleRight className="footer-icons"/></i><a href="http://chefschoice.com.tr"> Chef's Choice </a> </li>
                                    <li> <i><FaArrowCircleRight className="footer-icons"/></i><a href="https://atlaspet.com.tr"> Brit Care</a> </li>
                                    
                                </ul>
                            </div>
     
                        </div>
                    </div>
                </section>
                
                
               
)


const FooterBottom = () => (
          
                    <div className="ptb-0 footer-menu">
                        <div className="container ptb-0">
                        <div className="row ptb-0 ">
                            <div className="col-md-6 col-sm-5 ptb-0">
                                <p className="footer-menu">
                                © 2015 <Link to="#" className="footer-menu">  bestpet.com.tr </Link>,  Atlaspet A.Ş. Tüm Hakları Saklıdır.
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-7 ptb-0">
                                <ul className="primary-navbar ptb-0 ">
                                    <li> <Link to="/contact" className="footer-menu">İletişim </Link> </li>
                                    
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                
  )


export {Footer, FooterBottom}
