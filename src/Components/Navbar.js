import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export const Navbar = () => {
    return (
        <nav align="center" className="HOME">
            <button className="Button"  >
                <Link to="/" className="Button">HOME</Link>
            </button>
            <button className="Button">
                <Link to="/ShoesStore" className="Button" >SHOE STORE</Link>
            </button>

            <a href="mailto:tahirmama8@gmail.com" className="Button">CONTACT US
            </a>

        </nav>
    )
}