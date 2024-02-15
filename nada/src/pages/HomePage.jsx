import React, { useContext }  from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import first from '../images/first.png'
import altmen from '../images/altmen.png'

import { useNavigate } from 'react-router-dom'
import userContext from '../userContext'


export default function HomePage() {
    const {setListName} = useContext(userContext)
const nav= useNavigate()



  return (
    <div className='HomePage'>
        <Header/>
        <Menu/>
        <div className='HomePageFlayers'>
        <img onClick={()=>{setListName('womenList');nav('/بديل نسائي')}} src={first} alt="first" />
        <br />
        <img onClick={()=>{setListName('menList');nav('/بديل رجالي')}} src={altmen} alt="first" />
        </div>
    </div>
  )
}
