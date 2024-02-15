import React, { useContext, useState } from 'react'
import logo from '../images/qatrelnada.svg'
import cart from '../images/cart.png'
import menu from '../images/MENU.svg'
import closeMenu from '../images/X.svg'
import userContext from '../userContext'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import store from '../store'


export default function Header() {
    const{showMenu,setShowMenu,flag,setFlag} = useContext(userContext)

    const nav = useNavigate()

    const showMenuIcon = ()=>
    {
        if(flag === true)
        {
            
            return <div className='HeaderDivs' onClick={()=>{setFlag(!flag);setShowMenu('none')}}>
                <img className='menuImg' src={closeMenu} alt="close" />
            </div>
        }
        else
        {
            return <div className='HeaderDivs' onClick={()=>{setFlag(!flag);setShowMenu('flex')}}>
                <img className='menuImg' src={menu} alt="close" />
            </div>
        }
    }
    const filtered = ()=>
    {
        let filter = store.getState().cartReducer.filter((val)=>
        {
            if(val.quantity !== 0)
            {
                return val
            }
        })
        return filter.length
    }
  return (
    <div className='Header'>
        <div onClick={()=>{nav('/Cart')}} className='HeaderDivs'>
        <img className='cartImg'  src={cart} alt="cart" />
        <h3 style={{color:'darkred',position:'absolute'}}>{filtered()}</h3>
        </div>
        <div className='HeaderDivs'>
        <img width={'80%'} onClick={()=>{nav('/')}} src={logo} alt="logo" />
        </div>
        {showMenuIcon()}
    </div>
  )
}
