import React from 'react';
import './Task1.css';
import { Button } from 'react-bootstrap';
import { useNavigate , useParams } from 'react-router-dom';

function Chapter5() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home'); 
  };
  
  return (
    <div>
      <h1>Welcome to chapter 5 (Routing in React)</h1>
      <br />
      <h3>Click on below to open Home page..</h3>
      <br />
      <Button className="NestedBtn" variant="danger" onClick={goToHome}></Button>
      
    </div>
  )
}

export default Chapter5;
