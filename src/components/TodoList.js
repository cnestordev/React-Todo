import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    render() {
        const list = this.props.data.map(item => <Todo check={this.props.check} key={item.id} item={item} />)

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default TodoList