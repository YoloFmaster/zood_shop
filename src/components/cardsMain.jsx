import React from "react";
import CardMain from "./cardForMain";
import { useEffect, useState } from "react";

const CardsMain = () => {
    let [card, setCard] = useState({ data: { orders: [] } });
    useEffect(() => req_CardMain(card, setCard), []);

    function req_CardMain(card, setCard) {
        var requestOptions = {
            method: 'GET',
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)
            }
            )
            .catch(error => console.log('error', error));

    }
    let cards = card.data.orders.map((pet, index) => {
        return <CardMain data={pet} key={index} />;
    }
    )
    return (
        <div className="d-flex p-2  justify-content-around flex-wrap">
            {cards}
        </div>
    );
}

export default CardsMain;