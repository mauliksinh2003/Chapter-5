import React from "react";

import { BrowserRouter, Navigate ,Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from "./About";
import Contact from "./Contact";

import './Task1.css';
import Profile from "./Profile.js";
import Posts from "./Posts.js";
import Friends from "./Friends.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Protected from "./Protected.js";
import Search from "./Search.js";
import Api from "./Api.js";
import Chapter5 from "./Chapter5.js";




function Task1() {
    return (
        <div className="body">

            <h1>Manual Tasks</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Chapter5 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Protected Component={Dashboard}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/profile/:name" element={<Profile />}>

                        <Route path="posts" element={<Posts />} />
                        <Route path='friends' element={<Friends />} />
                        <Route path='api' element={<Api />} />

                        <Route path="*" element={<Navigate to="/Profile" />} />

                    </Route>


                    <Route path="/*" element={<h1 style={{ marginTop: "200px", color: "red" }}>404 Not Found</h1>} />

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Task1;