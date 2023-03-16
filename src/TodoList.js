import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    title: 'Учить реакт',
                    completed: false,
                },
                {
                    title: 'Пить пиво',
                    completed: true,
                },
                {
                    title: '))))))))',
                    completed: true,
                },
            ]

        }
        // this.handleItemAdd = this.handleItemAdd.bind(this)
    }

    handleItemAdd = (itemTitle) => {
        let item = { title: itemTitle, completed: false };
        const items = [...this.state.items];
        items.push(item);
        this.setState({ items });
    }

    render() {
        return (
            <>
                <h1> Список дел </h1>
                <TodoForm onSubmit={this.handleItemAdd}/>
                {this.state.items.map((item, i) => <TodoItem title={item.title} completed={item.completed} key={i}/>)}
            </>
        )
    }
}
