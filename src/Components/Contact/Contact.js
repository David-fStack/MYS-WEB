import Form from 'react-bootstrap/Form';
import './Contact.css'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function TextControlsExample() {
    AOS.init()
    const btn = document.getElementById('button');
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    btn.value = 'Enviando...';
    
    emailjs.sendForm('default_service', 'template_gewinvv', form.current, 'd0WpP8berzMOkABGK')
      .then((result) => {
        btn.value = 'Enviar';
        alert('Enviado!');
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  };

   


    return (
        <div className='m-auto container form_style' id='contactForm' data-aos="fade-up" data-aos-delay="300">
            
            <h3>Formulario de contacto</h3>

            <Form  ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Matias Carrizo" name='name' id='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" name='email' id='email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="number" placeholder="Ej: 3816658793" name='phone' id='phone' />
                </Form.Group>

                <Form.Group className="pb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Escriba aqui</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" id='message' />
                </Form.Group>

                <input className='btn btn-primary mb-3' type='submit' id='button' value='Enviar' />

            </Form>
        </div>
    );
}

export default TextControlsExample;