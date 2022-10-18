import React from 'react';
import Buttom from '../Buttom/Buttom';
import './CardTexto.css'

const CardTexto = (props) => {
    return (
        <div className='card_text_style box_img'>
            <h3>Multifunción Xerox XXXX</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis modi iusto enim accusamus illo repellat dolor quas a sed, ut fuga dolore itaque suscipit omnis sint ea. Officia, dolorem quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint at placeat fuga dolores nihil, repellat libero consequatur adipisci provident numquam cupiditate fugit beatae quidem impedit vero ex deserunt voluptate.</p>
            <Buttom name = 'Saber Más'/>
        </div>
    );
};

export default CardTexto;