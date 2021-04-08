import React from 'react'
import {Link } from 'react-router-dom';


const Home = ()=> (
    <div className="jumbotron">

        <h2> Course Of PluralSight </h2>
        <p> React Redux Course  tuturial </p>
        <Link to="about" className="btn btn-primary mr-5 btn-lg">
            Learn More.
        </Link>
        
        <Link to="courses" className="btn btn-primary btn-lg">
            Courses
        </Link>
    </div>
)
export default Home;