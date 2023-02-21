import Carousel from 'react-bootstrap/Carousel';
import ricoh from '../../Assets/Img/Hero/ricoh.jpg'
import xerox from '../../Assets/Img/Hero/xerox.png'
import xerox4 from '../../Assets/Img/Hero/xerox4.jpg'

function CarouselFadeExample() {
  return (
    <Carousel data-aos="zoom-in" data-aos-duration="3000" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={xerox}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ricoh}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-primary'>M<span className='text-danger'>&</span>S</h3>
          <p className='text-bold'>Tecnologia Digital</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={xerox4}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;