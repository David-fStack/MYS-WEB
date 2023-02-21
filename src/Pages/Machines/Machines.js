import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css'
import CollapsibleExample from '../../Components/Navbar/Navbar'
import HeroE from '../../Components/HeroE/HeroE';
import IndividualIntervalsExample from '../../CardMedium/CardMedium';
import ListGroupWithHeaderExample from '../../Components/CardTexto/CardTexto';
import Separator from '../../Components/Separator/Separator';
import Footer from '../../Components/Footer/Footer';
import CopyRigth from '../../Components/CopyRigth/CopyRigth';
import WhatsApp from '../../Components/WhatsApp/WhatsApp';


const Machines = (props) => {

  return (
    <section className=''>
      <WhatsApp />
      <CollapsibleExample contacto='/contacto' />
      <HeroE name='Equipos' />

      <div className='container-fluid' data-aos="fade-right" data-aos-duration="2000">
        <div className='row d-flex flex-row'>
          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <IndividualIntervalsExample />
          </div>

          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <ListGroupWithHeaderExample st='box_img' />
          </div>
        </div>

        <Separator />

        <div className='row d-flex flex-row' data-aos="fade-left" data-aos-duration="2000">
          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <ListGroupWithHeaderExample st='box_img' />
          </div>

          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <IndividualIntervalsExample />
          </div>
        </div>

        <Separator />

        <div className='row d-flex flex-row' data-aos="fade-right" data-aos-duration="2000">
          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <IndividualIntervalsExample />
          </div>

          <div className='col-xs-12 col-lg-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <ListGroupWithHeaderExample st='box_img' />
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