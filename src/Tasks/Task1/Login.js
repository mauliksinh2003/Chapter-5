import React, { useState , useEffect } from "react";
import { Link , NavLink, useNavigate} from 'react-router-dom';

import Button from'react-bootstrap/Button';
import Framermotion from "./Framermotion";


import './Task1.css';

function Login() {

    const navigate = useNavigate();

    function ProtectedCmp()
    {
        localStorage.setItem('login' ,  true);
        navigate('/dashboard');
    }

    useEffect(()=>{
        let token = localStorage.getItem('login');
        if (!token) {
            navigate('/login');
            return;
    } });

    
  return (
    <>
    <Framermotion>
    <div>
        <container>
            <h1>Login Page</h1>

            <form>

            <input type="text" placeholder="plese enter username" required></input>
            <br></br>
            <input type="password" placeholder="plese enter password"></input>

            </form>
           
        </container>
    </div>
    <div>
    <Button onClick={ProtectedCmp} variant="success">Login </Button>{' '}
    </div>
    </Framermotion>
    </>
  )
}

export default Login;
