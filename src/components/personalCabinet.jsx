import React, { useEffect, useState } from "react";
import WindowForEscape from "./windowForEscape";
import Modal from "bootstrap/js/dist/modal";

function success(visible) {
    const text2 = document.getElementById(visible);
    text2.style.display = "none";
}

function error(hidden) {
    const text = document.getElementById(hidden);
    text.style.display = "block";
}

const PersonalData = (props) => {
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');



    function validate() {
        let valid = true;
        var telV = /^[\+0-9]+$/;
        var mailV = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        const telVAl = document.getElementById('phone');
        const mailVAl = document.getElementById('email');

        if (telV.test(telVAl.value) == false) {
            error("te");
            valid = false;
        }
        else {
            success("te");
        }
        if (mailV.test(mailVAl.value) == false) {
            error("em");
            valid = false;
        }
        else {
            success("em");
        }
        return valid;
    }

    const   modificatePersonData = (e) => {
        if (validate() == true) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json")
            const token = localStorage.token
            myHeaders.append("Authorization", "Bearer " + token);
            let body = JSON.stringify(email);
            var requestionOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: body,
                redirect: 'follow'
            };
            fetch("https://pets.сделай.site/api/users/email", requestionOptions)
                .then(response => response.status)
                .then(result => console.log(result))
                .then(error => console.log('error', error));

            body = JSON.stringify(phone);
            var requestionOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: body,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users/phone", requestionOptions)
                .then(response => response.status)
                .then(result => console.log(result))
                .then(error => console.log('error', error));
        }
    }
     const [myModal, setMyModal] = useState('');
    let show = true;
    const escape = () => {
        if (show) {
            myModal.show();
        }
        else {
            myModal.hide();
        }
    }
    useEffect(() => { setMyModal(new Modal(document.getElementById("Modal"))) }, []) 
    return (
        <div className="h3PC">
            <WindowForEscape/>
            <h3>Информация о пользователе</h3>
            <p className="card-text">Имя: {props.data.name}</p>
            <div className="formWidth">
                <div className="form-floating mb-3">
                    <input name="phone" type="phone" className="form-control" id="phone" placeholder="name@example.com" defaultValue={props.data.phone} onChange={(e) => setPhone({ ...phone, phone: e.target.value })} />
                    <label htmlFor="phone">Телефон: {props.data.phone}</label>
                    <div className="invalid-feedback" id="te">
                        Введите номер начинающийся с +7
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" defaultValue={props.data.email} onChange={(e) => setEmail({ ...email, email: e.target.value })} />
                    <label htmlFor="email">Email: {props.data.email}</label>
                    <div className="invalid-feedback" id="em">
                        Вы некорректно ввели email
                    </div>
                </div>
            </div>
            <p className="card-text">Дата: {props.data.registrationDate}</p>
            <p className="card-text">Сколько обьявленний добавил: {props.data.countOrder}</p>
            <p className="card-text">Сколько обьявленний добавил, у которых нашлись хозяева: {props.data.countPets}</p>
            <button type="submit" className="btn btn-primary m-2 " onClick={modificatePersonData} >Изменить данные</button>
            <button type="submit" className="btn btn-primary m-2" onClick={escape} >Выйти из кабинета</button>
        </div>
    );
}

export default PersonalData;