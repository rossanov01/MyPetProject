import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contacts } from './pages/Contacts/Contacts';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { CoffeePrice } from './pages/CoffeePrice/CoffeePrice';
import store from './Redux/store';
import { fetchData, loadData } from './Redux/coffee/coffeeSlice';
import { CakesPrice } from './pages/CakesPrice/CakesPrice';
import { Comments } from './pages/Comments/Comments';



export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <Provider store={store}>
      <Router>
        <div className={`app`}>
          <div className={`main`}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path='/coffeePrice' element={<CoffeePrice />} />
              <Route path='/cakesPrice' element={<CakesPrice />} />
              <Route path='/comments' element={<Comments />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}
