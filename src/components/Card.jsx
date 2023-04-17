export default function Card({data}) {
 
  return (
    <div>
    <h1> {data.title} </h1>
    <img src={data.img}/>
    <p> {data.description} </p>
    </div>
  )
}
