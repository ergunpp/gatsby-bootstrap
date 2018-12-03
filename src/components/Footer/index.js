import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = () => (
                 <section className="sec-space light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 footer-widget">
                                <div className="main-logo">
                                    <Link to="index.html"> <img alt="" src="assets/img/logo/main-logo.png" />  </Link>
                                    <span className="medium-font">ATLASPET PET ÜRÜNLERİ PAZ. ve TİCARET A.Ş.</span>
                                </div>
                                <span className="divider-2"></span>
                                <div className="text-widget">
                                    
                                    <ul>
                                        <li> <i className="fa fa-map-marker"></i> <span> <strong>Göktürk Cad. No 2 D Blok D7 Göktürk Merkez Mah,</strong> EYÜP, İSTANBUL TÜRKİYE </span> </li>
                                        <li> <i className="fa fa-envelope-square"></i> <span><a href="#">info@atlaspet.com.tr</a> </span> </li>
                                        <li> <i className="fa fa-phone-square"></i> <span><a href="#">www.bestpet.com.tr</a> </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">Diğer   </span> <strong>Markalarımız </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <Link to="https://prochoice.com.tr"> Prochoice </Link> </li>
                                    <li> <Link to="https://chefschoice.com.tr"> Chef's Choice </Link> </li>
                                    <li> <Link to="https://atlaspet.com.tr"> Brit Care</Link> </li>
                                    
                                </ul>
                            </div>
     
                        </div>
                    </div>
                </section>
                
                
               
)


const FooterBottom = () => (
          <section className="ptb-0">
                    <div className="container ptb-0">
                        <div className="row ptb-0">
                            <div className="col-md-6 col-sm-5 ptb-0">
                                <p>
                                ©2015 <Link to="#">  bestpet.com.tr </Link>,  Atlaspet A.Ş., Tüm Hakları Saklıdır.
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-7 ptb-0">
                                <ul className="primary-navbar footer-menu ptb-0">
                                    <li> <Link to="#">İletişim </Link> </li>
                                    <li> <Link to="#">term of use  </Link> </li>
                                    <li> <Link to="#">site map  </Link> </li>
                                    <li> <Link to="#">privacy policy</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
  )


export {Footer, FooterBottom}
