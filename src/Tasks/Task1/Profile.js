import React, { useEffect , useState } from "react";
import { Outlet, NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Task1.css';


function Profile() {

  const Param = useParams();
  const { name } = Param;
  const navigator = useNavigate();

  const goToPosts = () => {
    navigator('posts'); // Navigate to the relative path 'posts'
  };

  const goToFriends = () => {
    navigator('friends'); // Navigate to the relative path 'posts'
  };

  const goToApi = () => {
    navigator('api'); 
  };



  return (

    <>

      <div className="paramCmp">
        <h1>Welcome {name}</h1>

        <NavLink to="/profile/user1">User 1</NavLink>
        <NavLink to="/profile/user2">User 2</NavLink>

      </div>

      <div className="NestedBtnCmp">

        <Button className="NestedBtn" variant="success" onClick={goToPosts}>Posts</Button>
        <Button className="NestedBtn" variant="success" onClick={goToFriends}>Friends</Button>

        <div className="NestedCmp">
          <Outlet />
        </div>

      </div>

      <div>
      
      <Button className="NestedBtn" variant="dark" onClick={goToApi}>Get Api</Button>

      </div>

      <div className="Homecmp">
        <h2>Return to Home page</h2>

        <button>
          <NavLink to="/home">Home</NavLink>
        </button>
      </div>
    </>
  )
}

export default Profile;
