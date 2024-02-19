import React from 'react'
import logo from '../images/qatrelnada.svg'
import contactus from '../images/contactus.png'
import waze from '../images/waze.png'
import insta from '../images/instablack.png'
import tiktok from '../images/tiktokblack.png'
import whatsapp from '../images/whatsappblack.png'

export default function Footer() {
  return (
    <div className='FooterComponent'>
        <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center'}}>
            <div className='FooterComponentDiv1'>
                <a rel="noreferrer" target='_blank' href="tel:0546564401">
                    <img src={contactus} alt="contactus" />
                    <h4>تواصل معنا</h4>
                </a>
                <a rel="noreferrer" target='_blank' href="https://www.waze.com/ar/live-map/directions?to=ll.32.40278%2C35.035422">
                    <img src={waze} alt="waze" />
                    <h4>كيفية الوصول</h4>
                </a>
            </div>
            <div className='FooterComponentDiv2'>
                <h3>تابعنا</h3>
                <a target='_blank' rel="noreferrer" href="https://instagram.com/qatr.elnada.store?igshid=MzRlODBiNWFlZA==">
                <img src={insta} alt="insta" />
                </a>
                <a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@qatrelnadastore?_t=8f85vhr1hFB&_r=1">
                <img src={tiktok} alt="tiktok" />
                </a>
                <a target='_blank' rel="noreferrer" href="https://wa.me/97254656440">
                <img src={whatsapp} alt="whatsapp" />
                </a>
            </div>
        </div>
        <img width={'10%'} style={{marginTop:'5%'}} src={logo} alt="Logo" />
        <h5 style={{color:'white',marginTop:'0px'}}>Designed & Developed By TBJ</h5>
    </div>
  )
}
