import React from 'react';
import './MonAn.css';

function MonAn(props){
    return (
        <div className='wrapper'>
            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
            <button>{props.times}</button>
        </div>
    );
};

export default MonAn;