export default function List(){
    const singers = ["Limmp bizkit", "Blink 182", "Linkin Park", "The offspring"]
    return (
        <ul>
            {singers.map((singer, index) => <li key={index}>{singer}</li>)}
            
        </ul>
    )
}
