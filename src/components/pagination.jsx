import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CardOrder from "./CardOrder";





function PaginatedItems(props) {
    const items = [];
    items.push(...props.data);
    console.log(items);
    function Items({ currentItems }) {
        return (
            <>
            <p className="fs-3 text-center">{items.length > 0? "Результаты поиска":"Нет объявлений по заданому запросу"}</p>
              <div className="d-flex p-2  justify-content-around flex-wrap">
                {currentItems.map((item, index) => (
                    <div>
                        <CardOrder data={item} key={index} />
                    </div>
                ))}
                </div>
            </>
        );
    }
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 10;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 10);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="d-flex p-2  justify-content-center flex-wrap">
            <ReactPaginate
                nextLabel="Следующая"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="Прошлая"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            </div>
        </>
    );
}

export default PaginatedItems;