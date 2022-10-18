import React from 'react';
import AOS from 'aos';
import './HeroE.css'

const HeroE = (props) => {

  AOS.init();

    return (
        <div className="triangle" data-aos="zoom-in-up">
          <h2 className='equipos_text_style'>{props.name}</h2>
      </div>

    );
};

export default HeroE;