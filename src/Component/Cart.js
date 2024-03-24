import {useContext} from 'react'
import {Cart} from '../Context'
import './Cart.css'
import { MdDelete } from "react-icons/md";




export default function CartPage(){

    const {cart,setCart}=useContext(Cart)
    
    const minusquantity = (el)=>{
        cart.map(ob=>{
            if(ob.id===el.id){
                if(ob.quantity<=1){
                    alert('Quantity should not less than 1')
                }else{

                    setCart(cart.map(e=>e.id==el.id?{...e,quantity:e.quantity-1}:e))
                }
            }
        })

        
    }

    const plusquantity = (el)=>{
        setCart(cart.map(e=>e.id==el.id?{...e,quantity:e.quantity+1}:e))
    }
    return <>
    <div className="container-fluid">
        <div className='text-center my-4'>
            <h2>Your Cart ({`${cart.length} items`})</h2>
        </div>
        <div className='my-2'>
            <table className='table'>
                <tr style={{background:"#E72840",color:'white'}}>
                    <th style={{width:'750px'}}>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Operation</th>
                </tr>
                {cart.map((el)=>{
                    return <tr>
                        <td className='d-flex w-550'>
                            <div>
                            <img width={200} src={el.thumbnail} alt="" />

                            </div>
                            <div className='p-4'>
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>

                            </div>

                        </td>
                        <td>{el.price}</td>
                        <td className='d-flex'><div className='quantity_btn'><button onClick={()=>minusquantity(el)}>-</button><b className='mx-2' id='quantity'>{el.quantity}</b><button onClick={()=>{plusquantity(el)}}>+</button></div></td>
                        <td>{el.price*el.quantity}</td>
                        <td><MdDelete className='deleteicon' onClick={()=>{setCart(cart.filter(e=>e.id!=el.id))}} /></td>
                    </tr>
                })}
            </table>
        </div>
        <hr />
        <div className="checkout_container">
            <div className="checkout_div">
                <div className="cost">
                    <b>Subtotal :</b><b>{cart.reduce((acc,item)=>(item.price*item.quantity)+acc,0)}</b>
                </div>
                <div className="cost">
                <b>Tax : </b><b>Nill</b>
                </div>
                <div className="cost">
                <b>Discount :</b><b>Nill</b>
                </div>
                <div className="cost">
                <b>Grant Total :</b><b>{cart.reduce((acc,item)=>(item.price*item.quantity)+acc,0)}</b>
                </div>
                <div className="checkout_btn">
                    <button className='btn btn-light'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
}