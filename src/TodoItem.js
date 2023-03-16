import React from "react";

export default class TodoItem extends React.Component {
    handleClick = () => {
        this.props.onRemove(this.props.id);
    }

    handleChange = () => {
        this.props.onComplete(this.props.id);
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.completed} onChange={this.handleChange}/>
                <span>
                    {this.props.title}
                </span>
                <input type="button" value='x' onClick={this.handleClick}/>
            </div>
        )
    }
}