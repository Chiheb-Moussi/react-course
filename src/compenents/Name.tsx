import { useState } from "react";
import Person from "./Person";
import Button from "./Button";

const Name = () => {

    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number|undefined>(undefined);
    const updateName = (e:  React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e) => updateName(e)} placeholder="name" /><br/>
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="age" /><br/>
            <Person age={age} name={name} />
            <Button>click me!</Button>
        </div>
    );
}

export default Name;