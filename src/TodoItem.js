import React from "react";

export default class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" defaultChecked={this.props.completed}/>
                <span>
                    {this.props.title}
                </span>
                <input type="button" value='x'/>
            </div>
        )
    }
}