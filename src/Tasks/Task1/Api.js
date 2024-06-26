import $ from 'jquery';
import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useParams } from 'react-router-dom';



function Api() {

    const { userId } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Fetch random user data
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {
                const user = data.results[0];
                setProfile({
                    name: `${user.name.first} ${user.name.last}`,
                    bio: `Email: ${user.email}, Phone: ${user.phone}`
                });
            },
            error: function (error) {
                console.error('Error fetching profile:', error);
            }
        });
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>hey</h1>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <button onClick={handleGoBack}>Go Back</button>
            <Outlet />
        </div>
    )
}

export default Api;

