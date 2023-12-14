import React, { useState} from "react";
import { useParams } from "react-router-dom";


const WindowForDelete = (adId) => {
    const delet = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        const token = localStorage.token
        myHeaders.append("Authorization", "Bearer " + token);
        var requestionOptions = {
            method: 'DELETE',
            headers: myHeaders,
        };
        let url ="https://pets.сделай.site/api/users/orders/" + adId.data;
        console.log(url);
        fetch(url, requestionOptions)
            .then(response => response.status)
            .then(result => console.log(result))
            .then(error => console.log('error', error));
    }
    return (
        <div id="ModalDelete" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Удаление объявления</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Вы точно хотите удалить объявление?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>                        
                        <button type="submit" className="btn btn-primary" onClick={delet}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WindowForDelete;