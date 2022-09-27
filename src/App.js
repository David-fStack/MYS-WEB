import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/Navbar/Navbar';
import CarouselFadeExample from './Components/Hero/Hero';
import BasicExample from './Components/InfoVyS/InfoVyS';
import ImgBlur from './Components/ImgBlur/ImgBlur';
import Footer from './Components/Footer/Footer';
import CopyRigth from './Components/CopyRigth/CopyRigth';
import Parallax from './Components/Parallax/Parallax';
import IndividualIntervalsExample from './Components/CarouselVyS/CarouselVyS';
// import venta from './Assets/Img/CardVyS/ventas.webp'
import logo from './Assets/Img/Logo/logo.png'
// import img4 from './Assets/Img/CarouselVyS/img4.webp'
import img2 from './Assets/Img/CarouselVyS/img2.jpg'
import aseso from './Assets/Img/CardVyS/aseso.jpg'
import TextControlsExample from './Components/Contact/Contact';
import Separator from './Components/Separator/Separator';


function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <CarouselFadeExample />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-6 col-md-12 col-sm-12'><BasicExample /></div>
          <div className='col-xl-6 col-md-12 col-sm-12'> <IndividualIntervalsExample img={logo} img1={aseso} img2={img2} /></div>
        </div>
      </div>
     
      <ImgBlur />
      <Separator />
      <TextControlsExample />
      <Parallax />
      <Footer />
      <CopyRigth />
    </div>
  );
}

export default App;
