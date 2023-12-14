import React from "react";

const Load = (props) => {
    return (
        <div className='justify-content-center align-items-center' id='loader' style={props.display}>
            <h2 style={{'backgroundColor': 'rgb(fff, fff, fff)'}}>...Идет загрузка</h2>
        </div>
    );
}

export default Load;