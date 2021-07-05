import React, { Component } from 'react'

class Todo extends Component {
    render() {
        const isNotComplete = {
            border: '1px solid transparent',
            borderRadius: "8px",
            background: this.props.item.color,
            width: "35%",
            padding: "0.5%",
            marginBottom: "1%",
            paddingLeft: "1%"
        }

        const isComplete = {
            ...isNotComplete,
            background: "black",
            border: "1px solid gray",
            color: "gray",
            'textDecoration': 'line-through'
        }

        let listStyle = this.props.item.completed ? isComplete : isNotComplete

        return (
            <div onClick={() => this.props.check(this.props.item.id)}>
                <p style={listStyle}>{this.props.item.title}</p>
            </div>
        )
    }
}

export default Todo