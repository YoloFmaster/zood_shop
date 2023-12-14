import React from "react";


const escapeFromCabinet = () =>{
    localStorage.token = "";
    window.location.reload();
}

const WindowForEscape = () => {
    return (
        <div id="Modal" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Выход</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Вы точно хотите выйти</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="submit" className="btn btn-primary" onClick={escapeFromCabinet}>Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WindowForEscape;