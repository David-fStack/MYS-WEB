import React from 'react';
import './CopyRigth.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const CopyRigth = () => {
    AOS.init();

    return (
        <div class="copyRigth" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">© Copyright 2022 - All Rights Reserved - 
            <a href="https://github.com/David-fStack">David-fStack</a>
            
        </div>
        
        
    );
};

export default CopyRigth;