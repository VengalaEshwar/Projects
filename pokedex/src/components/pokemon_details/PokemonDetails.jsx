import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import "./PokemonDetails.css";
export default function PokemonDetails(){
    let {id} = useParams();
    const [pokeData,setPokeData] = useState({});
   async function downloadData()
    {
        let response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        console.log(response)
        setPokeData({
            key : response.id,
            name : response.name,
            image : response.sprites.other.dream_world.front_default,
            height : response.height,
            weight : response.weight,
            types : response.types.map((t)=>t.type.name)
        });
        console.log(pokeData) ;
    }
    useEffect(()=>{
        downloadData();
    },[]);
    return (
        <div className="pokemon-details">
            <img src={pokeData.image} alt="" />
            <div className="poke-name">{pokeData.name}</div>
            <div className="poke-data">Height : {pokeData.height}</div>
            <div className="poke-data">Weight : {pokeData.weight}</div>
            <div className="poke-types"> {pokeData.types && pokeData.types.map((t)=>{
               return <span className="poke-type">{t}</span>
            })}</div>
        </div>
    );
}
