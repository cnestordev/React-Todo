import React, { Component } from 'react'

class TodoForm extends Component {
    render() {

        const inputStyle = {
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid #fff',
            borderRadius: '2px',
            color: '#fff',
            fontSize: '1rem',
            width: '34%',
            padding: '1%',
            marginRight: '1%'
        }

        const buttonStyle = {
            border: '1px solid white',
            background: 'white',
            color: '#000',
            padding: '1%',
            width: '9%'
        }

        const button2Style = {
            border: '1px solid gray',
            background: 'gray',
            color: '#fff',
            padding: '1%',
            width: '36%',
            marginTop: '2%'
        }

        return (
            <>
                <form autoComplete="off" onSubmit={this.props.submitHandler}>
                    <input style={inputStyle} onChange={this.props.inputHandler} value={this.props.value} type="text" name="title" placeholder="todo" />
                    <button style={buttonStyle}>Add</button>
                </form>
                <button style={button2Style} onClick={() => this.props.filter()}>Clear Completed Items</button>
            </>
        )
    }
}

export default TodoForm