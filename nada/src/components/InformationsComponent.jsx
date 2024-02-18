import React ,{useContext} from 'react'
import userContext from '../userContext'
import store from '../store'
import { clear } from '../actions'
import { useNavigate } from 'react-router-dom'

export default function InformationsComponent() {
    const{finalPrice,setFinalPrice,firstName,setFirstName,lastName,
        setLastName,email,setEmail,phoneNumber,setPhoneNumber,city,setCity,
        street,setStreet,house,setHouse,takeAwayOrShipping,setTakeAwayOrShipping
    ,orderNumber,setOrderNumber} = useContext(userContext)
    const nav = useNavigate()



        const informationsDone = ()=>
        {
            if(firstName === '' || lastName === '' || email === '' || phoneNumber === '' ||city === '' || street === '' || house === ''||takeAwayOrShipping ==='')
            {
                return alert('عليك تعبئة كل التفاصيل المعلّمة بنجمة *')
            }
            else if(email.indexOf('@') === -1)
            {
                return alert('تأكد من ان بريدك  الاكتروني صحيح')
            }
            else if(phoneNumber.length !== 10)
            {   
                return alert('رقم الهاتف يجب ان يكون مكوّن من 10 أرقام')
            }
            else{
                fetch('/BuyNow', 
                {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    method:'post',
                    body:JSON.stringify({
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        phoneNumber:phoneNumber,
                        city:city,
                        street:street,
                        house:house,
                        orderNumber:orderNumber,
                        finalPrice:finalPrice,
                        takeAwayOrShipping:takeAwayOrShipping,
                        cart:store.getState().cartReducer
                    })
                }).then((res)=>{return res.json()})
                .then((data)=>
                {
                  if(data === 'done')
                  {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhoneNumber('')
                    setCity('')
                    setHouse('')
                    setStreet('')
                    setFinalPrice(0)
                    setOrderNumber(0)
                    setTakeAwayOrShipping('')
                    store.dispatch(clear())
                    alert('شكرًا! تم استلام طلبيتك سيتم ارسال التفاصيل الى بريدك الالكتروني')
                    nav('/')
                    // setName('')
                    // setPhoneNumber('')
                    // setCity('')
                    // setEmail('')
                    // setNotes('')
                    // setTakeAwayOrShipping('Take Away')
                    // setLocation(null)
                    // setCart([])
                    // SetFinalPrice(0)
                    // nav('/Notes')
                    // setTimeout(() =>nav("/"), 1500)
                  }
                  else
                  {
                    alert('لم تصل الطلبية الرجاء تحديث الصفحة واعادة المحاولة مرة اخرى')
                  }
                }).catch((err)=>{return err})
            }
        }


  return (
    <div className='InformationsDiv'>
    <h1 style={{textAlign:'right'}}>تفاصيل الدفع والتوصيل
        <br />
        <br />
        <span style={{color:'wheat'}}>
            سيتم إرسال تفاصيل الطلبية الى <br /> البريد الالكتروني
            <br />
            الدفع يكون عند إستلام الطلبية
        </span>
    </h1>
    <div className='FirstNameLastName'>
        <label className='informationsLabel' htmlFor="FirstName">
            <h4><span>*</span>الاسم الشخصي </h4>
            <input id='FirstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='الاسم الشخصي' type="text" />
        </label>
        <label className='informationsLabel' htmlFor="LastName">
            <h4><span>*</span>إسم العائلة</h4>
            <input id='LastName' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder='إسم العائلة' type="text" />
        </label>
    </div>
    <div className='theRemainingInformations'>
        <label className='theRemainingInformationsLabel' htmlFor="email">
            <h4><span>*</span>البريد الاكتروني</h4>
            <input id='email' autoComplete='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='البريد الاكتروني' type="email" />
        </label>
        <label className='theRemainingInformationsLabel' htmlFor="phonenumber">
            <h4><span>*</span>رقم الهاتف</h4>
            <input id='phonenumber' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='رقم الهاتف' type="number" />
        </label>
        <label className='theRemainingInformationsLabel' htmlFor="city">
            <h4><span>*</span>المدينة</h4>
            <input id='city' value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder='المدينة' type="text" />
        </label>
        <label className='theRemainingInformationsLabel' htmlFor="street">
            <h4><span>*</span>اسم/رقم الشارع</h4>
            <input id='street' value={street} onChange={(e)=>{setStreet(e.target.value)}} placeholder='اسم/رقم الشارع' type="text" />
        </label>
        <label className='theRemainingInformationsLabel' htmlFor="house">
            <h4><span>*</span>رقم البيت</h4>
            <input id='house' value={house} onChange={(e)=>{setHouse(e.target.value)}} placeholder='رقم البيت' type="number" />
        </label>
        <label className='theRemainingInformationsLabel' htmlFor="takeAwayOrShipping">
        <h4><span>*</span>طريقة التوصيل</h4>
        <select value={takeAwayOrShipping} onChange={(e)=>{setTakeAwayOrShipping(e.target.value)}} name="takeAwayOrShipping" id="takeAwayOrShipping">
            <option value="0">إختيار</option>
            <option value="توصيل حتى المنزل">توصيل حتى المنزل</option>
            <option value="الالتقاط من المتجر">الالتقاط من المتجر</option>
        </select>
        </label>
        <button className='SendInformationsButton' onClick={informationsDone}>إرسال</button>
    </div>
</div>
  )
}
