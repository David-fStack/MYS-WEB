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
                        <p className="text-justify">Bienvenidosa <i>M&S Tecnología Digital</i>, una empresa familiar con más de 22 años de experiencia en la venta, alquiler y reparación de equipos fotocopiadores e impresoras. Fundada en el año 2000 por Mario y Elizabeth, nuestra empresa se ha posicionado como una de las mejores en su rubro gracias a nuestro profesionalismo y calidez en la atención al cliente.

                            Nos enorgullece haber creado relaciones duraderas con nuestros clientes y proveedores, lo que demuestra nuestro compromiso con la excelencia y la satisfacción del cliente. Ya sea que esté buscando soluciones de impresión para su hogar, oficina o empresa, en M&S Tecnología Digital encontrará la atención personalizada y los productos de alta calidad que necesita para alcanzar sus objetivos.

                            Gracias por confiar en nosotros. Estamos comprometidos con su éxito y esperamos poder ayudarlo a alcanzar sus metas de impresión.</p>
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



            <div className="container mb-3">
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
                <iframe title='1'
                    src="https://www.google.com/maps?q=Jos%C3%A9%20Colombres%20392%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina&z=14&t=&ie=UTF8&output=embed"
                    width="100%" height="250" >
                </iframe>
            </div>
        </footer>


    );
};

export default Footer;