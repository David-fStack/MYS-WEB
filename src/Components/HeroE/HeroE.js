import React from 'react';
import './HeroE.css'

const HeroE = (props) => {
    return (
        <div className="triangle">
          <h2 className='equipos_text_style'>{props.name}</h2>
      </div>

    );
};

export default HeroE;