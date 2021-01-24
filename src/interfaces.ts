interface IpokemonDetailed {
    name: string;
    url: string;
    abilities: {
        ability: {
            name: string;
            url: string;
        }
    }[];
    base_experience: number;
    forms: [{ name: string; url: string; }];
    id: number;
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        other: {
            dream_world: {
                front_default: string;
            }
        }
    };
    types: {
        type: {
            name: string;
            url: string;
        }
    }[];
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        }
    }[];
    moves: {
        move: {
            name: string;
            url: string;
        }
    }[];
    species: {
        name: string;
        url: string;
    };
}

export default IpokemonDetailed;