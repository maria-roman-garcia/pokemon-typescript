import React, { useEffect, useState } from 'react';
import './DetailedPokemon.scss';
import { RouteComponentProps, Link } from "react-router-dom";
//Reactstrap
import { Spinner } from 'reactstrap';
import { Table } from 'reactstrap';
//Icons
import Icons from '../Commons/Icons';
//Componentes
import Ability from './Ability';
import Move from './Move';
import Species from './Species';
import Stats from './Stats';
//Interfaces
import IpokemonDetailed from '../interfaces';

type IFinalResult = {
    pokemonData?: IpokemonDetailed,
    imgToLoad: string[],
    loading: boolean
}

type TParams = { id: string };

type ImenuSec = {id: number, name: string}[];

const DetailedPokemon = ({ match }: RouteComponentProps<TParams>) => {

    const [pokemonSelected, setPokemonSelected] = useState<IFinalResult>({imgToLoad:[],  loading: true });

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
            .then((response) => { return response.json() })
            .then((responseJson: IpokemonDetailed) => {
                setPokemonSelected({
                    pokemonData: responseJson,
                    imgToLoad: [
                        responseJson.sprites.back_default,
                        responseJson.sprites.front_shiny,
                        responseJson.sprites.back_shiny,
                        responseJson.sprites.front_default
                    ],
                    loading: false
                })
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    //Background img pokemon
    const [backgroundPokemon, setBackgroundPokemon] = useState<string>(`linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7))`)
    useEffect(() => {
        if (!pokemonSelected.loading) {
            setBackgroundPokemon(`linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${pokemonSelected.imgToLoad[3]})`)
        }
    }, [pokemonSelected.loading]);

    //Img pokemon change every sec
    let i = 0;
    const [pokemonChange, setPokemonChange] = useState<string>("");
    useEffect(() => {
        if (!pokemonSelected.loading) {
            const interval = setInterval(() => {
                setPokemonChange(pokemonSelected.imgToLoad[i]);
                if (i < 3) {
                    i = i + 1;
                } else {
                    i = 0;
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [pokemonSelected.loading]);

    //Menu
    const [menuSelected, setMenuSelected] = useState<number>(1);
    const menuSections: ImenuSec =[
        {
            id: 1,
            name: "About"
        },
        {
            id: 2,
            name: "Ability"
        },
        {
            id: 3,
            name: "Moves"
        },
        {
            id: 4,
            name: "Stats"
        }
    ]

    const renderMenuItemSelected = (section: number) => {
        if (section === 1) {
            return <Species name={pokemonSelected.pokemonData!.species.name} url={pokemonSelected.pokemonData!.species.url} experience={pokemonSelected.pokemonData!.base_experience} imgPokemon={pokemonChange} />
        } else if (section === 2) {
            return <div>{pokemonSelected.pokemonData!.abilities.map(e => <Ability name={e.ability.name} url={e.ability.url} />)}</div>
        } else if (section === 3) {
            return <div>{pokemonSelected.pokemonData!.moves.map(e => <Move name={e.move.name} url={e.move.url} />)}</div>
        } else if (section === 4) {
            return <Stats stats={pokemonSelected.pokemonData!.stats} />
        } else {
            return "No section avaiable"
        }
    }

    return (
        <div className="DetailedPokemon">
            <div className="PokemonDetailed maxScreenSize justifyCenter" style={{ background: backgroundPokemon }}>
                {pokemonSelected.loading
                    ? <Spinner color="info" />
                    : <div className="pokemonCard sombra">
                        <div className="justifySpaceBeteween alignCenter title">
                            <Link to="/">
                                <span>{Icons.backArrow}</span>
                            </Link>
                            <p className="bold">{pokemonSelected.pokemonData!.species.name.toUpperCase()} #{pokemonSelected.pokemonData!.id}</p>
                        </div>
                        <div className="row justifyCenter imgRow">
                            <img src={pokemonChange} alt="imgPokemon" />
                        </div>
                        <div className="row menu justifyCenter">
                            {menuSections.map((menuItem, indexMenu) => <p key={indexMenu} className={menuSelected === menuItem.id ? "menuActive" : ""} onClick={() => setMenuSelected(menuItem.id)} style={{padding: "0 10px"}}>{menuItem.name}</p>)}
                        </div>
                        {renderMenuItemSelected(menuSelected)}
                    </div>
                }
            </div>
        </div>
    )
}

export default DetailedPokemon;