import { useEffect, useState } from "react";

const UseEffectComponent = () => {

    const [x, setX] = useState<number|undefined>(undefined);
    const [y, setY] = useState<number|undefined>(undefined);
    const [z, setZ] = useState<number|undefined>(undefined);
    const [result, setResult] = useState<number>(0);

    

    const updateXHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value) {
            setX(Number(value))
        }else {
            setX(undefined);
        }
    }

    const updateYHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value) {
            setY(Number(value))
        }else {
            setY(undefined);
        }
    }
    const updateZHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value) {
            setZ(Number(value))
        }else {
            setZ(undefined);
        }
    }
    console.log('outside ')

    useEffect(()=>{
        console.log('in useEffect')
        const xValue = x!==undefined ? x : 0;
        const yValue = y!==undefined ? y : 0;
        setResult(xValue + yValue);
    }, [x, y]);

    useEffect(()=> {
        alert('test')
    }, [])
    

    return (
        <div>
            <div>
                <input type="number" value={x} onChange={updateXHandler}/>
            </div>
            <div>
                <input type="number" value={y} onChange={updateYHandler}/>
            </div>
            <div>
                <input type="number" value={z} onChange={updateZHandler}/>
            </div>
            <div>
                {result}
            </div>
        </div>
    )
}

export default UseEffectComponent;