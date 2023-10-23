import { useState } from "react";

/**
 * In This component we want to increase/decrease counter
 * 
 */
const Counter = () => {
    //useState returns an array with the first element is the value and the second is the function to modify the value
    //example [value, setValue] = useState(default)
    const [counter, setCounter] =useState<number>(0);

    const increaseCounter = (): void => {
        setCounter(counter + 1)
    }

    const decreaseCounter = (): void => {
        //sol1
        setCounter((prevCounter) => {
            if(prevCounter > 0) {
                return prevCounter - 1;
            }

            return prevCounter;
        })
        //sol 2
        // if(counter > 0) {
        //     setCounter(counter - 1)
        // }
    }

    return (
    <div>
        <div>{counter}</div>
        <div>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    </div>
    );
}

export default Counter;