import React from 'react';
import "./Home.css"
import bgPic from "./bg-photo.jpg";
import Header from '../Header/Header';
import { fakeData } from '../../fakedata';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{
            backgroundImage : `url(${bgPic})`,
            opacity : "2",
            backgroundPosition : "center",
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            width : "100vw",
            height : "100vh"
        }}>
            <Header></Header>
            <div className="d-flex align-items-center justify-content-center">
               
            {
                    fakeData.map(item => <Link to="/map" className='boxes bg-white rounded text-dark p-5 m-2 mt-5 shadow p-3 mb-5 bg-body' key={item.id}>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p> </Link>)
                    }
            </div>
        </div>
    );
};

export default Home;