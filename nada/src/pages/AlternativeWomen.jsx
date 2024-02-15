import React, { useContext } from 'react'
import userContext from '../userContext'
import AlternativePerfumeComponent from '../components/AlternativePerfumeComponent'
import Header from '../components/Header'
import Menu from '../components/Menu'


export default function AlternativeWomen() {
    const {womenList} = useContext(userContext)
    const ShowPerfumeList = ()=>
    {
        return womenList.map((val,idx)=>
        {
            return <AlternativePerfumeComponent idx={idx} key={idx+'woman'} val={val}/>
        })
    }
  return (
    <div className='AlternativeMen'>
        <Header/>
        <Menu/>
        <h1>العطر البديل للنساء</h1>
        <div  className="AlternativePerfumeComponentContainer">
        {ShowPerfumeList()}
        </div>
    </div>
  )
}
