
export type ActionBarProps = {
    hasNext: boolean,
    hasPrev: boolean,
    loadNext: () => void,
    loadPrev: () => void
}

export default function ActionBar(props: ActionBarProps) {
    return (
        <div className={"action-bar"}>
            <button onClick={props.loadPrev} disabled={!props.hasPrev}>Prev</button>
            <button onClick={props.loadNext} disabled={!props.hasNext}>Next</button>
        </div>)
}
