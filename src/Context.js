import {createContext,useState} from 'react'


export const Cart = createContext()
export const inputValuecontext = createContext()
export const radioValuecontext = createContext()



export default function Context({children}){
  const [cart,setCart]=useState([])
  const [inputvalue,setInputvalue]=useState('')
  const [radiobuttonvalue,setRadiovaluebutton]=useState('')
  return <>
    <Cart.Provider value={{cart,setCart}}><inputValuecontext.Provider value={{inputvalue,setInputvalue}}><radioValuecontext.Provider value={{radiobuttonvalue,setRadiovaluebutton}}>{children}</radioValuecontext.Provider></inputValuecontext.Provider></Cart.Provider>
    
  
  </>
}