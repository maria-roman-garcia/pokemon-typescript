import React from 'react';
import { Link } from "react-router-dom";

const PrincipalPage=()=>{
    return(
        <div className="PrincipalPage">
            <p>PrincipalPage</p>
            <Link to="/products/2">Ir a detailed pokemon 2</Link>
        </div>
    )
}

export default PrincipalPage;