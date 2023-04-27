
import React, {useState} from 'react';

const CounterFunction = () => {

    const [count,newHandle] = useState ({number:0});
    
    return (
        <div>
            
            <h1>Counter: {count.number}</h1>
            <hr></hr>

            <button onClick={ () => newHandle ( {number:count.number + 1})}>Increase Count</button>
            <button onClick={ () => newHandle ({number:count.number - 1})}>Decrease Count</button>

        </div>
    );
}

export default CounterFunction;


