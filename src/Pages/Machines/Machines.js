import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css'
import CollapsibleExample from '../../Components/Navbar/Navbar'
import HeroE from '../../Components/HeroE/HeroE';


const Machines = (props) => {

  return (
    <section>
      <CollapsibleExample contacto='/contacto'/>
      <HeroE name='Equipo' />
    </section>
  )
}

export default Machines