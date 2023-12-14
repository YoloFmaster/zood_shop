import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import CardsCatalog from "../components/cardsCatalog";
import { useLocation } from "react-router-dom";

const MissingAnimals = () => {
    const location = useLocation()
    console.log(location.state?.query);
    return (
        <div>
            <Header></Header>
            <main>
                <h2 className="h2">Пропавшие животные</h2>
                <CardsCatalog />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MissingAnimals;