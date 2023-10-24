import { useEffect, useState } from "react";
import { ICharacter } from "./models/ICharacter";
import axios from "axios";

const Character =  () => {
    const [character, setCharacter] = useState<ICharacter|undefined>(undefined);
    const [id, setId] = useState<string>('');
    console.log(character)

    useEffect(()=> {
        axios.get<ICharacter>('https://rickandmortyapi.com/api/character/'+id)
        .then((response) => {
            setCharacter(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [id]);
    return (
        <div>
            {character && <div>
                character: {character.name}
                <div>image: <img src={character.image} /></div>
            </div>}
            <div>
                <input type="string" value={id} onChange={(e) =>setId(e.target.value)}/>
            </div>
        </div>
    )
}

export default Character;