import React,{useReducer} from 'react'

import './App.css'
import Routerlink from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './compunent/Navbar'
import context from '../src/context/context.js'
function App() {
    const Reducer =(feature,action)=>{ // feature = virtual space  | action = static data a
        switch(action.type){ 
            case "add_to_cart":{
                const exist = feature.find((e)=>{return e.id === action.payload.id}) //action.payload is static data of  data.js
                if(exist) {return feature} 
                return[//   and the [empty array] => ...card = [action.payload] = before that it add new property = quantity :1
                    ...feature,
                    {
                        ...action.payload,
                        quantity:1
                    }
                    
                ]
            }
            case "add":{
                return feature.map((e)=>{return  e.id === action.payload.id ? {...e, quantity: e.quantity+1}: e})
            }
            case "subtract":{
                const exist = feature.find((e)=>e.id === action.payload.id)
                if(exist.quantity === 1){
                    return feature.filter((e)=>e.id !== action.payload.id)
                }
                return feature.map((e)=>{return e.id=== action.payload.id?{...e,quantity:e.quantity-1}:e})
            }   
        }
    }
    const [feature,dispatch] = useReducer(Reducer,[])

  return (
    <>
      
      <BrowserRouter>
      <context.Provider value={{feature,dispatch}}>
      <Navbar/>
       <Routerlink/>
       </context.Provider>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
