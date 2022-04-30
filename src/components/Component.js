import '../styles/Component.css';
import React from 'react';
import users from "./JsonDB/users.json"
import { useState } from 'react';

const Component = () => {

    const [indexProfile, setIndexProfile] = useState(Math.floor(Math.random() * users.length));

    const ChangeBtn = () => setIndexProfile(Math.floor(Math.random() * users.length))

    return (
        <div className='component'>
            <h1>{users[indexProfile].name.first}</h1>
            <img src={`${users[indexProfile].picture.large}`} alt="" />
            <button onClick={ChangeBtn}><i class="fa-solid fa-shuffle fa-xl"></i></button>
            <ul>
                <li><i class="fa-solid fa-envelope"></i>  <b>E-mail: </b>{users[indexProfile].email}</li>
                <li><i class="fa-solid fa-location-dot">  </i>  <b>Address: </b>{users[indexProfile].location.city}</li>
                <li><i class="fa-solid fa-phone"></i>  <b>Phone number: </b>{users[indexProfile].phone}</li>
            </ul>
            <script src="https://kit.fontawesome.com/2d1958bf0d.js" crossorigin="anonymous"></script>
        </div>
    );
};

export default Component;