import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory banner = 'https://img.freepik.com/premium-psd/fashion-sale-social-media-facebook-cover-design-template_169307-1928.jpg?w=2000' category='men'/>}/>
          <Route path='/womens' element={<ShopCategory banner = 'https://ttascott.in/uploads/slider/slider02.jpg' category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner = 'https://stylehub.shoppersstop.com/wp-content/uploads/2021/08/kidsBuyingGuide.jpg' category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
