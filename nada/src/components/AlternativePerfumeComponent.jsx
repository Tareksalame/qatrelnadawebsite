import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductComponent from './ProductComponent.jsx';
import userContext from '../userContext';
import { useNavigate } from 'react-router-dom';

const AlternativePerfumeComponent = (props) => {
    const[display1,setDisplay1] = useState('flex')
    const[display2,setDisplay2] = useState('none')
    const {PerfumeIndex,setPerfumeIndex,ListName} = useContext(userContext)
    const nav = useNavigate()
    
    const ShowProduct = ()=>
    {
        setPerfumeIndex(props.idx)
        nav('/Perfume')
    }

    const alternativeOrNot = ()=>
    {
        if(ListName === 'menList' || ListName === 'womenList' || ListName === 'kidsList' || ListName === 'unisexList')
        {
            return <h3 style={{ color: 'white' }}>
            العطر البديل ل <br />
            <br />
            {props.val.real}
          </h3>
        }
        else
        {
            return <h3 style={{ color: 'white' }}>
            {props.val.real}
          </h3>
        }
    }

  return (
    <div  className='AlternativePerfumeComponent'>
          <div className='AlternativePerfumeComponentImages'>
            <img loading='lazy' style={{display:display1,backgroundColor:'white'}} src={props.val.image}  />
            <img loading='lazy' style={{display:display2}} src={props.val.womenImg}  />
          </div>
          <div className='AlternativePerfumeComponentImagesChoose'>
            <img onClick={()=>{setDisplay1('flex');setDisplay2('none')}} src={props.val.image}  />
            <img onClick={()=>{setDisplay1('none');setDisplay2('flex')}} src={props.val.womenImg}  />
          </div>

        {alternativeOrNot()}
      <h4>{props.val.price}₪</h4>
      <button className='AlternativePerfumeComponentMoreButton' onClick={ShowProduct}>المزيد</button>
    </div>
  );
};

export default AlternativePerfumeComponent;
