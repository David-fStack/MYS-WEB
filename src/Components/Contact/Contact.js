import Form from 'react-bootstrap/Form';
import './Contact.css'

function TextControlsExample() {
    return (
        <div className='m-auto container form_style'>
            
                <h3>Formulario de contacto</h3>
            
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="pb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

            </Form>
        </div>
    );
}

export default TextControlsExample;