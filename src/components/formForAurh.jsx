import React, { useState } from "react";

function success(visible) {
  const text2 = document.getElementById(visible);
  text2.style.display = "none";
}

function error(hidden) {
  const text = document.getElementById(hidden);
  text.style.display = "block";
}

const FormForAuth = () => {
  let [user, setUser] = useState('');

  function validate() {

    var valid = true;

    var mailV = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const mailVAl = document.getElementById('validationCustom03');
    const passVAl = document.getElementById('validationCustom04');


    if(passVAl.value === ""){
      error("pa");
      valid = false;
    }
    else {
      success("pa");
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

  const login = () => {
    if(validate() ==true){
      error("be");
      let formdata = new FormData(document.getElementById('form-login'))
      var requestionOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      }
      fetch("https://pets.сделай.site/api/login", requestionOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          localStorage.token = result.data.token
        })
        .then(error => console.log('error', error));
    }
    else success("be");
  }


  return (
    <>
      <form id="form-login" className="d-flex justify-content-center" noValidate>
      <div className="formWidth"> 
        <div className="row mb-3">
          <label htmlFor="validationCustom03" className="form-label">Эл. почта</label>
          <input name="email" type="email" className="form-control" id="validationCustom03" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <div className="invalid-feedback" id="em">
            Вы некорректно ввели email
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="validationCustom04" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="validationCustom04" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <div className="invalid-feedback" id="pa">
            Введите пароль
          </div>
        </div>
        <p className="btn btn-primary" onClick={login}>Войти</p>
        <p className="valid-feedback m-4" id="be">Вы успешно зарегистрировались</p>
        </div>
      </form >
    </>
  );
}

export default FormForAuth;