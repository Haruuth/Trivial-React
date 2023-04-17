export default function TodoList(){
    const todoList = [{name: "Aprender React", isDone: false}, {name: "Sacar al gato", isDone: false},{name: "Ver la peli de Super Mario", isDone: true}]
    
    return(
        <ul>
            {todoList.map((tareas, index) => <li key={index}>{tareas.name}</li>)}
        </ul>
    )
    }