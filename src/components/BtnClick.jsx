export default function BtnClick (){
    const handleClick = (name) => {
        console.log(name)
    }
    return(
        //Así es para pasarle parámetros que necesites. Valor del parámetro "name" = "HEY!"
        <button onClick={(event) => handleClick("HEYY!", event)}>Click</button>
        
        //Así no tienes que pasarle parametros por lo que los valores qur ecibirás en la funcion son los que te envia el onClick 
        // <button onClick={ => handleClick}>Click</button>
    )
}
//y luego si queremos que sea con un parámetro, arriba también lo tenemos con un parámetro

// const fnIn = () =>{
//     handleClick(5)
// }

// btn.addEventListener("click", fnIn)