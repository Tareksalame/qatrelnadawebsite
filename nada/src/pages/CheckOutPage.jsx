import React, { useState } from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import userContext from '../userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../store'
import CheckoutBag from '../components/CheckoutBag'
import InformationsComponent from '../components/InformationsComponent'



export default function CheckOutPage() {
    const{finalPrice,setFinalPrice,firstName,setFirstName,lastName,
        setLastName,email,setEmail,phoneNumber,setPhoneNumber,city,setCity,
        street,setStreet,house,setHouse,orderNumber,setOrderNumber } = useContext(userContext)
    
        const nav = useNavigate()


    const cart = ()=>
    {
        let filtered = store.getState().cartReducer.filter((val)=>
        {
            if(val.quantity !== 0)
            {
                return val
            }
        })

        return filtered.map((val,idx)=>
        {
            return <CheckoutBag  key={idx+'Cart'} val={val}/>
        })
    }

    const calculateFinalPrice = () => {
        const total = store.getState().cartReducer.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity * currentValue.product.price;
        }, 0);
        setFinalPrice(total);
    };

    React.useEffect(() => {
        calculateFinalPrice();
    }, []);
  return (
    <div className='CheckOutPage'>
        <Header/>
        <Menu/>
        <h1 className='CartPageTitle'>طلبيّتك
        <br />
        <span style={{color:'wheat'}}>{orderNumber}</span></h1>
        {cart()}
        <h1 style={{textAlign:'center'}} className='CartPageTitle'>السعر النهائي <br />{finalPrice}₪ <br />
            <span style={{color:'wheat',fontSize:'15px',background:'darkred',padding:'5%',borderRadius:'10px'}}>لا يشمل التوصيل</span>
        </h1>
        <InformationsComponent/>
    </div>
  )
}
