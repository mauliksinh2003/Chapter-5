import React from "react";
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import './Task1.css';

export function Posts() {

    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Friends</h1>
            <p>Here is some friends of {name}</p>

            <Link to={`/profile/${name}`}>Back to Profile</Link>

        </div>
    )
}

export default Posts;