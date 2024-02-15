import React, { useContext, useState } from 'react'
import store from '../store'
import CartComponent from '../components/CartComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'
import userContext from '../userContext'
import { useNavigate } from 'react-router-dom'



export default function CartPage() {
    const [change,setChange] = useState(true)
    const{finalPrice,setFinalPrice,orderNumber,setOrderNumber} = useContext(userContext)
    const nav = useNavigate()
    const cart = ()=>
    {
        let filtered = store.getState().cartReducer.filter((val,idx)=>
        {
            if(val.quantity !== 0)
            {
                return val
            }
        })

        return filtered.map((val,idx)=>
        {
            return <CartComponent change={change} setChange={setChange} key={idx+'Cart'} val={val}/>
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
    }, [change]);
    
    const generateRandomNumber = () => {
        const min = 1000000; // Smallest 7-digit number
        const max = 9999999; // Largest 7-digit number
        const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setOrderNumber(newRandomNumber);
        nav('/CheckOut')
      };


  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Header/>
        <Menu/>
        <h1 className='CartPageTitle'>السلّة</h1>
        {cart()}
        <h1 style={{textAlign:'center'}} className='CartPageTitle'>السعر النهائي <br />{finalPrice}₪</h1>
        <button onClick={generateRandomNumber} className='goToCheckout'>أكمل الطلبية</button>
    </div>
  )
}
