import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css'
import CollapsibleExample from '../../Components/Navbar/Navbar'
import HeroE from '../../Components/HeroE/HeroE';
import IndividualIntervalsExample from '../../CardMedium/CardMedium';


const Machines = (props) => {

  return (
    <section className=''>
      <CollapsibleExample contacto='/contacto'/>
      <HeroE name='Equipos' />
      <IndividualIntervalsExample />
    </section>
  )
}

export default Machines