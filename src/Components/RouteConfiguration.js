import React from"react"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./home"
import { Navbar } from "./Navbar"
import { Shoesitem } from "./Shoesitem";
import { ShoesStore } from "./Shoestore";


export const Config =()=>{
    return(
        <div>
<Router>
    <Navbar />
<Routes>
    <Route exact path = "/" element={<Home/>}/>
    <Route exact path = "/ShoesStore" element={<ShoesStore/>}/>
    <Route path = "/ShoesStore/:id" element={<Shoesitem/>}/>        
    <Route path="*" component={()=><h2>404 Not Found</h2>}/>        

    </Routes>
</Router>

        </div>

    )
}