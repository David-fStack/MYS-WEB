import React from 'react';
import './Attendance.css'



const Attendance = () => {

    return (
        <div class="servicio container-fluid px-4" id="servicios" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">

            <div class="row pngPrincipal">
                <div class="png sombra container iconsMedio">
                    <div class="png_1">
                        <img src="https://img.icons8.com/color/48/000000/engineer.png" alt='img1' />
                        <p className='text_style_icon'>Servicio Técnico Propio</p>
                    </div>
                    <div class="png_2">
                        <img src="https://img.icons8.com/color/48/000000/clock--v3.png" alt='img1' />
                        <p className='text_style_icon'>Asistencia Técnica dentro de las 48hs</p>
                    </div>
                    <div class="png_3">
                        <img src="https://img.icons8.com/color/48/000000/photocopier.png" alt='img1' />
                        <p className='text_style_icon'>Equipos de ultima generación</p>
                    </div>

                    <div class="png_4">
                        <img src="https://img.icons8.com/color/48/000000/calendar--v3.png" alt='img1' />
                        <p className='text_style_icon'>Visitas semanales y mensuales</p>
                    </div>

                    <div class="png_5">
                        <img src="https://img.icons8.com/color/48/000000/helping-hand.png" alt='img1' />
                        <p className='text_style_icon'>Seguridad y confianza</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;