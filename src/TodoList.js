import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            nextId: 0
        }
    }

    handleItemAdd = (itemTitle) => {
        let id = this.state.nextId;
        let item = {
            id: id,
            title: itemTitle,
            completed: false
        };
        const items = [...this.state.items];
        items.push(item);
        this.setState({items, nextId: ++id});
    }

    handleItemRemove = (id) => {
        let items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
    }

    handleItemComplete = (id) => {
        let items = [...this.state.items];
        items.find(item => item.id === id).completed = true;
        this.setState({items});
    }

    getTasksByCompletion = (isCompleted) => {
        return this.state.items
            .filter(item => item.completed === isCompleted)
            .map((item, i) => (
                <TodoItem
                    title={item.title}
                    completed={item.completed}
                    id={item.id}
                    key={i}
                    onRemove={this.handleItemRemove}
                    onComplete={this.handleItemComplete}
                />
            ));
    }

    render() {
        return (
            <>
                <h1>Список дел</h1>
                <h2>Надо сделать:</h2>
                <TodoForm onSubmit={this.handleItemAdd}/>
                {this.getTasksByCompletion(false)}
                <h2>Уже выполнено:</h2>
                {this.getTasksByCompletion(true)}
            </>
        )
    }
}
