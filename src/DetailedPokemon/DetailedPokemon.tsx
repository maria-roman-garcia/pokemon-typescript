import React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";

type TParams =  { id: string };

const DetailedPokemon=({ match }: RouteComponentProps<TParams>)=>{
    return(
        <div className="DetailedPokemon">
            <p>DetailedPokemon</p>
            <h2>This is a page for product with ID: {match.params.id} </h2>
            <Link to="/">Ir a Pagina principal</Link>
        </div>
    )
}

export default DetailedPokemon;