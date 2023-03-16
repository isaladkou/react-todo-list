import React, {useState} from "react";

export default function TodoForm(props) {

    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(text);
        setText('');
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder='Добавьте новое дело...'
                   value={text}
                   onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    )
}