import React, {useEffect, useState} from "react";
import TopNavigation from "./TopNavigation.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import {Character} from "./characters.ts";
import CharacterDetails from "./CharacterDetails.tsx";

import AddCharacter from "./AddCharacter.tsx";
import axios from "axios";
import ActionBar from "./ActionBar.tsx";

export default function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [nextUrl, setNextUrl] = useState<string | undefined>()
    const [prevUrl, setPrevUrl] = useState<string | undefined>()


    useEffect(() => {
        loadCharacters("https://rickandmortyapi.com/api/character")
    }, [])

    function loadCharacters(url?: string) {
        if (url) {
            axios.get(url)
                .then((response) => {
                    console.log("then 1")
                    setNextUrl(response.data.info.next)
                    setPrevUrl(response.data.info.prev)
                    setCharacters(response.data.results)
                })
                .catch((reason) => {
                    console.error("fehler")
                })
                .finally(() => {
                    console.log("fertig")
                })
        }
    }

    function saveCharacter(characterToSave: Character) {
        setCharacters([...characters, characterToSave])
    }

    return (
        <>
            <TopNavigation/>
            <ActionBar hasNext={!!nextUrl}
                       hasPrev={!!prevUrl}
                       loadNext={() => loadCharacters(nextUrl)}
                       loadPrev={() => loadCharacters(prevUrl)}/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/add"} element={<AddCharacter saveCharacter={saveCharacter}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}/>
            </Routes>
        </>
    );
}
