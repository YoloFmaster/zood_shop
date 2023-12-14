import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FormForRegistartion from "../components/registration";

const Registration = () => {
    return ( 
        <>
            <Header/>
                <main>
                    <FormForRegistartion/>
                </main>
            <Footer/>
        </>
     );
}
 
export default Registration;