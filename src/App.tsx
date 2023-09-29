import {useState} from "react";
import TopNavigation from "./TopNavigation.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import {Character, charactersResponse} from "./characters.ts";
import CharacterDetails from "./CharacterDetails.tsx";


export default function App() {
    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results);
    const [selectedCharacter, setSelectedCharacter] = useState<Character>()


    return (
        <>
            <TopNavigation/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters} onCharacterClick={setSelectedCharacter}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetails character={selectedCharacter}/>}/>
            </Routes>
        </>
    );
}
