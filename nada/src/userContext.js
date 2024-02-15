import {createContext, useState} from 'react'
import img1  from './MENIMAGES/1.jpg'  
import img2  from './MENIMAGES/2.jpg'  
import img3  from './MENIMAGES/3.jpg'  
import img4  from './MENIMAGES/4.jpg'  
import img5  from './MENIMAGES/5.jpg'  
import img6  from './MENIMAGES/6.jpg'  
import img7  from './MENIMAGES/7.jpg'  
import img8  from './MENIMAGES/8.jpg'  
import img9  from './MENIMAGES/9.jpg'  
import img10 from './MENIMAGES/10.jpg'
import img11 from './MENIMAGES/11.jpg' 
import img12 from './MENIMAGES/12.jpg' 
import img13 from './MENIMAGES/13.jpg' 
import img14 from './MENIMAGES/14.jpg' 
import img15 from './MENIMAGES/15.jpg' 
import img16 from './MENIMAGES/16.jpg' 
import img17 from './MENIMAGES/17.jpg' 
import img18 from './MENIMAGES/18.jpg' 
import img19 from './MENIMAGES/19.jpg' 
import img20 from './MENIMAGES/20.1.jpg'
import img21 from './MENIMAGES/21.1.jpg'
import img22 from './MENIMAGES/22.1.jpg'
import img23 from './MENIMAGES/23.1.jpg'
import img24 from './MENIMAGES/24.1.jpg'
import img25 from './MENIMAGES/25.1.jpg'
import img26 from './MENIMAGES/26.1.jpg'
import img27 from './MENIMAGES/27.1.jpg'
import img28 from './MENIMAGES/28.1.jpg'
import img29 from './MENIMAGES/29.1.jpg'
import img30 from './MENIMAGES/30.1.jpg'
import img31 from './MENIMAGES/31.1.jpg'
import img32 from './MENIMAGES/32.1.jpg'
import img33 from './MENIMAGES/33.1.jpg'
import img34 from './MENIMAGES/34.1.jpg'
import img35 from './MENIMAGES/35.1.jpg'
import img36 from './MENIMAGES/36.1.jpg'
import img37 from './MENIMAGES/37.1.jpg'
import img38 from './MENIMAGES/38.1.jpg'
import img39 from './MENIMAGES/39.1.jpg'
import img40 from './MENIMAGES/40.1.jpg'
import img41 from './MENIMAGES/41.1.jpg'

import womanimg1   from './WomenImages/1.jpg'   
import womanimg2   from './WomenImages/2.jpg'   
import womanimg3   from './WomenImages/3.jpg'   
import womanimg4   from './WomenImages/4.jpg'   
import womanimg5   from './WomenImages/5.jpg'   
import womanimg6   from './WomenImages/6.jpg'   
import womanimg7   from './WomenImages/7.jpg'   
import womanimg8   from './WomenImages/8.jpg'   
import womanimg9   from './WomenImages/9.jpg'   
import womanimg10  from './WomenImages/10.jpg'  
import womanimg11  from './WomenImages/11.jpg'  
import womanimg12  from './WomenImages/12.jpg'  
import womanimg13  from './WomenImages/13.jpg'  
import womanimg14  from './WomenImages/14.jpg'  
import womanimg15  from './WomenImages/15.jpg'  
import womanimg16  from './WomenImages/16.jpg'  
import womanimg17  from './WomenImages/17.jpg'  
import womanimg18  from './WomenImages/18.jpg'  
import womanimg19  from './WomenImages/19.jpg'  
import womanimg20  from './WomenImages/20.1.jpg'
import womanimg21  from './WomenImages/21.1.jpg'
import womanimg22  from './WomenImages/22.1.jpg'
import womanimg23  from './WomenImages/23.1.jpg'
import womanimg24  from './WomenImages/24.1.jpg'
import womanimg25  from './WomenImages/25.1.jpg'
import womanimg26  from './WomenImages/26.1.jpg'
import womanimg27  from './WomenImages/29.1.jpg'
import womanimg28  from './WomenImages/30.1.jpg'
import womanimg29  from './WomenImages/31.1.jpg'
import womanimg30  from './WomenImages/32.1.jpg'
import womanimg31  from './WomenImages/33.1.jpg'
import womanimg32  from './WomenImages/34.1.jpg'
import womanimg33  from './WomenImages/35.1.jpg'
import womanimg34  from './WomenImages/36.1.jpg'
import womanimg35  from './WomenImages/37.1.jpg'
import womanimg36  from './WomenImages/38.1.jpg'
import womanimg37  from './WomenImages/39.1.jpg'
import womanimg38  from './WomenImages/40.1.jpg'
import womanimg39  from './WomenImages/41.1.jpg'
import womanimg40  from './WomenImages/42.1.jpg'
import womanimg41  from './WomenImages/43.1.jpg'
import womanimg42 from './WomenImages/44.1.jpg'
import womanimg43 from './WomenImages/45.1.jpg'
import womanimg44 from './WomenImages/46.1.jpg'
import womanimg45 from './WomenImages/47.1.jpg'
import womanimg46 from './WomenImages/48.1.jpg'
import womanimg47 from './WomenImages/49.1.jpg'
import womanimg48 from './WomenImages/50.1.jpg'
import womanimg49 from './WomenImages/51.1.jpg'
import womanimg50 from './WomenImages/52.1.jpg'
import womanimg51 from './WomenImages/53.1.jpg'

