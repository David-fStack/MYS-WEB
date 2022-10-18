import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion className='m-3' defaultActiveKey="0" id='infoVyS'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Venta y Alquiler</strong></Accordion.Header>
        <Accordion.Body>
          Contamos con equipos fotocopiadores, impresoras, scanners Blanco-negro y Color de ultimo modelo de las marcas mas reconocidas. Para así tener la mejor eperiencia al momento de manipular nuestros equipos.
          <br />
          Nuestros equipos para la venta y alquileres son acordes a las necesidades del cliente, asi tambien las prestaciones de los mismos. Para sacar el mejor provecho del mercado.
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
          Nuestro equipo lo asesorara de la mejor manera, con respecto a las necesidades que se presenten. Si necesita alquilar, comprar un equipo o asi tambien con los insumos de los mismos, prestaciones del necesarias del equipo (velocidad, seguridad, tamaño final de impresion o copiado, Blanco-Negro, color, impresoras o multifunción), costos de copiado, porcentajes de ganancias, ubicaciónes, etc.
          <br />
          Todo lo que necesite para comenzar con su negocio o implementación empresarial.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;