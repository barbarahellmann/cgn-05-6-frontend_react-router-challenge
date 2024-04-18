import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import Navigation from "./components/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage.tsx";
import Characters from "./pages/characters.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Navigation />

            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/charachters"} element={<Characters />} />
            </Routes>


            <CharacterGallery  characters={characters}/>
        </>
    )
}
export default App
