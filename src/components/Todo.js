import React, { Component } from 'react'

class Todo extends Component {
    render() {
        const isNotComplete = {
            border: '1px solid black',
            width: "35%",
            padding: "1%",
            marginBottom: "1%"
        }

        const isComplete = {
            ...isNotComplete,
            background: "black",
            color: "gray",
            'text-decoration': 'line-through'
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