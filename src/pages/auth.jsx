import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FormForAuth from "../components/formForAurh";

const Auth = () => {
    return (  
        <>
        <Header/>
        <main>
            <FormForAuth/>
        </main>
        <Footer/>
        </>
    );
}
 
export default Auth;