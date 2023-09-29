import React from "react";
import {Character} from "./characters.ts";


type CharacterDetailsProps = {
    character: Character | undefined;

};

export default function CharacterDetails(props: CharacterDetailsProps) {


    return (
        <div className={"character-card"}>
            <h2>Character Details</h2>
            <p>Name: {props.character?.name}</p>
            <p>{props.character?.species}</p>
            <p>{props.character?.status}</p>
        </div>
    );
}
