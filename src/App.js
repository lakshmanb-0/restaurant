import './App.css';
import Category from './Components/Category';
import CustomerReview from './Components/CustomerReview';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MenuDetails from './Components/MenuDetails';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MenuCardPage from './Pages/MenuCardPage';
import Catalog from './Pages/Catalog';
import Item from './Pages/Item';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import { Context } from './State/Context';
import Delivery from './Pages/Delivery';
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <Context>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route path='/' element={
            <main>
              <Navbar />
              <Header />
              <Category number="5" />
              <MenuDetails />
              <CustomerReview />
              <Footer />
            </main>} />
          <Route path='/catalogy' element={
            <Catalog />
          } />
          <Route path='/aboutus' element={
            <AboutUs />
          } />
          <Route path='/card' element={
            <MenuCardPage />
          } />
          <Route path='/cart' element={
            <Cart />
          } />

          <Route path='/item' element={
            <Item />
          } />
          <Route path='/delievery' element={
            <Delivery />
          } />
        </Routes>
      </BrowserRouter>
    </Context>

  );
}

export default App;
