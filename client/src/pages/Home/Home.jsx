import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    useEffect(() => {
        axios.get('http://localhost:3000/Home')
            .then((res) => {
                console.log(res.data)
            })
    })

    return (
        <div>




            <p>I hope she gets better</p>
            <Link to="/login">to login</Link>
        </div>
    )
}

export default Home;