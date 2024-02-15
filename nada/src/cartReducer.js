export default function cartReducer (state = [],action)
{
    switch(action.type)
    {
        case 'add':
            const productIndex = state.findIndex(val => val.product.real === action.payload.product.real);
            if(productIndex !== -1)
            {
                return state.map((val,idx)=>
                {
                    if(idx === productIndex){
                        return {
                            ...val,
                            quantity: val.quantity + action.payload.quantity
                        }
                    }
                    return val
                })
            }
            else
            {
                return[...state,{
                    product : action.payload.product,
                    quantity: action.payload.quantity
                }]
            }
            case 'addFromCart':
            const findproductIndex = state.findIndex(val => val.product === action.payload.product);
            if(findproductIndex !== -1)
            {
                return state.map((val,idx)=>
                {
                    if(idx === findproductIndex){
                        return {
                            ...val,
                            quantity: action.payload.quantity
                        }
                    }
                    return val
                })
            }
        case 'minus' :
            const minusProductIndex = state.findIndex(val => val.product === action.payload.product);
            if(minusProductIndex !== -1)
            {
                return state.map((val,idx)=>
                {
                    if(idx === minusProductIndex){
                        return {
                            ...val,
                            quantity: action.payload.quantity
                        }
                    }
                    return val
                })
            }
            else
            {
                return[...state,{
                    product : action.payload.product,
                    quantity: action.payload.quantity
                }]
            }
            case 'remove' :
            const removeProductIndex = state.findIndex(val => val.product === action.payload.product);
            if(removeProductIndex !== -1)
            {
                return state.map((val,idx)=>
                {
                    if(idx === removeProductIndex){
                        return {
                            ...val,
                            quantity: action.payload.quantity
                        }
                    }
                    return val
                })
            }
            else
            {
                return[...state,{
                    product : action.payload.product,
                    quantity: action.payload.quantity
                }]
            }
            case 'clear':
                return state = []
            default:
                let filter = state.filter((val)=>
                {
                    if(val.quantity !== 0)
                    {
                        return val
                    }
                }) 
                return filter
    }
}