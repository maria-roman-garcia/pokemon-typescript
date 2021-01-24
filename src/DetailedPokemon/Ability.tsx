import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
//Types
type Iability = {
    effect_entries: {
        effect: string,
        language: {name: string, url: string}
    }[];
}

type Ifinalresult = {
    data?: Iability,
    loading: boolean
}

const Ability = (props: { name: string; url: string }) => {

    const [ability, setAbility] = useState<Ifinalresult>({ loading: true });

    useEffect(() => {
        fetch(props.url)
            .then(urlInfo => {
                return urlInfo.json();
            }).then((allData: Iability) => {
                setAbility({
                    data: allData,
                    loading: false
                });
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="ability">
            {ability.loading
                ? <Spinner color="info" />
                : <div style={{ padding: "1rem", margin: "10px 0" }} className="sombra">
                    <div className="row justifyCenter">
                        <p className="bold widthFit blueLabel">{props.name}:</p>
                    </div>
                    <p><span className="bold">Effect:</span> {ability.data!.effect_entries.find(e => e.language.name === "en")?.effect}</p>
                </div>
            }
        </div>
    )
}

export default Ability;