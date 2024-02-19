import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import userContext from '../userContext';
import closeMenu from '../images/X.svg'
import logo from '../images/qatrelnada.svg'
import contactus from '../images/contactus.png'
import waze from '../images/waze.png'



export default function Menu() {
    const {showMenu,setShowMenu,flag,setFlag,ListName,setListName} = useContext(userContext)
    const [showAlternativePerfumeFlag,setShowAlternativePerfumeFlag] = useState('none')
    const [showFrenchPerfumeFlag,setShowFrenchPerfumeFlag] = useState('none')
    const [showTurkishPerfumeFlag,setShowTurkishPerfumeFlag] = useState('none')
    const nav = useNavigate()



    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add('show')
            }else
            {
                entry.target.classList.remove('show')
            }
        })
    });
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=>{observer.observe(el)})
    

    const showAlternativePerfume = ()=>
    {
        if(showAlternativePerfumeFlag === 'flex')
        {
            return <div className='MenuLinksChildrenDiv'>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('womenList')}} to={'/بديل نسائي'}>نسائي</Link>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('menList')}} to={'/بديل رجالي'}>رجالي</Link>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('unisexList')}} to={'/بديل للجنسين'}>للجنسين</Link>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('kidsList')}} to={'/بديل اطفال'}>اطفال</Link>
            </div>
        }
    }
    const showFrenchPerfume = ()=>
    {
        if(showFrenchPerfumeFlag === 'flex')
        {
            return <div className='MenuLinksChildrenDiv'>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('womenFrench')}} to={'/فرنسي نسائي'}>نسائي</Link>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none');setListName('menFrench')}} to={'/فرنسي رجالي'}>رجالي</Link>
            </div>
        }
    }
    const showTurkishPerfume = ()=>
    {
        if(showTurkishPerfumeFlag === 'flex')
        {
            return <div className='MenuLinksChildrenDiv'>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none')}} to={'/تركي نسائي'}>نسائي</Link>
                <Link className='MenuLinksChildren' onClick={()=>{setFlag(!flag);setShowMenu('none')}} to={'/تركي رجالي'}>رجالي</Link>
            </div>
        }
    }

    const showAlternativePerfumeFlagFunction = ()=>
    {
        if(showAlternativePerfumeFlag === 'flex')
        {
            setShowAlternativePerfumeFlag('none')
        }
        else
        {
            setShowFrenchPerfumeFlag('none')
            setShowAlternativePerfumeFlag('flex')
            setShowTurkishPerfumeFlag('none')
        }
    }
    const showFrenchPerfumeFlagFunction = ()=>
    {
        if(showFrenchPerfumeFlag === 'flex')
        {
            setShowFrenchPerfumeFlag('none')
        }
        else
        {
            setShowAlternativePerfumeFlag('none')
            setShowFrenchPerfumeFlag('flex')
            setShowTurkishPerfumeFlag('none')

        }
    }
    const showTurkishPerfumeFlagFunction = ()=>
    {
        if(showTurkishPerfumeFlag === 'flex')
        {
            setShowTurkishPerfumeFlag('none')
        }
        else
        {
            setShowTurkishPerfumeFlag('flex')
            setShowAlternativePerfumeFlag('none')
            setShowFrenchPerfumeFlag('none')

        }
    }
  return (
    <div className='hidden' style={{display:showMenu}}  id='menu'>
            <div style={{width:'100%'}} className='closeMenuDiv' onClick={()=>{setFlag(!flag);setShowMenu('none')}}>
                <img className='menuImg' src={closeMenu} alt="close" />
            </div>
            <div className='LinksDiv' style={{width:'100%',textAlign:'center'}}>
            <img onClick={()=>{nav('/');setFlag(!flag);setShowMenu('none')}} width={'20%'} style={{marginBottom:'20px'}} src={logo} alt="logo" />
        <button className='MenuLinks' onClick={showAlternativePerfumeFlagFunction}>العطور البديلة</button>
        {showAlternativePerfume()}
        <button className='MenuLinks' onClick={showFrenchPerfumeFlagFunction} >العطور الفرنسية</button>
        {showFrenchPerfume()}
        <button className='MenuLinks' onClick={showTurkishPerfumeFlagFunction} >العطور التركية</button>
        {showTurkishPerfume()}
        <Link className='MenuLinks' onClick={()=>{setFlag(!flag);setShowMenu('none')}} to={'/الشموع'}>الشموع</Link>
        </div>
        <div style={{width:'100%',textAlign:'center'}} className='contactUsAndLocationMenuLinks'>
        <a target='_blank' rel="noreferrer" href='tel:0546564401' style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textDecoration:'none'}}>
            <img src={contactus} width={'10%'} alt="contactus" />
            <h5>تواصل معنا</h5>
        </a>
        <a target='_blank' rel="noreferrer" href='https://www.waze.com/ar/live-map/directions?to=ll.32.40278%2C35.035422' style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textDecoration:'none',marginTop:'3%'}}>
        <img src={waze} width={'10%'} alt="waze" />
            <h5>الوصول الينا</h5>
        </a>
        </div>


    </div>
  )
}
