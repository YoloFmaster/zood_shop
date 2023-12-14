import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedItems from "./pagination";
import FormQuery from "./formQuery";

const CardsCatalog = () => {
    let [card, setCard] = useState({ data: { orders: [] } });
    let [kind, setKind]=useState('');
    let [district, setDistrict]=useState('');

    const location = useLocation(); 
    let query = location.state?.query;
    useEffect(() => req_catalogQuickSearch(card, setCard), [query]);
    useEffect(() => req_catalogSearch(card, setCard), [district,kind]); 

    function req_catalogQuickSearch(card, setCard) {
        var requestOptions = {
            method: 'GET',
        };

        fetch(`https://pets.сделай.site/api/search?query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)
            }
            )
            .catch(error => console.log('error', error));

    }

    function req_catalogSearch(card, setCard) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch(`https://pets.сделай.site/api/search/order?district=${district}&kind=${kind}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)
            }
            )
            .catch(error => console.log('error', error));

    } 


    let cards = card.data.orders
    return (
        <>
        <FormQuery kind={setKind} district={setDistrict}/>
        <PaginatedItems data={cards} />
        </>
    );
}

export default CardsCatalog;
