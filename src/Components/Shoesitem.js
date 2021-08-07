import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

export const Shoesitem = ()=>{
    const { id } = useParams();     //helps us to access the URL parameters from a current route
    const shoe = Shoes[id];
    

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1 align="center">SHOES INFO</h1>
            <div className="link1">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={400} alt="shoe" />
            </div>
        </div>
    );
}