import { useState } from "react";

export default function TodoAdd(){
    const todoList = [{name: "Aprender React", isDone: false}, {name: "Sacar al gato", isDone: false},{name: "Ver la peli de Super Mario", isDone: true}]

    const [list, setList] = useState(todoList)
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleInput = (event) => {
        setNuevaTarea(event.target.value)
    };

    const addNew = () =>{
        console.log("Funciono o no")
        const copia = [...list];
        copia.push({name: nuevaTarea, isDone: false});
        setList(copia);
        // setNuevaTarea;
    }

    return (
        <div>
            <input type="text" name ="tarea" onChange={handleInput} />
        <ul>
            {list.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
        <button onClick={addNew}>Añadir</button>
        </div>
    )

       // return(
    //     <button onClick = {() => setList(copia.push[{name: "Repasar variables de estado", isDone: true}])}>Añadir a la lista</button>

    // )
}