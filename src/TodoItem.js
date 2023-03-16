import React from "react";

export default function TodoItem(props) {
    function handleClick() {
        props.onRemove(props.id);
    }

    function handleChange() {
        props.onComplete(props.id);
    }

    return (
        <div>
            <input type="checkbox"
                   checked={props.completed}
                   disabled={props.completed}
                   onChange={handleChange}/>
            <span>{props.title}</span>
            {!props.completed && <input type="button" value='x' onClick={handleClick}/>}
        </div>
    )
}