import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function WomenFrenchPage() {
    const {womenFrench} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return womenFrench.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'womenFrench'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1>العطور الفرنسية للنساء</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
