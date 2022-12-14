import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/Navbar/Navbar';
import CarouselFadeExample from './Components/Hero/Hero';
import BasicExample from './Components/InfoVyS/InfoVyS';
import Footer from './Components/Footer/Footer';
import CopyRigth from './Components/CopyRigth/CopyRigth';
import Parallax from './Components/Parallax/Parallax';
import IndividualIntervalsExample from './Components/CarouselVyS/CarouselVyS';
import logo from './Assets/Img/Logo/logo.png'
import img2 from './Assets/Img/CarouselVyS/img2.jpg'
import asesoria from './Assets/Img/CardVyS/aseso.jpg'
import TextControlsExample from './Components/Contact/Contact';
import Separator from './Components/Separator/Separator';
import Attendance from './Components/Attendance/Attendance';
import WhatsApp from './Components/WhatsApp/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';



function App() {
  AOS.init();
  return ( 
    <div className="App">
      <WhatsApp />
      <CollapsibleExample contacto='#contactForm'/>
      <CarouselFadeExample />
      <Separator />
      
      <div className='container-fluid' data-aos="zoom-out-up" data-aos-delay="300">
        <div className='row'>
          <div className='col-xl-6 col-md-12 col-sm-12'><BasicExample /></div>
          <div className='col-xl-6 col-md-12 col-sm-12'> <IndividualIntervalsExample img={logo} img1={asesoria} img2={img2} /></div>
        </div>
      </div>
      
      <Attendance />
      <Separator />
      <TextControlsExample />
      <Parallax />
      <Footer />
      <CopyRigth />
      
    </div>
  );
}

export default App;
