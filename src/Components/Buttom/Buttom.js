import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Buttom = (props) => {
    return (
        <div>
             <Button onClick={() => navigator('/')} variant="outline-primary">{props.name}</Button>{''}
        </div>
    );
};

export default Buttom;