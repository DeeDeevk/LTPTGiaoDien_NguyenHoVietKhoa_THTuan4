import React from "react";
import './PhanCuoi.css';
import logoMauKhac from '../assets/logoMauKhac.jpg';

export default function PhanCuoi(){
    var li1 = ['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Chrismas'];
    var li2 = ['Gift Subscription', 'Send Us Facebook'];
    var li3 = ['Our Cook', 'See Our Features', 'FAQ'];
    return(
        <div className="chuaHet">
            <div className="fTrai">
                <h2>About us</h2>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                <input type="text" placeholder="Enter your email"/>
                <button>Send</button>
                <div className="fTraiPhiaDuoi">
                    <img src={logoMauKhac} alt="logo mau khac"/>
                    <div className="thongTinTrai">2023 Chefify company</div>
                    <div className="thongTinTrai">Term of Service| Privacy policy</div>
                </div>
            </div>
            <div className="fGiua">
                <div className="giuaTren">
                    <h2>Learn More</h2>
                    <ul>
                    {li3.map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="giuaDuoi">
                    <h2>Shop</h2>
                    <ul>
                    {li2.map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="fPhai">
                <div className="giuaTren">
                    <h2>Recipes</h2>
                    <ul>
                        {li1.map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}