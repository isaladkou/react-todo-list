import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [nextId, setNextId] = useState(0);

    function handleItemAdd(itemTitle) {
        let item = {
            id: nextId,
            title: itemTitle,
            completed: false
        };
        setNextId(nextId + 1);
        let newItems = [...items];
        newItems.push(item);
        setItems(newItems);
    }

    function handleItemRemove(id) {
        let newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    function handleItemComplete(id) {
        let newItems = [...items];
        let item = items.find(item => item.id === id);
        item.completed = true;
        setItems(newItems);
    }

    function getTasksByCompletion(isCompleted) {
        return items
            .filter(item => item.completed === isCompleted)
            .map((item, i) => (
                <TodoItem
                    title={item.title}
                    completed={item.completed}
                    id={item.id}
                    key={i}
                    onRemove={handleItemRemove}
                    onComplete={handleItemComplete}
                />
            ));
    }

    return (
        <>
            <h1>Список дел</h1>
            <h2>Надо сделать:</h2>
            <TodoForm onSubmit={handleItemAdd}/>
            {getTasksByCompletion(false)}
            <h2>Уже выполнено:</h2>
            {getTasksByCompletion(true)}
        </>
    )
}
