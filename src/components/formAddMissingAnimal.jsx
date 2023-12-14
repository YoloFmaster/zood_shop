import React, { useState } from "react";
import "../style/reStyle.css";

function success(visible) {
  const text2 = document.getElementById(visible);
  text2.style.display = "none";
}

function error(hidden) {
  const text = document.getElementById(hidden);
  text.style.display = "block";
}
const AddAnimal = () => {
  let [user, setUser] = useState('');

  function validate() {
    var valid = true;
    var nameV = /^[А-ЯЁа-яё\s-]+$/;
    var telV = /^[\+0-9]+$/;
    var mailV = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var passwordV = /^(?=.*[A-Z])(?=.*[\d])(?=.*[a-z])[a-zA-Z\d]{7,}$/;

    const phVAl = document.getElementById('ph');

    const nameVAl = document.getElementById('validationCustom01');
    const telVAl = document.getElementById('validationCustom02');
    const mailVAl = document.getElementById('validationCustom03');
    const passwordVAl = document.getElementById('validationCustom04');
    const password_conVAl = document.getElementById('validationCustom05');
    const check = document.getElementById('invalidCheck');

    if (nameV.test(nameVAl.value) == false) {
      error("na");
      valid = false;
    }
    else {
      success("na");
    }
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
    if (passwordV.test(passwordVAl.value) == false) {
      error("pa");
      valid = false;
    }
    else {
      success("pa");
    }
    if (passwordVAl.value === password_conVAl.value) {
      success("pac");
    }
    else {
      error("pac");
      valid = false;
    }
    if (check.checked == false) {
      error("ce");
      valid = false;
    }
    else {
      success("ce");
    }
    if (phVAl.value === null) {
      error("phError");
      valid = false;
    }
    else {
      success("phError");
    }
    return valid;
  }

  const addOrder = () => {
    if (validate() == true) {
      error("be");

      let formdata = new FormData(document.getElementById('AddOrder'));
      var requestOptions = {
        method: 'POST',
 
        body: formdata,
        redirect: 'follow'
      };
      fetch("https://pets.сделай.site/api/pets", requestOptions)
        .then(response => response.status)
        .then(result => console.log(result))
        .then(error => console.log('error', error));
    }
    else success("be");
  }



  return (
    <form id="AddOrder" className="d-flex justify-content-center" encType="multipart/form-data" noValidate>
      <div className="formWidth">
        <div className="row mb-3">
          <label htmlFor="validationCustom01" className="form-label">Имя</label>
          <input name="name" type="text" className="form-control" id="validationCustom01" required onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <div className="invalid-feedback" id="na">
            Введите кирилицу(Можно использовать пробел и дефис)
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="validationCustom02" className="form-label">Телефон</label>
          <input name="phone" type="tel" className="form-control" id="validationCustom02" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
          <div className="invalid-feedback" id="te">
            Введите номер начинающийся с +7
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="validationCustom03" className="form-label">Эл. почта</label>
          <input name="email" type="email" className="form-control" id="validationCustom03" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <div className="invalid-feedback" id="em">
            Вы некорректно ввели email
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputKind3" className="form-label">Вид животного </label>
          <input name="kind" type="text" className="form-control" id="inputKind3" onChange={(e) => setUser({ ...user, kind: e.target.value })} />
        </div>
        <div className="row mb-3">
          <label htmlFor="inputStar3" className="form-label">Описание</label>
          <input name="description" type="text" className="form-control" id="inputStar3" onChange={(e) => setUser({ ...user, description: e.target.value })} />
        </div>
        <div className="row mb-3">
          <label htmlFor="inputChip3" className="form-label">Номер чипа</label>
          <input name="mark" type="text" className="form-control" id="inputChip3" onChange={(e) => setUser({ ...user, mark: e.target.value })} />
        </div>
        <div className="row mb-3">
          <label htmlFor="inputAvenu3" className="form-label">Район</label>
          <input name="district" type="text" className="form-control" id="inputAvenu3" onChange={(e) => setUser({ ...user, district: e.target.value })} />
        </div>
        <div className="mb-3">
          <input name="photos1" type="file" id="ph" className="form-control" aria-label="file example" required onChange={(e) => setUser({ ...user, photos1: e.target.value })} />
          <div className="invalid-feedback">Пример обратной связи неверной формы выбора файла</div>
          <div className="invalid-feedback" id="phError">
            Вы должны прикрепить хотябы одно фото
          </div>
        </div>
        <div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input info__switch" type="checkbox" id="gridCheck2" />
                <label className="form-check-label" htmlFor="gridCheck2">
                  Если вы хотите при этом ещё и зарегистрироваться
                </label>
                <div className="row mb-3 info__body">
                  <label htmlFor="validationCustom04" className="form-label">Пароль</label>
                  <input name="password" type="password" className="form-control" id="validationCustom04" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                  <div className="invalid-feedback" id="pa">
                    Не менее 7 символов, обязательно: 1 цифра, 1 строчная, 1 заглавная буква
                  </div>
                </div>
                <div className="row mb-3 info__body">
                  <label htmlFor="validationCustom05" className="form-label">Подтверждение пароль</label>
                  <input name="password_confirmation" type="password" className="form-control" id="validationCustom05" required onChange={(e) => setUser({ ...user, password_confirmation: e.value })} />
                  <div className="invalid-feedback" id="pac">
                    Пароль не совподает с потдтверждением
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input name="confirm" className="form-check-input" type="checkbox"  id="invalidCheck" required onChange={(e) => setUser({ ...user, password_confirmation: e.value })} />
              <label className="form-check-label" htmlFor="invalidCheck">
                Согласие на обработку персональный данных
              </label>
            </div>
          </div>
          <div className="invalid-feedback m-4" id="ce" >
            Надо нажать на квадратик
          </div>
        </div>
        <p onClick={addOrder} className="btn btn-primary">Добавить</p>
        <p className="valid-feedback m-4" id="be">Вы успешно добавили животное</p>
      </div>
    </form>
  );
}

export default AddAnimal;