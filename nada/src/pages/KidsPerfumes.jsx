import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'


export default function KidsPerfumes() {
    const {kidsList} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return kidsList.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'kid'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1 style={{textAlign:'center'}}>العطر البديل للأولاد والبنات</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
