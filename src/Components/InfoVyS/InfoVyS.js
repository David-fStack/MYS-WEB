import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion className='m-3' defaultActiveKey="0" id='infoVyS' data-aos="fade-up"
    data-aos-duration="3000">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Venta y Alquiler</strong></Accordion.Header>
        <Accordion.Body>
          Contamos con equipos fotocopiadores, impresoras, scanners Blanco-negro y Color de ultima generación de las marcas mas reconocidas. Para así tener la mejor eperiencia al momento de manipular nuestros equipos.
          <br />
          Los equipos proporcionados para la venta y alquiler son acordes a las necesidades del cliente, como asi tambien las prestaciones de los mismos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Servicio Técnico</strong></Accordion.Header>
        <Accordion.Body>
        Contamos con nuestro propio servicio técnico especializado conformado por profecionales altamente capacitados y preparados para resolver lo antes posible cualquier urgencia. Brindando asi una excelente atencion y velocidad de respuesta.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Asesoramiento Profecional</strong></Accordion.Header>
        <Accordion.Body>
          Nuestro equipo de profesionales lo asesorará de la mejor manera, con respecto a todo lo que necesite para comenzar con su negocio o implementación empresarial, tanto a la hora de alquilar o comprar (equipos e insumos) dependiendo de las funcionalidades, costos y ganancias que mejor se adapten a sus necesides.
          <br />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;