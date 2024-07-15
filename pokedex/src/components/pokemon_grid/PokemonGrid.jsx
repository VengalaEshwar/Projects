import { useEffect, useState } from 'react';
import './PokemonGrid.css';
import axios from 'axios';
import Pokemon from '../pokemon/Pokemon';
import Loader from '../loader/Loader';
import usePokemonData from '../../hooks/usePokeData';
export default function PokemonGrid() {
    const [pokeData,setPokeData] = usePokemonData();
    return (
        <div className="pokemon-grid">
            <div className="poke-box">
                {pokeData.isLoading ? <Loader /> : pokeData.pokemon.map((data) => {
            return <Pokemon data={data} key={data.id} />
        })}
            </div>
            <div className="poke-button">
                <button disabled={pokeData.pre == null} onClick={() => { setPokeData((state) => { return ({ ...state, pokemonURL: pokeData.pre }); }) }}>prev</button>
                <button disabled={pokeData.next == null} onClick={()=>{setPokeData((state) => { return ({ ...state, pokemonURL: pokeData.next }); })}}>next</button>
            </div>
        </div>
    );
}