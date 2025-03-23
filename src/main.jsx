import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import BrowserRouter from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreContextProvider from '/FoodApp/MyFoodApp/src/context/StoreContext';
//import Header from '/FoodApp/MyFoodApp/src/components/Header/Header';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>

     <App />
     
     </StoreContextProvider>   
  </BrowserRouter>,
)
