
import './Home.css'

import { useState, useEffect,useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import {  Link} from 'react-router-dom';
import {Cart, inputValuecontext, radioValuecontext} from '../Context';
import { TbShoppingCartCopy } from "react-icons/tb";


export default function Home(props) {
    // const [products,setProducts]=useState(props.products)
    const {cart,setCart}=useContext(Cart)
    const {inputvalue,setInputvalue}=useContext(inputValuecontext)
    const {radiobuttonvalue,setRadiobuttonvalue}=useContext(radioValuecontext)

    const addtoCart=(el)=>{
        
        let newObj=[...cart,{...el,quantity:1}]
        if(cart.some(e=>e.id==el.id)){
            setCart(cart.map((obj)=>{
                if(obj.id==el.id){
                    return {...obj,quantity:obj.quantity+1}
                }else{
                    return obj
                }
            }))
        }else{
            setCart(newObj)
        }
        
    }

    
    return <>
        <div className="container-fluid home_container">
        

            <div className="products_div">
                <div className="row con">
                    {props.iserror!='' && <h2 className='text-center mt-5'>{props.iserror}</h2>}
                        { props.products.filter(e=>radiobuttonvalue.includes('all')?e:e.category.toLowerCase().includes(radiobuttonvalue)).filter(e=>e.title.toLowerCase().includes(inputvalue)).map((el) => {
                            return <div className="col-lg-4 card_container">
                            <div className="card mt-4">
                                <img src={el.thumbnail} alt="" />
                                <h5>{el.title}</h5>
                                <h6>₹ {el.price}</h6>
                                <h6>{el.rating}</h6>
                                {cart.some(e=>e.id==el.id)?(<button className='btn addtocartbtn' onClick={()=>setCart(cart.filter(e=>e.id!=el.id))}><TbShoppingCartCopy id='addedtocart' /></button>):(<button className='btn addtocartbtn' onClick={()=>addtoCart(el)}>Add to Cart</button>)}
                                

                            </div>

                            </div>
                        })}

                    </div>
                
            </div>
        </div>


    </>
}