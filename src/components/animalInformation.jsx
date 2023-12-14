import React from "react";



const AnimalInformation = (props) => {
    return (
        <div className="d-flex p-2  justify-content-around flex-wrap">
            <img src={'https://pets.сделай.site' + props.data.photos1} className="card-img-top" alt="..." style={{'maxWidth': '666px', 'maxHeight': '444px'}} />
            <div className="card-body m-4">
                <p className="card-text">id: 5</p>
                <p className="card-text">Вид животного: {props.data.kind}</p>
                <p className="card-text">Описание: {props.data.description}</p>
                <p className="card-text">Номер чипа: {props.data.mark}</p>
                <p className="card-text">Район: {props.data.district}</p>
                <p className="card-text">Дата: {props.data.date}</p>
                <p className="card-text">Номер телефона: {props.data.phone}</p>
            </div>
        </div>
    );
}

export default AnimalInformation;