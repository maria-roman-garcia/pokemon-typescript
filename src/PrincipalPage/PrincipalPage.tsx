import React, { Fragment, useEffect, useState } from 'react';
import './PrincipalPage.scss';
import { Link } from "react-router-dom";
//Context
import { usePagination } from '../Context/PageContext';
//Components
import Menu from '../Menu/Menu';
import Experience from '../Commons/Experience';
//Reactstrap
import { Spinner } from 'reactstrap';
import { Table } from 'reactstrap';

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
        pokemonResults: IpokemonDetailed[];
        loading: boolean;
    }

    const [allPokemons, setAllPokemons] = useState<IfinalResult>({ count: 0, pokemonResults: [], loading: true });

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
                        }),
                        loading: false
                    }
                    setAllPokemons(toReturn);
                })
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(allPokemons);

    return (
        <div className="PrincipalPage maxScreenSize">
            {/* <Menu />
            <p>PrincipalPage</p>
            <div id="app"></div>
            <Link to="/products/2">Go to detailed pokemon 2</Link> */}
            {allPokemons?.loading
                ? <Spinner color="info" />
                : <Fragment>
                    <Menu />
                    <div className="row justifyCenter">
                        {allPokemons.pokemonResults.map((pokemon, pokemonIndex) => <div key={"pokemonIndex_" + pokemonIndex} className="col-12 col-lg-4 cardContainer">
                            <div className="card sombra">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="bold">{pokemon.name.toUpperCase()}</p>
                                    </div>
                                    <div className="col-6 justifyEnd">
                                        <p className="bold pokemonNumber alignCenter"># {pokemon.id}</p>
                                    </div>
                                </div>
                                <div className="row justifyEnd">
                                    <Experience normalRate={false} experience={pokemon.base_experience} />
                                </div>
                                <div className="justifyCenter" style={{ marginBottom: "15px" }}>
                                    {/* <img width="80%" src={pokemon.sprites.other.dream_world.front_default} alt="Card image cap" /> */}
                                </div>
                                {/* <p><span className="bold">Abilities:</span> {pokemon.abilities.map((e, indexAbilities) => <span key={"indexAbilities_" + indexAbilities} className="ability">{e.ability.name}</span>)}</p> */}
                                {/* <p><span className="bold">Types:</span> {pokemon.types.map((e, indexType) => <span className="type" key={"type_" + indexType}>{e.type.name}</span>)}</p> */}
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Stat</th>
                                            <th>base</th>
                                            <th>Effort</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {pokemon.stats.map((e, indexPokDetail) =>
                                            <tr key={"indexPokDetail_" + indexPokDetail}>
                                                <th scope="row">{indexPokDetail + 1}</th>
                                                <td>{e.stat.name}</td>
                                                <td>{e.base_stat}</td>
                                                <td>{e.effort}</td>
                                            </tr>
                                        )} */}
                                    </tbody>
                                </Table>
                                {/* <div className="row justifySpaceBeteween alignCenter pointer" onClick={() => showMoves.some(e => e === pokemonIndex) ? deleteIndexShowMoves(pokemonIndex) : addIndexShowMoves(pokemonIndex)}>
                                    <div className="col-6">
                                        <p className="bold">Moves:</p>
                                    </div>
                                    <div className="col-6 justifyEnd">
                                        <span>{showMoves.some(e => e === pokemonIndex) ? sortDown : sortUp}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    {showMoves.some(e => e === pokemonIndex) && pokemon.moves.map((e, indexMove) =>
                                        <p key={indexMove} className="col move">{e.move.name}</p>
                                    )}
                                </div> */}
                                <div className="row button justifyCenter alignCenter">
                                    <Link to={`/pokemonDetailed/${pokemon.id}`} className="widthFit">
                                        <p>See more details</p>
                                    </Link>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default PrincipalPage;