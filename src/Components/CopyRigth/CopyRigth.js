import React from 'react';
import './CopyRigth.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const CopyRigth = () => {
    AOS.init();

    return (
        <div class="copyRigth">© Copyright 2022 - All Rights Reserved - 
            <a href="https://github.com/David-fStack">David-fStack</a>
            
        </div>
        
        
    );
};

export default CopyRigth;