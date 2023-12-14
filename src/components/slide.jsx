import React from "react";


const Slide = (props) => {
    return (
        <div className={props.css_class}>
            <div className="card m-2 " style={{ 'width': '18rem', 'minWidth': '300px' }}>
                <img src={'https://pets.сделай.site' + props.data.image} className="card-img-top" alt="..." />
                <div className="card-body" style={{ 'backgroundColor': 'rgb(112, 112, 112, 0.33)' }}>
                    <p className="card-text">id: {props.data.id}</p>
                    <p className="card-text">Вид животного: {props.data.kind}</p>
                    <p className="card-text">Описание: {props.data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Slide;


