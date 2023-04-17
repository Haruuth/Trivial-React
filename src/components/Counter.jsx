import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0); // [0, function]
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);

    const name = "Vamos a contar";
    console.log("Que esta pasando!!")

    return (<div>
        <p>{name}{" "}{count}</p>
        
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>)
}



const [count, setCount] = useState(0);

const name = "Vamos a contar"
console.log("woow")

return (
    <div>
        <p>{name}{" "}{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>

)