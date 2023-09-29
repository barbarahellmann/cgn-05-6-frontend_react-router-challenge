import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import HomePage from "./HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import TopNavigation from "./TopNavigation.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <TopNavigation/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
