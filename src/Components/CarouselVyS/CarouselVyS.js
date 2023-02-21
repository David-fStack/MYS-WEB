import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample(props) {
  return (
    <Carousel className='m-3' data-aos="zoom-out-left" data-aos-duration="3000">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 m-auto"
          src={props.img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={props.img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;