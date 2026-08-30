import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Product from '../src/Pages/Product'
import Addtocart from '../src/Pages/Addtocart'
const Routerlink =()=>{
    return (
        <>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/addtocart' element={<Addtocart/>}/>
        </Routes>
        </>
    )
}
export default Routerlink