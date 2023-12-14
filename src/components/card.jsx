import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import WindowForDelete from "./windowForDelete";


const Card = (props) => {


  const dataModification = (id) => {
    var myHeaders = new Headers();
    const token = localStorage.token
    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData(document.getElementById("mod" + String(id)));
    var requestionOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://pets.сделай.site/api/pets/" + String(id), requestionOptions)
      .then(response => response.status)
      .then(result => console.log(result))
      .then(error => console.log('error', error));
  }

  const [myModal, setMyModal] = useState('');
  let show = true;
  const delet = () => {
    props.set(props.data.id);
    if (show) {
      myModal.show();
    }
    else {
      myModal.hide();
    }
  }
  useEffect(() => { setMyModal(new Modal(document.getElementById("ModalDelete"))) }, [])

  return (
    <div className="card m-2" style={{ 'width': '18rem', 'minWidth': '300px' }}>
      <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top card_img" alt="..." />
      <div className="card-body">
        <p className="card-text">id: {props.data.id}</p>
        <form id={"mod" + String(props.data.id)}>
          <div className="form-floating mb-3">
            <input name="kind" type="text" className="form-control" id="kind" placeholder="name@example.com" defaultValue={props.data.kind} />
            <label htmlFor="kind">Вид животного: {props.data.kind}</label>
          </div>
          <div className="form-floating mb-3">
            <input name="description" type="text" className="form-control" id="description" placeholder="name@example.com" defaultValue={props.data.description} />
            <label htmlFor="description">Описание: {props.data.description}</label>
          </div>
          <div className="form-floating mb-3">
            <input name="mark" type="text" className="form-control" id="mark" placeholder="name@example.com" defaultValue={props.data.mark} />
            <label htmlFor="mark">Номер чипа: {props.data.mark}</label>
          </div>
          <div className="mb-3">
            <input name="photos1" type="file" className="form-control" aria-label="file example" required />
            <div className="invalid-feedback">Пример обратной связи неверной формы выбора файла</div>
          </div>
        </form>
        <p className="card-text">Район: {props.data.district}</p>
        <p className="card-text">Дата: {props.data.date}</p>
        <p className="card-text">Номер телефона: {props.data.phone}</p>
        <Link to={"/animal/" + props.data.id} className="btn btn-primary">Перейти</Link>
        {(props.data.status == "onModeration" || props.data.status == "archive") && <button className="btn btn-primary m-2" onClick={() => dataModification(props.data.id)}>Изменить данные</button>}
        {(props.data.status == "onModeration" || props.data.status == "archive") &&<button className="btn btn-primary m-1" onClick={delet}>Удалить объявление</button>}
      </div>
    </div>
  );
}

export default Card;