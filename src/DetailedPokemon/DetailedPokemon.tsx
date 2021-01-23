import React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
//Context
import { usePagination } from '../Context/PageContext';

type TParams =  { id: string };

const DetailedPokemon=({ match }: RouteComponentProps<TParams>)=>{

    //Context
    const { pagination, setPagination } = usePagination();

    // const container: HTMLElement | any = document.getElementById("app")

    // interface IPokemon {
    //     id: number;
    //     name: string;
    //     image: string;
    //     type: string;
    // }

    // const fetchData = (): void => {
    //     for (let i = 1; i <= pagination.pageSelected; i++) {
    //         getPokemon(i);
    //     }
    // }

    // const getPokemon = async (id: number): Promise<void> => {
    //     const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     const pokemon: any = await data.json()
    //     const pokemonType: string = pokemon.types
    //         .map((poke: any) => poke.type.name)
    //         .join(", ")

    //     const transformedPokemon = {
    //         id: pokemon.id,
    //         name: pokemon.name,
    //         image: `${pokemon.sprites.front_default}`,
    //         type: pokemonType,
    //     }
    //     showPokemon(transformedPokemon)
    // }

    // const showPokemon = (pokemon: IPokemon): void => {
    //     let output: string = `
    //       <div class="card">
    //           <span class="card--id">#${pokemon.id}</span>
    //           <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
    //           <h1 class="card--name">${pokemon.name}</h1>
    //           <span class="card--details">${pokemon.type}</span>
    //       </div>
    //   `
    //     container.innerHTML += output
    // }

    // fetchData()

    return(
        <div className="DetailedPokemon">
            <p>DetailedPokemon</p>
            <div id="app"></div>
            <h2>This is a page for pokemon with ID: {match.params.id} </h2>
            <Link to="/">Ir a Pagina principal</Link>
        </div>
    )
}

export default DetailedPokemon;