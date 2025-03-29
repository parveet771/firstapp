import React, { useState } from 'react';
import './Home.css';
import Header from '/FoodApp/MyFoodApp/src/components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import FoodItem from '../../components/FoodItem/FoodItem';
import Footer from '../../components/Footer/Footer';
import AppDownload from '../../components/AppDownload/AppDownload';
import { StoreContext } from '../../context/StoreContext';


const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header/>
            <ExploreMenu category = {category} setCategory = {setCategory}/>
            <FoodDisplay category = {category} setCategory = {setCategory}/>
            <FoodItem category = {category} setCategory = {setCategory}/>
            <Footer category = {category} setCategory = {setCategory}/>
            <AppDownload category = {category} setCategory = {setCategory}/>
            {/* <StoreContext category = {category} setCategory = {setCategory}/> */}
        </div>
    );
};

export default Home;