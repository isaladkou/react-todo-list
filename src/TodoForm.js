import React from "react";

export default class TodoForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder='Добавьте новое дело...'/>
                <input type="submit"/>
            </form>
        )
    }
}