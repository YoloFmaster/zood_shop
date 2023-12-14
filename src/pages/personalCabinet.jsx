import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import Footer from "../components/footer";
import PersonalData from "../components/personalCabinet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WindowForDelete from "../components/windowForDelete";


const PersonalCabinet = () => {
    const navigate = useNavigate();


    let [dataP, setDataP] = useState({
        data: {
            id: 114,
            name: "",
            phone: "",
            email: "",
            registrationDate: "",
            countOrder: 0,
            countPets: 0
        }
    });
    let [dataO, setDataO] = useState({ data: { orders: [] } });
    useEffect(() => {
        if (localStorage.token === "") {
            navigate("/auth"); 
        }
        else req_data(dataP, setDataP, dataO, setDataO)}, []);


    function req_data(dataP, setDataP, dataO, setDataO) {
        var myHeaders = new Headers();
        const token = localStorage.token
        myHeaders.append("Authorization", "Bearer " + token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        fetch("https://pets.сделай.site/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setDataP(result)
            })
            .then(fetch("https://pets.сделай.site/api/users/orders", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setDataO(result)
                }))
            .catch(error => console.log('error', error));

    }
    let[adId, setAdId] = useState();
    let dataOrders = dataO.data.orders.map((person, index) => {
        return <Card data={person} key={index} set={setAdId}/>;
    }
    )

    
    


    return (
        <>
            <Header />
            <PersonalData data={dataP}/>
            <main>
                <WindowForDelete  data={adId}/>
                <h3 className="m-4">Карточки, которые добавил пользователь</h3>
                <div className="d-flex p-2  justify-content-around flex-wrap">
                    {dataOrders.length > 0 ? dataOrders : <p className="fs-1">У вас нет объявлений</p>}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default PersonalCabinet;