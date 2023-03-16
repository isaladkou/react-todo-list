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
            <input type="checkbox" checked={props.completed} onChange={handleChange}/>
            <span>
                    {props.title}
                </span>
            <input type="button" value='x' onClick={handleClick}/>
        </div>
    )
}