import kidsimg0 from './kidsImages/1.jpg'
import kidsimg1 from './kidsImages/2.jpg'
import kidsimg2 from './kidsImages/3.jpg'
import kidsimg3 from './kidsImages/4.jpg'
import kidsimg4 from './kidsImages/5.jpg'
import kidsimg5 from './kidsImages/6.jpg'
import kidsimg6 from './kidsImages/7.jpg'

import  uniseximg0 from './unisexImages/1.jpg' 
import  uniseximg1 from './unisexImages/2.jpg' 
import  uniseximg2 from './unisexImages/3.jpg' 
import  uniseximg3 from './unisexImages/4.jpg' 
import  uniseximg4 from './unisexImages/5.jpg' 
import  uniseximg5 from './unisexImages/6.jpg' 
import  uniseximg6 from './unisexImages/7.jpg' 
import  uniseximg7 from './unisexImages/8.jpg' 
import  uniseximg8 from './unisexImages/9.jpg' 
import  uniseximg9 from './unisexImages/10.jpg'
import  uniseximg10 from './unisexImages/11.jpg'
import  uniseximg11 from './unisexImages/12.jpg'
import  uniseximg12 from './unisexImages/13.jpg'

import men from './images/men.svg'
import women from './images/women.svg'
import unisex from './images/unisex.png'
import qatrElnada from './images/qatrelnada.svg'

import lavieestbelle from './frenchWomen/lancome la vie est belle.jpeg'
import mademoselle from './frenchWomen/mademoselle.jpeg'
import scandal from './frenchWomen/scandal.jpeg'
import euphoria from './frenchWomen/euphoria.jpeg'
import versace from './frenchWomen/versace.webp'
import jadore from './frenchWomen/jadore.webp'
import goodgirl from './frenchWomen/goodgirl.jpeg'

import bluedechanel   from './frenchmen/bluedechanel.webp'
import creed          from './frenchmen/creedaventus.webp'
import lacoste        from './frenchmen/LACOSTEBLANCEDP.webp'
import onemillione    from './frenchmen/onemillion.jpeg'
import sauvage        from './frenchmen/sauvagedior.webp'
import silver         from './frenchmen/silverscent.jpeg'


const userContext = createContext();

