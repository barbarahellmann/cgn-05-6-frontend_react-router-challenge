import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[],
    onCharacterClick: (character: Character) => void
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            <p>
                Gallery
            </p>
            {props.characters.map(character => <CharacterCard  key={character.id} character={character} onCharacterClick={props.onCharacterClick}/>)}
        </div>
    )
}
