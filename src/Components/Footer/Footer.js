import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-7 text_style" id='abautUs'>
                            <h6>Sobre Nosotros</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the
                                upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or
                                snippets as the code wants to be simple. We will help programmers build up concepts in different
                                programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android,
                                SQL and Algorithm.</p>
                        </div>

                        <div className="col-sm-8 col-md-3">
                            <h6>Enlaces Rapidos</h6>
                            <ul className="footer-links">
                                <li><a href="contacto.html">Contactanos</a></li>
                                <li><a href="#servicios">Servcios</a></li>
                                <li><a href="#drivers">Drivers</a></li>
                            </ul>

                        </div>

                        <a className="col-sm-4 col-md-2 mt-3" href="#/">
                            <img src="#/" width="100vw" alt="" />
                        </a>

                    </div>
                </div>
                
               

                <div className="container mb-3">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/MysTecnologiaDdigital"><i
                                            className="fab fa-facebook"></i></a></li>
                                <li><a className="email" href="contacto.html"><i className="far fa-envelope"></i></a></li>
                                <li><a className="dribbble" href="https://www.instagram.com/mystecnologiadigital/"><i
                                            className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mapaFooter">
                    <iframe
                        src="https://www.google.com/maps?q=Jos%C3%A9%20Colombres%20392%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina&z=14&t=&ie=UTF8&output=embed"
                        width="100%" height="250">
                    </iframe>
                </div>
            </footer>

 
    );
};

export default Footer;