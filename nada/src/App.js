import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { UsersProvider } from './userContext';
import HomePage from './pages/HomePage';
import AlternativeMen from './pages/AlternativeMen';
import AlternativeWomen from './pages/AlternativeWomen';
import KidsPerfumes from './pages/KidsPerfumes';
import UnisexPerfumes from './pages/UnisexPerfumes';
import ProductComponent from './components/ProductComponent.jsx';
import WomenFrenchPage from './pages/WomenFrenchPage.jsx';
import MenFrenchPage from './pages/MenFrench.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckOutPage from './pages/CheckOutPage.jsx';
import TurkishWomen from './pages/TurkishWomen.jsx';
import TurkishMen from './pages/TurkishMen.jsx';


function App() {
  return (
        <UsersProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/بديل رجالي' element={<AlternativeMen/>}/>
              <Route path='/بديل نسائي' element={<AlternativeWomen/>}/>
              <Route path='/بديل للجنسين' element={<UnisexPerfumes/>}/>
              <Route path='/بديل اطفال' element={<KidsPerfumes/>}/>
              <Route path='/فرنسي نسائي' element={<WomenFrenchPage/>}/>
              <Route path='/فرنسي رجالي' element={<MenFrenchPage/>}/>
              <Route path='/Perfume' element={<ProductComponent/>}/>
              <Route path='/Cart' element={<CartPage/>}/>
              <Route path='/CheckOut' element={<CheckOutPage/>}/>
              <Route path='/تركي نسائي' element={<TurkishWomen/>}/>
              <Route path='/تركي رجالي' element={<TurkishMen/>}/>


              


            </Routes>
          </BrowserRouter>
      </UsersProvider>
  );
}

export default App;
