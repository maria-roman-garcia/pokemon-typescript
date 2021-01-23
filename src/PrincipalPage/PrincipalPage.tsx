import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//Context
import { usePagination } from '../Context/PageContext';
//Components
import Menu from '../Menu/Menu';

const PrincipalPage = () => {

    //Context
    const { pagination, setPagination } = usePagination();

    interface IFirstFetch {
        count: number;
        results: [{name: string; url: string;}]
    }

    interface IPokemonDetailed {
        abilities: [ ability: { name: string; url: string;}];
        base_experience: number;
        forms: [{ name: string; url: string;}];
        height: number;
        id: number;
    }

    type arrayResult = {
        result: IPokemonDetailed[];
        setArrayResult: (IPokemonDetailed: IPokemonDetailed) => void;
    }

    const getPokemon = async (): Promise<void> => {
        const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${20}&offset=${20 * (pagination.pageSelected - 1)}`);
        const responseJson: IFirstFetch = await data.json();
        console.log(responseJson);
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div className="PrincipalPage">
            <Menu />
            <p>PrincipalPage</p>
            <div id="app"></div>
            <Link to="/products/2">Go to detailed pokemon 2</Link>
        </div>
    )
}

export default PrincipalPage;