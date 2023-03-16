import React from "react";

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
        // this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event)  => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({text: ''})
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder='Добавьте новое дело...'
                       value={this.state.text}
                       onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
        )
    }
}