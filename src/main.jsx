import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreContextProvider from '/FoodApp/MyFoodApp/src/context/StoreContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>

     <App />
     
     </StoreContextProvider>   
  </BrowserRouter>,
)
