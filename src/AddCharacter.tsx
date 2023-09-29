import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";
import {useNavigate} from "react-router-dom";

type AddCharacterProps = {
    saveCharacter: (characterToSave: Character) => void
}

export default function AddCharacter(props: AddCharacterProps) {

    const [newCharacter, setNewCharacter] = useState<Character>({name: "", status: ""})

    const navigate = useNavigate()

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    function onCharacterSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        props.saveCharacter(newCharacter)

        navigate("/characters")
    }

    return (
        <form onSubmit={onCharacterSave}>
            <input name="name" placeholder="Name" required value={newCharacter.name} onChange={onInputChange}/>
            <input name="status" placeholder="Status" value={newCharacter.status} onChange={onInputChange}/>
            <button>Save</button>
        </form>
    )
}
