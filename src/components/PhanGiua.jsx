import React from "react";
import avt from '../assets/avatar.png';
import './PhanGiua.css';

export default function PhanGiua() {
    return (
        <div className="container_full">
            <div className="content">
                <div className="tren">
                    <h1>Emma Gonzalez's Recipe Box</h1>
                    <img src={avt} alt="Avt" />
                    <span>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</span>
                </div>
                <div className="duoi">

                </div>
            </div>
        </div>
    )
}