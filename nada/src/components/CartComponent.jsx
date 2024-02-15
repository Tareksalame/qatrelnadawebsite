import React,{useState} from 'react'
import store from '../store';
import { add, addFromCart, minus } from '../actions';

export default function CartComponent(props) {
    
  const [theQuantity,setTheQuantity] = useState(props.val.quantity);
  const plus = async (product,quantity)=>
  {
    setTheQuantity(props.val.quantity + 1)
    props.setChange(!props.change)
    store.dispatch(addFromCart(product,quantity))
  }
  const minusFunction = (product,quantity)=>
  { 
        if(props.val.quantity > 0){
            setTheQuantity(props.val.quantity - 1)
            props.setChange(!props.change)
            store.dispatch(minus(product,quantity))
  }
  }
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
            <button onClick={()=>{plus(props.val.product,props.val.quantity+1)}}>+</button>
            <h1>{props.val.quantity}</h1>
            <button onClick={()=>{minusFunction(props.val.product,props.val.quantity-1)}}>-</button>
        </div>
        <div className='CartComponentPrice'>
            <h1>{props.val.quantity * props.val.product.price}₪</h1>
        </div>
    </div>
  )
}
