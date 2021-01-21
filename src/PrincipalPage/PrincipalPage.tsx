import React from 'react';
import { Link } from "react-router-dom";
//Context
import { usePagination } from '../Context/PageContext';

const PrincipalPage = () => {

    const { pagination, setPagination } = usePagination();

    const addPagination=()=>{
        setPagination({
            ...pagination, 
            pageSelected:pagination.pageSelected+1
        });
    }

    return (
        <div className="PrincipalPage">
            <p>PrincipalPage</p>
            <Link to="/products/2">Go to detailed pokemon 2</Link>
            <button onClick={() => addPagination()}>ADD PAGE</button>
            <p>Pagination selected is...{pagination.pageSelected}</p>
        </div>
    )
}

export default PrincipalPage;