import React from "react";
import { Link } from "react-router-dom";

const CardMain = (props) => {
    return (
        <div className="card m-2"  style={{'width': '18rem', 'minWidth': '300px'}}>
            <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top card_img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">id: {props.data.id}</p>
                <p className="card-text">Вид животного: {props.data.kind}</p>
                <p className="card-text">Описание: {props.data.description}</p>
                <p className="card-text">Номер чипа: {props.data.mark}</p>
                <p className="card-text">Район: {props.data.district}</p>
                <p className="card-text">Дата: {props.data.date}</p>
                <p className="card-text">Номер телефона: {props.data.phone}</p>
                <Link to={"/animal/" + props.data.id} className="btn btn-primary">Перейти</Link>
            </div>
        </div>
    );
}

export default CardMain;