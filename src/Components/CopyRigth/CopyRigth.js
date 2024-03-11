import React from 'react';
import './CopyRigth.css'

const CopyRigth = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div class="copyRigth">© Copyright {currentYear}
            - All Rights Reserved -
            <a href="https://www.mystecnologiadigital.com/">M&S Tecnología Digital</a>
        </div>
    );
};

export default CopyRigth;
