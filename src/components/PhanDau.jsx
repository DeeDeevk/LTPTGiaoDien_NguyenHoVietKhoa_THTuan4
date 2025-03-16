import React from "react";
import './PhanDau.css';
import logo from '../assets/logo.jpg';
import avt from '../assets/avt.jpg';

export default function PhanDau() {
    var menus = ['What to cook', 'Recipes', 'Ingredients', 'Occations', 'About Us'];
    return (
        <div className="container_full top">
            <div className="container">
                <div className="logoAndSearch">
                    <div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div>
                        <input type="text" placeholder="Search" className="timKiem" />
                    </div>
                </div>
                <div className="phanGiua">
                    <ul className="menu">
                        {menus.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="">{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="phanCuoi">
                    <div>
                        <button className="yrb">You Recipe Box</button>
                    </div>
                    <div>
                        <img src={avt} alt="avatar" className="avt" />
                    </div>
                </div>
            </div>
        </div>
    );
}