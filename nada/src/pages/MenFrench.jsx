import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function MenFrenchPage() {
    const {menFrench} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return menFrench.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'menFrench'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1>العطور الفرنسية للرجال</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
