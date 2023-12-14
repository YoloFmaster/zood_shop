import React from "react";
import AnimalInformation from "../components/animalInformation";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const PageAnimal = () => {

    let [animal, setAnimal] = useState({ data: { pet: [] } });
    useEffect(() => req_pageAnimal(animal, setAnimal), []);
    let { id } = useParams();

    function req_pageAnimal(animal, setAnimal) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };


        fetch("https://pets.сделай.site/api/pets/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setAnimal(result);
            })
            .catch(error => console.log('error', error));
    }
    let pet = animal.data.pet;

    return (
        <div>
            <Header />
            <main>
                <AnimalInformation data={pet} />
            </main>
            <Footer />
        </div>
    );
}

export default PageAnimal;