import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-7 text_style" id='abautUs' >
                        <h6>Sobre Nosotros</h6>
                        <p className="text-justify" data-aos="fade-up" data-aos-duration="2000"><h1>Bienvenidos a M&S Tecnología Digital</h1>
                            <p>Somos una empresa familiar con más de dos décadas de trayectoria en el sector de la venta, alquiler y reparación de equipos fotocopiadores e impresoras. Desde nuestra fundación en el año 2000 por Mario y Elizabeth, nos hemos destacado por nuestro profesionalismo y atención al cliente.</p>
                            <p>Nos enorgullece haber construido relaciones sólidas y duraderas tanto con nuestros clientes como con nuestros proveedores, lo que refleja nuestro compromiso con la excelencia y la satisfacción del cliente. En M&S Tecnología Digital, nos esforzamos por ofrecer soluciones personalizadas y productos de alta calidad para satisfacer las necesidades de impresión de hogares, oficinas y empresas.</p>
                            <p>Ya sea que esté buscando una impresora para su hogar, una solución de impresión para su oficina o un servicio de mantenimiento para su parque de equipos, estamos aquí para ayudarlo. Nuestro equipo altamente capacitado está comprometido con su éxito y está listo para brindarle el soporte necesario para alcanzar sus metas de impresión.</p>
                            <p>Gracias por confiar en nosotros. Esperamos poder acompañarlo en su camino hacia el éxito en el ámbito de la tecnología digital.</p>
                        </p>
                    </div>


                    <div className="col-sm-8 col-md-3">
                        <h6>Enlaces Rapidos</h6>
                        <ul className="footer-links" data-aos="fade-left" data-aos-duration="2000">
                            <li><a href="#Form" >Contactanos</a></li>
                            <li><a href="#Services">Servcios</a></li>
                            {/* <li><a href="#drivers">Drivers</a></li> */}
                        </ul>

                    </div>

                    <a className="col-sm-4 col-md-2 mt-3" href="#/">
                        <img src="#/" width="100vw" alt="" />
                    </a>

                </div>
            </div>



            <div className="container mb-3" data-aos="flip-right" data-aos-duration="3000">
                <div className="row">

                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <ul className="social-icons d-flex justify-content-center">
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
                <iframe data-aos="flip-up" data-aos-duration="3000" title='1'
                    src="https://www.google.com/maps?q=Jos%C3%A9%20Colombres%20392%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina&z=14&t=&ie=UTF8&output=embed"
                    width="100%" height="250" >
                </iframe>
            </div>
        </footer>


    );
};

export default Footer;