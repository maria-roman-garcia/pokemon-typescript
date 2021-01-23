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
        results: [{ name: string; url: string; }]
    }

    interface IpokemonDetailed {
        name: string;
        url: string;
        abilities: [ability: { name: string; url: string; }];
        base_experience: number;
        forms: [{ name: string; url: string; }];
        height: number;
        id: number;
    }

    interface IfinalResult {
        count: number;
        pokemonResults: IpokemonDetailed[]
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${20}&offset=${20 * (pagination.pageSelected - 1)}`)
            .then((response) => { return response.json() })
            .then((responseJson: IFirstFetch) => {
                const responsePromises = responseJson.results.map((e: { name: string; url: string }) => fetch(e.url).then((responsePokemon) => { return responsePokemon.json() }));
                Promise.all(responsePromises).then(valuesPromises => {
                    const toReturn: IfinalResult = {
                        count: responseJson.count,
                        pokemonResults: responseJson.results.map((e, index) => {
                            return {
                                ...e,
                                ...valuesPromises[index]
                            }
                        })
                    }
                    console.log(toReturn);
                })
            })
            .catch(error => {
                console.error(error);
            });
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