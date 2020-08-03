import React, { Component } from 'react'

class TodoForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input onChange={this.props.inputHandler} value={this.props.value} type="text" name="title" placeholder="todo" />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm