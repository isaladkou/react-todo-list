import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
    render() {
        return (
            <>
                <h1> Список дел </h1>
                <TodoForm/>
                <TodoItem title='Учить реакт' completed={false}/>
                <TodoItem title='Пить пиво' completed={true}/>
            </>
        )
    }
}