export const UsersProvider = ({children})=>
{
    const[showMenu,setShowMenu] = useState('none') 
    const[flag,setFlag] = useState(false)
    const[PerfumeIndex,setPerfumeIndex] = useState(0);
    const[ListName,setListName] = useState('menList')
    const [finalPrice,setFinalPrice] = useState(0);
    const[takeAwayOrShipping,setTakeAwayOrShipping] = useState('');
    const[orderNumber,setOrderNumber] = useState('')


    const[firstName,setFirstName    ] = useState('');
    const[lastName,setLastName      ] = useState('');
    const[email,setEmail            ] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[city,setCity              ] = useState('');
    const[street,setStreet          ] = useState('');
    const[house,setHouse            ] = useState('');


    let menList = [
        {price:100, womenImg : men, image : img2  , replace : 'M623', real:'PACO RABANNE INVICTUS VICTORY'},
        {price:100, womenImg : men, image : img10 , replace : 'M247', real:'DOLCE & GABBANA K BY'},
        {price:100, womenImg : men, image : img13 , replace : 'M59', real:'GIORGIO ARMANI ARMANI'},
        {price:100, womenImg : men, image : img14 , replace : 'M73', real:'GUCCI POUR HOMME GUCCI BY GUCCI'},
        {price:100, womenImg : men, image : img18 , replace : 'M267', real:'EMPORIO ARMANI STROONGER WITH YOU'},
        {price:100, womenImg : men, image : img20 , replace : 'M75', real:'VERSACE EROS'},
        {price:100, womenImg : men, image : img22 , replace : 'M25', real:'CAROLINA HERRERA 212 SEXY'},
        {price:100, womenImg : men, image : img23 , replace : 'M243', real:'CAROLINA HERRERA BADBOY'},
        {price:100, womenImg : men, image : img24 , replace : 'M17', real:'CHANEL ALLURE HOMME SPORT'},
        {price:100, womenImg : men, image : img25 , replace : 'M19', real:'CHANEL BLUE'},
        {price:100, womenImg : men, image : img27 , replace : 'M159', real:'CHRISTIAN DIOR SAUVAGE'},
        {price:100, womenImg : men, image : img28 , replace : 'M131', real:'CREED AVENTUS'},
        {price:100, womenImg : men, image : img40 , replace : 'M10.013', real:'INVICTUS VANILLA'},
        {price:100, womenImg : men, image : img41 , replace : 'M111', real:'LACOSTE EAU DE L.12.12 WHITE'},
        {price:100, womenImg : men, image : img32 , replace : 'M91', real:'PACO RABANNE ONE MILLION'},
        {price:100, womenImg : men, image : img29 , replace : 'M285', real:'CREED AVENTUS COLOGNE'},
        {price:100, womenImg : men, image : img38 , replace : 'M141', real:'BALIDASARANI AMRRE OUD'},
    ]
    const menSecondList = [
        {price:100, womenImg : men, image : img1  , replace : 'M621', real:'HERMES TERRE D\'HERMES H24'},
        {price:100, womenImg : men, image : img3  , replace : 'M103', real:'JEAN PAUL GAULTIER LE MALE'},
        {price:100, womenImg : men, image : img4  , replace : 'M33', real:'CHRISTIAN DIOR FAHRENHEIT ABSOLUTE'},
        {price:100, womenImg : men, image : img5  , replace : 'M629', real:'CHRISTIAN DIOR SAUVAGE ELIXIR'},
        {price:100, womenImg : men, image : img6  , replace : 'M631', real:'CAROLIN HERERA 212 HEROES'},
        {price:100, womenImg : men, image : img7  , replace : 'M635', real:'ROJA DOVE OLIGARCH'},
        {price:100, womenImg : men, image : img8  , replace : 'M35', real:'CHRISTIAN DIOR DIOR HOMME'},
        {price:100, womenImg : men, image : img9  , replace : 'M27', real:'CAROLINA HERRERA 212'},
        {price:100, womenImg : men, image : img11 , replace : 'M627', real:'PACO RABANNE PHANTOM'},
        {price:100, womenImg : men, image : img12 , replace : 'M179', real:'BULGARI LE GEMME TYGAR'},
        {price:100, womenImg : men, image : img15 , replace : 'M85', real:'HUGO BOSS BALDESSARIN IAMBE'},
        {price:100, womenImg : men, image : img16 , replace : 'M71', real:'GUCCI GUILTY INTENS POUR HOMME'},
        {price:100, womenImg : men, image : img17 , replace : 'M291', real:'HUGO BOSS BOSS BOTTLE INTENS'},
        {price:100, womenImg : men, image : img19 , replace : 'M87', real:'HUGO BOSS'},
        {price:100, womenImg : men, image : img21 , replace : 'M05', real:'ANTONIO BANDERS BLE SEDUCTION'},
        {price:100, womenImg : men, image : img26 , replace : 'M21', real:'CHANEL EGOIST E PLATINUM'},
        {price:100, womenImg : men, image : img30 , replace : 'M57', real:'GIORGIO ARMANI AQUA DI GIO'},
        {price:100, womenImg : men, image : img31 , replace : 'M125', real:'HERMES TERRE DHERMES'},
        {price:100, womenImg : men, image : img33 , replace : 'M95', real:'PACO RABANNI INVICTUS'},
        {price:100, womenImg : men, image : img34 , replace : 'M177', real:'SHAIK CHIC NO 70 SHAIK'},
        {price:100, womenImg : men, image : img35 , replace : 'M295', real:'TOM FORD NOIR EXTREME'},
        {price:100, womenImg : men, image : img36 , replace : 'M77', real:'VERSACE MAN EAU FRAICHE'},
        {price:100, womenImg : men, image : img37 , replace : 'M23', real:'CAROLINA HERRERA 212 VIP'},
        {price:100, womenImg : men, image : img39 , replace : 'M255', real:'YVES LAURENTY'},
    ]

    let womenList = [
        {price: 100, womenImg : women, image : womanimg1  , replace : 'W234', real:'CAROLIN HERERA GOOD GIRL GONE BAD'},
        {price: 100, womenImg : women, image : womanimg4  , replace : 'W88', real:'GIORGIO ARMANI SI'},
        {price: 100, womenImg : women, image : womanimg5  , replace : 'W32', real:'CHANEL COCO MADEMOISELLE'},
        {price: 100, womenImg : women, image : womanimg6  , replace : 'W136', real:'CHRISTIAN DIOR HYPNOTIC PAISON'},
        {price: 100, womenImg : women, image : womanimg7  , replace : 'W282', real:'DOLCE & GABBANA THE ONLY ONE'},
        {price: 100, womenImg : women, image : womanimg10 , replace : 'W250', real:'JEAN PAUL SCANDAL'},
        {price: 100, womenImg : women, image : womanimg11 , replace : 'W300', real:'LANCOM IDOLE'},
        {price: 100, womenImg : women, image : womanimg12 , replace : 'W134', real:'LANCOM LA VIE EST BELLE'},
        {price: 100, womenImg : women, image : womanimg14 , replace : 'W202', real:'VICTORIAS SECRET BOMBSHELL'},
        {price: 100, womenImg : women, image : womanimg15 , replace : 'W148', real:'PACO RABANNE LADY MILLION'},
        {price: 100, womenImg : women, image : womanimg16 , replace : 'W6', real:'PACO RABANNE OLYMPEA'},
        {price: 100, womenImg : women, image : womanimg17 , replace : 'W154', real:'VERSACE BRIGHT CRYSTAL'},
        {price: 100, womenImg : women, image : womanimg19 , replace : 'W246', real:'YVES SAINT LAURENT BLACK OPIUM'},
        {price: 100, womenImg : women, image : womanimg22 , replace : 'W200', real:'SOSPIRO ACCENTO PERFUMES'},
        {price: 100, womenImg : women, image : womanimg23 , replace : 'W364', real:'LANCOME TRESOR LA NUIT'},
        {price: 100, womenImg : women, image : womanimg25 , replace : 'W322', real:'GIORGI ARMANI MY WAY'},
        {price: 100, womenImg : women, image : womanimg26 , replace : 'W390', real:'YVES SIANT LAURENT MON PARIS EAU DE PARFUM'},
        {price: 100, womenImg : women, image : womanimg27 , replace : 'W304', real:'VICTORIAS SECRET NOIR TEASE'},
        {price: 100, womenImg : women, image : womanimg28 , replace : 'W326', real:'CHRISTIAN DIOR JOY BY DIOR'},
        {price: 100, womenImg : women, image : womanimg30 , replace : 'W54', real:'CHRISTIAN DIOR J\'ADORE'},
        {price: 100, womenImg : women, image : womanimg31 , replace : 'W128', real:'LANCOME TRESOR MIDNIGHT ROSE'},
        {price: 100, womenImg : women, image : womanimg32 , replace : 'W242', real:'THIERRY MUGLER ALINE'},
        {price: 100, womenImg : women, image : womanimg33 , replace : 'W252', real:'CHRISTIAN DIOR MISS DIOR'},
        {price: 100, womenImg : women, image : womanimg3  , replace : 'W40', real:'CHANEL CHANC EAU TENDRE'},
        {price: 100, womenImg : women, image : womanimg35 , replace : 'W232', real:'GUCCI RUSH GUSSI'},
        {price: 100, womenImg : women, image : womanimg36 , replace : 'W186', real:'NARCISO RODRIQUEZ'},
        {price: 100, womenImg : women, image : womanimg37 , replace : 'W56', real:'CALVIN KLEIN EUPHORIA'},
        {price: 100, womenImg : women, image : womanimg41 , replace : 'W238', real:'HUGO BOSS THE SCENT'},
        {price: 100, womenImg : women, image : womanimg50 , replace : 'W294', real:'JEAN PAUL SCANDAL BY NIGHT'},
    ]

    const womanSecondList = [
        {price: 100, womenImg : women, image : womanimg2  , replace : 'W42', real:'CHANEL CHANC EAU FRAICHE'},
        {price: 100, womenImg : women, image : womanimg8  , replace : 'W84', real:'GIORGIO ARMANI ACQUA DI GIOIA'},
        {price: 100, womenImg : women, image : womanimg9  , replace : 'W398', real:'HUGU BOSS BOSS ALIVE'},
        {price: 100, womenImg : women, image : womanimg13 , replace : 'W180', real:'PACO RABANNE OLYMPEA INTESE'},
        {price: 100, womenImg : women, image : womanimg18 , replace : 'W10.012', real:'SWEET SHAIK'},
        {price: 100, womenImg : women, image : womanimg20 , replace : 'W176', real:'YVES SAINT LAURENT ELLE'},
        {price: 100, womenImg : women, image : womanimg21 , replace : 'W92', real:'GIVENCHY ANGE OU DEMON LE SECRET'},
        {price: 100, womenImg : women, image : womanimg24 , replace : 'W66', real:'D&GABBANA ANTHOLOGY L\'IMOERATRICE 3'},
        {price: 100, womenImg : women, image : womanimg29 , replace : 'W22', real:'CHLOE EAU DE PERFUME'},
        {price: 100, womenImg : women, image : womanimg34 , replace : 'W24', real:'CAROLINA HERRERA 212 SEXY'},
        {price: 100, womenImg : women, image : womanimg38 , replace : 'W64', real:'DOLCE & GABBANA LILGHT BLUE'},
        {price: 100, womenImg : women, image : womanimg39 , replace : 'W126', real:'LANCOME HYPNOSE'},
        {price: 100, womenImg : women, image : womanimg40 , replace : 'W204', real:'MONTALE VANILLE ABSOLUT'},
        {price: 100, womenImg : women, image : womanimg42 , replace : 'W66', real:'D & GABBANA ANTHOLOGY'},
        {price: 100, womenImg : women, image : womanimg43 , replace : 'W460', real:'JEAN PAUL SCANDAL LE PARFUM'},
        {price: 100, womenImg : women, image : womanimg44 , replace : 'W182', real:'RIHANNA REB\'L FLUER'},
        {price: 100, womenImg : women, image : womanimg45 , replace : 'W02', real:'PRADA CANDY'},
        {price: 100, womenImg : women, image : womanimg46 , replace : 'W70', real:'DOLCE & GABBANA THE ONE'},
        {price: 100, womenImg : women, image : womanimg47 , replace : 'W332', real:'D & GABBANA SEXY CHOCLATE'},
        {price: 100, womenImg : women, image : womanimg48 , replace : 'W402', real:'LACOSTE L.12.12 POUR ELLE MAGNETIC'},
        {price: 100, womenImg : women, image : womanimg49 , replace : 'W454', real:'ELIE SAAB LE PARFUM'},
        {price: 100, womenImg : women, image : womanimg51 , replace : 'W168', real:'NINA RICCI PRIMIER JOUR'},
    ]

    let unisexList = [
        {price : 100, womenImg : unisex, image : uniseximg7 , replace : 'MW173', real:'SOSPIRO ERBA PURE'},
        {price : 100, womenImg : unisex, image : uniseximg4 , replace : 'MW167', real:'MAISON FRANCIS KURKDDAN BACCARAT ROUAGE 540'},
        // {price : 100, womenImg : unisex, image : uniseximg0 , replace : 'MW461', real:'BY KILIAN AMBER OUD'},
        // {price : 100, womenImg : unisex, image : uniseximg1 , replace : 'MW165', real:'EX NIHILO FLUER NARCOTIQUE'},
        // {price : 100, womenImg : unisex, image : uniseximg2 , replace : 'MW303', real:'M.F KURDUAN BACCARAT ROUAGE 540 EXTRAIT DE PARFUM'},
        // {price : 100, womenImg : unisex, image : uniseximg3 , replace : 'MW236', real:'NASOMATTO BLACK AFGANO'},
        // {price : 100, womenImg : unisex, image : uniseximg5 , replace : 'MW216', real:'MONTALE CHOCOLATE GREEDY'},
        // {price : 100, womenImg : unisex, image : uniseximg6 , replace : 'MW225', real:'MONTALE KABUL OUD'},
        // {price : 100, womenImg : unisex, image : uniseximg8 , replace : 'MW203', real:'TIZIAN TERENZ KIRKE'},
        // {price : 100, womenImg : unisex, image : uniseximg9  , replace : 'MW89', real:'TOM FORD BLACK ORCHID'},
        // {price : 100, womenImg : unisex, image : uniseximg10 , replace : 'MW531', real:'THOMAS KOSMALA NO 4 APRES L\'AMOUR'},
        // {price : 100, womenImg : unisex, image : uniseximg11 , replace : 'MW379', real:'TOM FORD BITTER BEACH'},
        // {price : 100, womenImg : unisex, image : uniseximg12 , replace : 'MW197', real:'TOM FORD TOBACCO VANILLE'},
    ]

    let kidsList = [
        {price : 80,image : kidsimg0 , womenImg : qatrElnada, replace : 'FOR BOYS  ', real:'CAPTAIN AVENGERS'},
        {price : 80,image : kidsimg1 , womenImg : qatrElnada, replace : 'FOR BOYS  ', real:'JACK SAVIOR'},
        {price : 80,image : kidsimg2 , womenImg : qatrElnada, replace : 'FOR BOYS  ', real:'STRONG PRINCE'},
        {price : 80,image : kidsimg3 , womenImg : qatrElnada, replace : 'FOR GIRLS  ', real:'BANEERJEE & MASA'},
        {price : 80,image : kidsimg4 , womenImg : qatrElnada, replace : 'FOR GIRLS  ', real:'BEAUTIFULL ANNA'},
        {price : 80,image : kidsimg5 , womenImg : qatrElnada, replace : 'FOR GIRLS  ', real:'BEAUTIFULL ANNA'},
        {price : 80,image : kidsimg6 , womenImg : qatrElnada, replace : 'FOR GIRLS  ', real:'SWEET ELENA'},
    ]

    const womenFrench = [
        {price: 400, womenImg : qatrElnada, image : scandal , real:'scandal jean paul gaultier'},
        {price: 650, womenImg : qatrElnada, image : mademoselle , real:'coco mademoiselle chanel paris'},
        {price: 380, womenImg : qatrElnada, image : lavieestbelle , real:'la vie est belle lancome'},
        {price: 350, womenImg : qatrElnada, image : euphoria , real:'calvin klein euphoria'},
        {price: 250, womenImg : qatrElnada, image : versace , real:'versace bright crystal'},
        {price: 530, womenImg : qatrElnada, image : jadore , real:'j\'adore dior'},
        {price: 350, womenImg : qatrElnada, image : goodgirl , real:'good girl carolina herrera new york'},
    ]

    const menFrench = [
        {price: 530, womenImg : qatrElnada, image : bluedechanel  , real:'bleu de chanel eau de parfum'},
        {price: 850, womenImg : qatrElnada, image : creed         , real:'creed aventus'},
        {price: 220, womenImg : qatrElnada, image : lacoste       , real:'lacoste perfume blanc'},
        {price: 280, womenImg : qatrElnada, image : onemillione   , real:'one million paco rabanne'},
        {price: 450, womenImg : qatrElnada, image : sauvage       , real:'sauvage perfume dior'},
        {price: 180, womenImg : qatrElnada, image : silver  , real:'jacques bogart silver scent intense paris'},
      
    ]



    return (
    <userContext.Provider value={{showMenu,setShowMenu,flag,setFlag,menList,womenList,kidsList,unisexList,
        PerfumeIndex,setPerfumeIndex,ListName,setListName,womenFrench,menFrench,finalPrice,setFinalPrice
        ,firstName,setFirstName,lastName,setLastName,email,setEmail,phoneNumber,setPhoneNumber,city,setCity,
        street,setStreet,house,setHouse,takeAwayOrShipping,setTakeAwayOrShipping,orderNumber,setOrderNumber       
        }}>
        {children}
    </userContext.Provider>
    )
}

export default userContext