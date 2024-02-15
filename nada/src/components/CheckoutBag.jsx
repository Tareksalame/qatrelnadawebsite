import React,{useState} from 'react'
import store from '../store';
import { add, addFromCart, minus } from '../actions';

export default function CheckoutBag(props) {
  const [theQuantity,setTheQuantity] = useState(props.val.quantity);

    const realOrAlternative = ()=>
  {
    if(props.val.product.replace)
    {
        return <div className='CartProductName' >
            العطر البديل ل <br />
        {props.val.product.real}
    </div>
    }
    else
    {
        return <div className='CartProductName' >
        {props.val.product.real}
    </div>
    }
  }
  return (
    <div className='CartComponent'>
        <div className='CartComponentImage'>
            <img src={props.val.product.image} alt="image" />
        </div>
       {realOrAlternative()}
        <div className='PlusMinusCartDiv'>
            <h1>{theQuantity}</h1>
        </div>
        <div className='CartComponentPrice'>
            <h1>{theQuantity * props.val.product.price}₪</h1>
        </div>
    </div>
  )
}
