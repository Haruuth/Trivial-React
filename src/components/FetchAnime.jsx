import { useEffect, useState } from "react"
import Gallery from "./Gallery";
// import axios from "axios";

export default function FetchAnime(){
    const [anime, setAnime] = useState([]);
    const [anime2, setAnime2] = useState([]);
    const [anime3, setAnime3] = useState([]);

    useEffect(() => {
        fetch("https://kitsu.io/api/edge/trending/anime?limit=5").then(res => res.json()).then(res =>{
            console.log(res)
            setAnime(res.data)
        })
        fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count").then(res => res.json()).then(res =>{
            console.log(res)
            setAnime2(res.data)
        })
        fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count").then(res => res.json()).then(res =>{
            console.log(res)
            setAnime3(res.data)
        })
        // axios.get("https://kitsu.io/api/edge/trending/anime?limit=5").then(res =>{
        //     console.log(res)
        //     setAnime(res.data.data)
        // })
    }, [])

   return(
    <div>
    <Gallery array={anime}></Gallery>
    <Gallery array={anime2}></Gallery>
    <Gallery array={anime3}></Gallery>
    </div> 
      )
}l