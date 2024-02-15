export const add = (product,quantity)=>
{
    return{
        type: 'add',
        payload: {
            product,
            quantity
        }
    } 
}
export const addFromCart =(product,quantity)=>
{
    return{
        type: 'addFromCart',
        payload: {
            product,
            quantity
        }
    } 
}
export const minus =(product,quantity)=>
{
    return{
        type: 'minus',
        payload: {
            product,
            quantity
        }
    } 
}
export const clear =()=>
{
    return{
        type: 'clear',
    } 
}