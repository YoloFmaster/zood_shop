import { useState } from "react";
import { useNavigate } from "react-router-dom";

let countChangeId = 0;

const QuickSearch = () => {
    let [searchItem, setSearchItem] = useState('');
    let [card, setCard] = useState({ data: { orders: [] } });
    const navigate = useNavigate();

    function req_quickSearch(query, card, setCard) {
        var requestOptions = {
            method: 'GET',
        };

        fetch(`https://pets.сделай.site/api/search?query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)
                console.log(result);
            }
            )
            .catch(error => console.log('error', error));
    }

    const search = (e) => {
        e.preventDefault();
        console.log(searchItem);
        navigate("/missingAnimals", { state: { query: searchItem } });
    }
    
    const onChange = (e) => {
        setSearchItem(e.target.value)
        if (e.target.value.length > 3) {
            if(countChangeId > 0){
                document.getElementById("noneSearch").id = "search";
                countChangeId = 0;
            }
            setTimeout(() => req_quickSearch(e.target.value, card, setCard), 1000)
        }
        else if(e.target.value.length <= 3) {
            if(countChangeId == 0){
                document.getElementById("search").id = "noneSearch";
            }
            countChangeId++;
        }
    }

    const options = new Set();
    card.data.orders.map((order) => {
        if (options.size < 5) {
            options.add(order.description);
            return <option value={order.description}></option>
        }
    }
    )
    let countOptions = []
    for (const option of options.keys()) {
        countOptions.push(<option value={option}></option>)
    }

    return (
        <form className="d-flex" role="search" onSubmit={search}>
            <input list="search" className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" value={searchItem} onChange={onChange} />
            <datalist id="search">
                {countOptions}
            </datalist>
            <button className="btn btn-outline-success" type="submit">Поиск</button>
        </form>
    );
}

export default QuickSearch;