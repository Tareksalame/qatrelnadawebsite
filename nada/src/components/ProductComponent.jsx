import React, { useContext,useState } from 'react'
import userContext from '../userContext'
import Menu from './Menu';
import Header from './Header';
import store from '../store';
import {add }from '../actions'

export default function ProductComponent() {
  const {menList,womenList,kidsList,unisexList,PerfumeIndex,setPerfumeIndex,ListName,setListName,
    womenFrench,menFrench} = useContext(userContext);
  const[display1,setDisplay1] = useState('flex')
  const[display2,setDisplay2] = useState('none')
  const [theQuantity,setTheQuantity] = useState(0);

  const addtocart = (product,quantity)=>
  {
    if(theQuantity <= 0)
    {
      alert('يجب ان تكون الكمية اكبر من 0')
    }
    else
    {
      store.dispatch(add(product,quantity))
      setTheQuantity(0)
    }
  }


  const ProductShow = ()=>
  {
    if(ListName === 'menList')
    {
      return <div className='ProductsDiv'>
                <h3 style={{ color: 'white' }}>
        العطر البديل ل 
        </h3>
        <h2 style={{color:'wheat',marginTop:'0px'}}>{menList[PerfumeIndex].real}</h2>
        <div className='ProductHeadImageDiv'>
            <img loading='lazy' style={{display:display1}} src={menList[PerfumeIndex].image}  />
            <img loading='lazy' style={{display:display2}} src={menList[PerfumeIndex].womenImg}  />
          </div>
          <div className='ProductHeadImageSelectDiv'>
            <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={menList[PerfumeIndex].image}  />
            <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={menList[PerfumeIndex].womenImg}  />
          </div>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>
      <h3 style={{color:'wheat',margin:'0px'}}>
          Shaik {menList[PerfumeIndex].replace}
      </h3>

      <h3 style={{ color: 'wheat',margin:'0px' }}> {menList[PerfumeIndex].price}₪</h3>
      </div>
      <div style={{marginBottom:'5%',marginTop:'5%'}} className='PlusMinusDiv'>
        <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
        <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
        <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(menList[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
      </div>
    }
    else if(ListName === 'womenList')
    {
      return <div className='ProductsDiv'>
        <h3 style={{ color: 'white' }}>
        العطر البديل ل 
        </h3>
        <h2 style={{color:'wheat',marginTop:'0px'}}>{womenList[PerfumeIndex].real}</h2>
      <div className='ProductHeadImageDiv'>
          <img loading='lazy' style={{display:display1}} src={womenList[PerfumeIndex].image}  />
          <img loading='lazy' style={{display:display2}} src={womenList[PerfumeIndex].womenImg}  />
        </div>
        <div className='ProductHeadImageSelectDiv'>
          <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={womenList[PerfumeIndex].image}  />
          <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={womenList[PerfumeIndex].womenImg}  />
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>
      <h3 style={{color:'wheat',margin:'0px'}}>
          Shaik {womenList[PerfumeIndex].replace}
      </h3>

      <h3 style={{ color: 'wheat',margin:'0px' }}> {womenList[PerfumeIndex].price}₪</h3>
      </div>
      <div style={{marginBottom:'5%',marginTop:'5%'}} className='PlusMinusDiv'>
      <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
      <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
      <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(womenList[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
      </div>
    }
    else if(ListName === 'kidsList')
    {
      return <div className='ProductsDiv'>
      <div className='ProductHeadImageDiv'>
          <img loading='lazy' style={{display:display1}} src={kidsList[PerfumeIndex].image}  />
          <img loading='lazy' style={{display:display2}} src={kidsList[PerfumeIndex].womenImg}  />
        </div>
        <div className='ProductHeadImageSelectDiv'>
          <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={kidsList[PerfumeIndex].image}  />
          <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={kidsList[PerfumeIndex].womenImg}  />
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>
      <h3 style={{color:'wheat',margin:'0px'}}>
          Shaik {kidsList[PerfumeIndex].replace}
      </h3>

      <h3 style={{ color: 'wheat',margin:'0px' }}> {kidsList[PerfumeIndex].price}₪</h3>
      </div>
      <div style={{marginBottom:'5%',marginTop:'5%'}} className='PlusMinusDiv'>
      <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
      <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
      <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(kidsList[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
      </div>

    }
    else if(ListName === 'unisexList')
    {
      return <div className='ProductsDiv'>
      <h3 style={{ color: 'white' }}>
      العطر البديل ل 
      </h3>
      <h2 style={{color:'wheat',marginTop:'0px'}}>{unisexList[PerfumeIndex].real}</h2>
      <div className='ProductHeadImageDiv'>
          <img loading='lazy' style={{display:display1}} src={unisexList[PerfumeIndex].image}  />
          <img loading='lazy' style={{display:display2}} src={unisexList[PerfumeIndex].womenImg}  />
        </div>
        <div className='ProductHeadImageSelectDiv'>
          <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={unisexList[PerfumeIndex].image}  />
          <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={unisexList[PerfumeIndex].womenImg}  />
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>
      <h3 style={{color:'wheat',margin:'0px'}}>
          Shaik {unisexList[PerfumeIndex].replace}
      </h3>

      <h3 style={{ color: 'wheat',margin:'0px' }}> {unisexList[PerfumeIndex].price}₪</h3>
      </div>
      <div style={{marginBottom:'5%',marginTop:'5%'}} className='PlusMinusDiv'>
      <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
      <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
      <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(unisexList[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
    </div>
    }
    else if(ListName === 'womenFrench')
    {
      return <div className='ProductsDiv'>

        <h2 style={{color:'wheat',marginTop:'0px'}}>{womenFrench[PerfumeIndex].real}</h2>
      <div className='ProductHeadImageDiv'>
          <img loading='lazy' style={{display:display1}} src={womenFrench[PerfumeIndex].image}  />
          <img loading='lazy' style={{display:display2}} src={womenFrench[PerfumeIndex].womenImg}  />
        </div>
        <div className='ProductHeadImageSelectDiv'>
          <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={womenFrench[PerfumeIndex].image}  />
          <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={womenFrench[PerfumeIndex].womenImg}  />
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>
      <h3 style={{ color: 'wheat',margin:'0px' }}> {womenFrench[PerfumeIndex].price}₪</h3>
      </div>
      <div className='PlusMinusDiv'>
      <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
      <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
      <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(womenFrench[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
      </div>
    }
    else if(ListName === 'menFrench')
    {
      return <div className='ProductsDiv'>

        <h2 style={{color:'wheat',marginTop:'0px'}}>{menFrench[PerfumeIndex].real}</h2>
      <div className='ProductHeadImageDiv'>
          <img loading='lazy' style={{display:display1,backgroundColor:'white'}} src={menFrench[PerfumeIndex].image}  />
          <img loading='lazy' style={{display:display2}} src={menFrench[PerfumeIndex].womenImg}  />
        </div>
        <div className='ProductHeadImageSelectDiv'>
          <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={menFrench[PerfumeIndex].image}  />
          <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={menFrench[PerfumeIndex].womenImg}  />
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:'10%'}}>


      <h3 style={{ color: 'wheat',margin:'0px' }}> {menFrench[PerfumeIndex].price}₪</h3>
      </div>
      <div className='PlusMinusDiv'>
      <button onClick={()=>{setTheQuantity(prev => prev + 1)}}>+</button>
      <h1 style={{color:'wheat',margin:'0px'}}>{theQuantity}</h1>
      <button onClick={()=>{if(theQuantity>0) setTheQuantity(prev => prev - 1)}}>-</button>
      </div>
      <button className='AddToCartButton' onClick={()=>{addtocart(menFrench[PerfumeIndex],theQuantity)}}>إضافة الى السلّة</button>
      </div>
    }
  }
  return (
    <div
    className='ProductComponent'>
      <Header/>
      <Menu/>
        {ProductShow()}
    </div>
  )
}
