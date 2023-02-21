import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Contact.css'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l09o2tt', 'template_gewinvv', form.current, 'd0WpP8berzMOkABGK')
            .then((result) => {
                alert('Se envio correctamente');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container shadow_style' data-aos="fade-up" data-aos-duration="2000">

            <Form className='form_style' ref={form} onSubmit={sendEmail} action="#">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-2'>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Escribe tu Nombre y Apellido" />
                </Form.Group>



                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="cel" placeholder="name@example.com" />

                    </Form.Group>

                    <Form.Group as={Col}>

                        <Form.Label>Numero de Celular</Form.Label>
                        <Form.Control type="number" name="user_email" placeholder="Ej.: (381) 153-456785" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Pon Aqui Tu Consulta</Form.Label>
                    <Form.Control as="textarea" name='message' rows={3} />
                </Form.Group>
                <input className='btn btn-primary mb-3' type="submit" value="Enviar" />
            </Form>
        </div>
    );
}





        // <div className='container'>
        //     <div className='row'>
        //         <form className='form_style' ref={form} onSubmit={sendEmail} action="#" >
        //             <label>Name</label>
        //             <input type="text" name="user_name" />
        //             <label>Email</label>
        //             <input type="email" name="user_email" />
        //             <label>Message</label>
        //             <textarea name="message" />
        //             <input type="submit" value="Send" />
        //         </form>
        //     </div>
        // </div>
