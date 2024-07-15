import { Route, Routes } from "react-router-dom";
import AppContainer from "../components/AppContainer/AppContainer";
import PokemonDetails from "../components/pokemon_details/PokemonDetails";

export default function CustomRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<AppContainer/>}/>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    );
}