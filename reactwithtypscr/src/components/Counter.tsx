import {useState} from 'react'

export function Counter(){
    const [count, setCount] = useState<number> (0) // type script usage 

    return(
        <div>
            <p>Cups ordered : {count}</p>
            <button

            onClick={() => setCount((count) =>count + 1)}
            > Order one more</button>
        </div>
    )
}