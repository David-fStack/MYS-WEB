import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init()
    return (
            <footer className="site-footer">
                <div className="container" data-aos="flip-up" data-aos-delay="300">
                    <div className="row">

                        <div className="col-sm-12 col-md-7 text_style" id='abautUs'>
                            <h6>Sobre Nosotros</h6>
                            <p className="text-justify">M&S<i> Tecnología Digital.</i> Somos una empresa familiar dedicada hace mas de 22 años a la venta, alquiler y reparación de equipos fotocopiadores e impresoras. <br /> Fundada por Mario y su esposa Elizabeth en el año 2000, abren su propia empresa, posicionandose como una de las mejores en su rubro, por su profesionalismo y calidez a la hora de la atención, creando así relaciones de años con nuestros clientes y proveedores.</p>
                        </div>
                

                        <div className="col-sm-8 col-md-3">
                            <h6>Enlaces Rapidos</h6>
                            <ul className="footer-links">
                                <li><a href="#contactForm">Contactanos</a></li>
                                <li><a href="#contactForm">Servcios</a></li>
                                <li><a href="#drivers">Drivers</a></li>
                            </ul>

                        </div>

                        <a className="col-sm-4 col-md-2 mt-3" href="#/">
                            <img src="#/" width="100vw" alt="" />
                        </a>

                    </div>
                </div>
                
               

                <div className="container mb-3" data-aos="flip-down">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/MysTecnologiaDdigital"><i
                                            className="fab fa-facebook"></i></a></li>
                                <li><a className="email" href="#contactForm"><i className="far fa-envelope"></i></a></li>
                                <li><a className="dribbble" href="https://www.instagram.com/mystecnologiadigital/"><i
                                            className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mapaFooter">
                    <iframe
                        src="https://www.google.com/maps?q=Jos%C3%A9%20Colombres%20392%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina&z=14&t=&ie=UTF8&output=embed"
                        width="100%" height="250" >
                    </iframe>
                </div>
            </footer>

 
    );
};

export default Footer;