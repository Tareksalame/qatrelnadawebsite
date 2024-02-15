import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function AlternativeMen() {
    const {menList} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return menList.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'man'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1>العطر البديل للرجال</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
