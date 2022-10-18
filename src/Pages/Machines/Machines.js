import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css'
import CollapsibleExample from '../../Components/Navbar/Navbar'
import HeroE from '../../Components/HeroE/HeroE';
import IndividualIntervalsExample from '../../CardMedium/CardMedium';
import AOS from 'aos';
import ListGroupWithHeaderExample from '../../Components/CardTexto/CardTexto';
import Separator from '../../Components/Separator/Separator';
import Footer from '../../Components/Footer/Footer';
import CopyRigth from '../../Components/CopyRigth/CopyRigth';


const Machines = (props) => {

  AOS.init();

  return (
    <section className=''>
      <CollapsibleExample contacto='/contacto'/>
      <HeroE name='Equipos' />
      
      <div className='container-fluid'>
        <div className='row d-flex flex-row' data-aos="fade-right" data-aos-delay="300">
          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <IndividualIntervalsExample   />
          </div>

          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <ListGroupWithHeaderExample st='box_img' />
          </div>
        </div>

          <Separator />

        <div className='row d-flex flex-row' data-aos="fade-left" data-aos-delay="300">
          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <ListGroupWithHeaderExample st='box_img' />
          </div>

          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <IndividualIntervalsExample   />
          </div>
        </div>
      <Separator />
      <Footer />
      <CopyRigth />
      </div>
    </section>
  )
}

export default Machines