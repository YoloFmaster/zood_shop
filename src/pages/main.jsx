import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import FormForNews from "../components/formForNews";
import CardsMain from "../components/cardsMain";


const Main = () => { 
 

    return (
    
        <div>
            <Header/>
            <Slider/>
            <CardsMain/>
            <FormForNews/>
            <Footer/>            
        </div>
    );


};

export default Main;