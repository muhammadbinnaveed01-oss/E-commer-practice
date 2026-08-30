import React, { useContext, useReducer, useState } from 'react'
import carddata from '../Data/data'
import context from '../context/context'
const Cards =()=>{
    const {feature,dispatch} = useContext(context)  
const funtag = (tagfilter, action) => {
    switch (action.type) {

        case "Electronics": {
             return "Electronics"
        }

        case "Laptops": {
             return "Laptops"
        }

        case "Audio": {
             return "Audio"
        }

        case "Wearables": {
             return "Wearables"
        }

        case "Shoes": {
             return "Shoes"
        }

        case "Clothing": {
             return "Clothing"
        }

        case "Accessories": {
             return "Accessories"
        }

        case "Cameras": {
             return "Cameras"
        }

        case "Gaming": {
             return "Gaming"
        }

        case "Computer": {
             return "Computer"
        }

        case "Appliances": {
             return "Appliances"
        }

        case "Kitchen": {
            return "Kitchen"
        }

        case "Furniture": {
             return "Furniture"
        }

        case "Bags": {
             return "Bags"
        }

        case "Travel": {
             return "Travel"
        }

        case "Home Decor": {
             return "Home Decor"
        }

        case "All": {
             return "All"
        }

        default: {
            return "All"
        }
    }
}
const funsort =(dissortfilter,action)=>{
    switch(action.type){
        case"assending":{
            return "assending"
        }
        case"dessending":{
            return "dessending"
        }
        case"a-z":{
            return "a-z"
        }
        case"z-a":{
            return "z-a"
        }
         default:
            return "none"
    }
}
 const initilizaion = "All"

    const [tagfilter,distagfilter] = useReducer(funtag,initilizaion)
    const [sortfilter,dissortfilter] = useReducer(funsort,"none")
    const [search,setsearch] =useState("")
    
    const product =  tagfilter === "All" ? carddata : carddata.filter((e)=> {return e.category === tagfilter})
    const searchproduct = product.filter((a)=>a.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const sortedcopy = [...searchproduct]
    
  
    if(sortfilter === "assending"){
        sortedcopy.sort((a,b)=>a.price - b.price)
    }
    if(sortfilter ==="dessending"){
        sortedcopy.sort((a,b)=>b.price -a.price)
    }
    if(sortfilter === "a-z"){
        sortedcopy.sort((a,b)=>a.name.localeCompare(b.name))
    }
    if(sortfilter === "z-a"){
        sortedcopy.sort((a,b)=> b.name.localeCompare(a.name))
    }
    return (
        <>
       <div className="mx-auto mb-10 max-w-5xl flex flex-row gap-3">

  {/* Cart Header */}
  <div className="mb-6 flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-bold text-left text-gray-900">
        FILTER :
      </h2>

      <p className="mt-1 text-sm text-gray-500 border border-gray-400 w-100 h-20 p-2">
        <button onClick={(e)=>{ return distagfilter({type:"All"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>All</button>
       <button onClick={(e)=>{ return distagfilter({type:"Electronics"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Electronics</button>
       <button onClick={(e)=>{ return distagfilter({type:"Laptops"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Laptops</button>
       <button onClick={(e)=>{ return distagfilter({type:"Audio"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Audio</button>
       <button onClick={(e)=>{ return distagfilter({type:"Wearables"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Wearables</button>
       <button onClick={(e)=>{ return distagfilter({type:"Shoes"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Shoes</button>
       <button onClick={(e)=>{ return distagfilter({type:"Clothing"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'> Clothing</button>
       <button onClick={(e)=>{ return distagfilter({type:"Accessories"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Accessories</button>
       <button onClick={(e)=>{ return distagfilter({type:"Cameras"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Cameras</button>
       <button onClick={(e)=>{ return distagfilter({type:"Gaming"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Gaming</button>
       <button onClick={(e)=>{ return distagfilter({type:"Computer"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Computer</button>
       <button onClick={(e)=>{ return distagfilter({type:"Appliances"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Appliances</button>
       <button onClick={(e)=>{ return distagfilter({type:"Kitchen"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Kitchen</button>
       <button onClick={(e)=>{ return distagfilter({type:"Furniture"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Furniture</button>
       <button onClick={(e)=>{ return distagfilter({type:"Bags"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Bags</button>
       <button onClick={(e)=>{ return distagfilter({type:"Travel"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Travel</button>
       <button onClick={(e)=>{ return distagfilter({type:"Home Decor"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>Home Decor</button>
      </p>
    </div>

  </div>
  <div className="mb-6 flex  items-center justify-between">
    <div>
      <h2 className="text-2xl font-bold text-left text-gray-900">
        Sorting:
      </h2>

      <p className="mt-1 text-sm text-gray-500 border border-gray-400 w-50 h-20 p-2">
        <button onClick={(e)=>{ return dissortfilter({type:"none"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>none</button>
       <button onClick={(e)=>{ return dissortfilter({type:"assending"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>assending</button>
       <button onClick={(e)=>{ return dissortfilter({type:"dessending"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>dessending</button>
       <button onClick={(e)=>{ return dissortfilter({type:"a-z"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>a-z</button>
       <button onClick={(e)=>{ return dissortfilter({type:"z-a"})}} className='border px-1 border-blue-200 rounded bg-amber-100 hover:bg-amber-500 hover:text-white'>z-a</button>
       
      </p>
    </div>
<div className=" ps-5">
    <input
    value={search}
type="text"
placeholder="Search products..."
onChange={(e)=>{ setsearch(e.target.value)}}
className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
/>

</div>
  </div>
</div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
{sortedcopy.map((e,index)=>{
    return(
               <div key={index} className="w-75  overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  {/* Product Image */}
  <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gray-100">
    
    <span className="text-sm text-gray-400">Product Image</span>
  </div>

  {/* Product Info */}
  <div>
    <h2 className="text-xl font-bold text-gray-900">
      {e.name}
      
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      📍{e.location} 
    </p>

    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
      {e.para}
    </p>

    {/* Price + Button */}
    <div className="mt-5 flex items-center justify-between">
      <span className="text-xl font-bold text-gray-900">
        ${e.price}
        
      </span>

      <button
      onClick={()=>dispatch({type:"add_to_cart",payload:e})}
        className="rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold
                   text-white transition-colors hover:bg-amber-700
                   active:scale-95"
      >
        Add to Cart     <span className=" rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
  {e.category}
</span>
      </button>
    </div>
  </div>
</div>
    )
})}
</div>
        </>
    )
}
export default Cards