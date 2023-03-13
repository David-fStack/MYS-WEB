import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion className='m-3' defaultActiveKey="0" id='infoVyS' data-aos="fade-up"
    data-aos-duration="3000">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Venta y Alquiler</strong></Accordion.Header>
        <Accordion.Body>
        Nuestra empresa dispone de equipos de fotocopiado, impresión y escaneo de última generación de las marcas más reconocidas en el mercado. Gracias a esto, podemos garantizar que nuestros clientes tendrán la mejor experiencia al manipular nuestros equipos.

Además, ofrecemos equipos tanto para la venta como para el alquiler, y nos aseguramos de que se adapten perfectamente a las necesidades específicas de cada cliente. De esta manera, nuestros clientes pueden contar con las prestaciones que realmente necesitan y maximizar su inversión en tecnología de oficina.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Servicio Técnico</strong></Accordion.Header>
        <Accordion.Body>
        Nuestra empresa cuenta con un servicio técnico especializado integrado por profesionales altamente capacitados y preparados para resolver de manera eficiente y rápida cualquier inconveniente que pueda presentarse. Nos enorgullece ofrecer una atención de calidad y una respuesta rápida a nuestros clientes.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Asesoramiento Profecional</strong></Accordion.Header>
        <Accordion.Body>
        Nuestro equipo de profesionales altamente capacitados está siempre disponible para asesorarlo en todo lo que necesite para iniciar su negocio o implementación empresarial. Ya sea que esté buscando comprar o alquilar equipos e insumos, nuestro equipo le proporcionará información detallada sobre las funcionalidades, costos y beneficios de cada opción, para ayudarlo a encontrar la solución que mejor se adapte a sus necesidades específicas.
          <br />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;