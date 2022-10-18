import React from 'react';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='style_found'>
            <h1 className='text_found'>404 Error Page #3</h1>
            <p className="zoom-area"><b>Ups</b> Pagina Incorrecta </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div className="link-container">
                <a href="/" className="more-link">Volver a la pagina</a>
            </div>
        </div>

    );
};

export default PageNotFound;