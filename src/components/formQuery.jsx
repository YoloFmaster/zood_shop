import React from "react";
import { useState } from "react";

const FormQuery = (set) => {
    let [kind, setKind]=useState('');
    let [district, setDistrict]=useState('');

    const search = (e) => {
        e.preventDefault();
        console.log(kind);
        console.log(district);
        set.kind(kind);
        set.district(district);
    }

    return (
        <>
            <form id="form-login" className="d-flex justify-content-center" noValidate onSubmit={search}>
                <div className="formWidth">
                    <div className="row mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Район</label>
                        <input name="district" className="form-control" id="validationCustom03" onChange={(e) => setDistrict(e.target.value )} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="validationCustom04" className="form-label">Вид</label>
                        <input name="description" className="form-control" id="validationCustom04" value={kind} onChange={(e) => setKind(e.target.value )} />
                    </div>
                    <button type="submit" className="btn btn-primary">Найти</button>
                </div>
            </form >
        </>
    );
}

export default FormQuery;