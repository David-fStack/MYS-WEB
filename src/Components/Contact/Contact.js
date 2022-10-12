import Form from 'react-bootstrap/Form';
import './Contact.css'
import emailjs from '@emailjs/browser';

function TextControlsExample() {

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'template_gewinvv';
        
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
    return (
        <div className='m-auto container form_style' id='contactForm'>

            <h3>Formulario de contacto</h3>

            <Form>
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
                    <Form.Control as="textarea" rows={3} name="messaje" id='messaje' />
                </Form.Group>

            </Form>
        </div>
    );
}

export default TextControlsExample;