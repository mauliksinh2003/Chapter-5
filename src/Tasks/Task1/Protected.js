import React, { useEffect } from "react";
import { Link , NavLink, useNavigate} from 'react-router-dom';
import Button from'react-bootstrap/Button';

import './Task1.css';


function Protected(props) {

    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('login');
        if (!token) {
            navigate('/login');
            return;
    } });

  return (
    <>
   <Component/>
    </>
  )
}

export default Protected;
