import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function UnisexPerfumes() {
    const {unisexList} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return unisexList.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'unisex'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1 style={{textAlign:'center'}}>العطر البديل للذكور والاناث</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
