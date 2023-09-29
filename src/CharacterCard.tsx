import {Character} from "./characters.ts";
import {Link} from "react-router-dom";
import CharacterDetails from "./CharacterDetails.tsx";

type CharacterCardProps = {
    character: Character,
    onCharacterClick: (character: Character) => void

}

export default function CharacterCard(props: CharacterCardProps) {

    function handleCardClick() {
        props.onCharacterClick(props.character)
    }

    return (
        <div onClick={handleCardClick}>
            <Link to={`/characters/${props.character.id}`}>
                <CharacterDetails character={props.character}/>
            </Link>
        </div>
    )
}
