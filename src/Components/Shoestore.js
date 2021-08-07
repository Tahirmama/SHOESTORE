import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';

export const ShoesStore =()=>{
    console.log(Shoes)
    return(
        <div className="HOME">
            
            <h1 align="center">SHOE STORE</h1>
            <div className="shoestore">

                {Object.keys(Shoes).map(keyName=>{      //object.keys array return krsa ana map na through usko acces karanga 
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/ShoesStore/${keyName}`}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    )
}