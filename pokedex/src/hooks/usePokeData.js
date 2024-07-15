import { useState,useEffect } from "react";
import axios from "axios";
export default function usePokemonData()
{
    const [pokeData, setPokeData] = useState({
        next: null,
        pre: null,
        pokemonURL: "https://pokeapi.co/api/v2/pokemon",
        pokeName: [],
        pokemon: [],
        isLoading: true
    });
    async function getPokemonAPI(url) {
        setPokeData((state) => {
            return (
                {
                    ...state,
                    isLoading: true
                }
            )
        })
        let response = (await axios.get(url)).data;
        setPokeData((state) => {
            return (
                {
                    ...state,
                    next: response.next,
                    pre: response.previous
                }
            )
        })
        let pokeResult = response.results;
        let pokeDataPromises = pokeResult.map((result) => {
            return axios.get(result.url);
        })
        let pokeData = await axios.all(pokeDataPromises);
        pokeData = pokeData.map((data) => data.data)
        let pokeRequiredData = pokeData.map((poke) => {
            return {
                id: poke.id,
                name: poke.name,
                image: poke.sprites.other.dream_world.front_default
            }
        })
        // let pokemonList = pokeRequiredData.map((data) => {
        //     return <Pokemon data={data} key={data.id} />
        // })
        setPokeData((state) => {
            return (
                {
                    ...state,
                    pokemon: pokeRequiredData,
                    isLoading: false
                }
            )
        })
    }
    useEffect(() => {
        getPokemonAPI(pokeData.pokemonURL);
    }, [pokeData.pokemonURL]);
    return [pokeData, setPokeData] ;
}