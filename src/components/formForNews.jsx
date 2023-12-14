import React, { useState } from "react";

const FormForNews = () => {
  function informSubscriptionStatusToUser(visible, hidden) {
    const text = document.getElementById(visible);
    text.style.display = "block";
    const text2 = document.getElementById(hidden);
    text2.style.display = "none";
  }


  let [mail, setMail] = useState('');

  function validate(form_id, type) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[type].value;
    debugger;
    if (reg.test(address) == false) {
      informSubscriptionStatusToUser("faultyEmail", "successfulEmail");
      return false;
    }
    else {
      informSubscriptionStatusToUser("successfulEmail", "faultyEmail");
      return true;
    }
  }

  const subscription = (e) => {
    e.preventDefault();
    if (validate("subscription", "email") == true) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json")
      let body = JSON.stringify(mail);
      var requestionOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
      };
      fetch("https://pets.сделай.site/api/subscription", requestionOptions)
        .then(response => response.status)
        .then(result => console.log(result))
        .then(error => console.log('error', error));
    }
  }


  return (
    <div>
      <form className="d-flex justify-content-center" id="subscription" onSubmit={subscription} noValidate>
        <div className="formWidth">
          <h2>Введите свой email, чтобы получать новости</h2>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Эл. почта</label>
            <div className="col-sm-10">
              <input name="email" type="email" className="form-control" id="inputEmail3" onChange={(e) => setMail({ ...mail, email: e.target.value })} />
              <div className="invalid-feedback" id="faultyEmail">
                Вы некорректно ввели email
              </div>
              <div className="valid-feedback" id="successfulEmail">
                Вы успешно зарегистрировались
              </div>
            </div>
          </div>
          <button className="btn btn-primary ">Подписаться</button>
        </div>
      </form>
    </div>
  );
};

export default FormForNews;