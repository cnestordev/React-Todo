import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import color from 'randomcolor'

class App extends React.Component {

   componentDidMount() {
      if (window.localStorage.getItem('listData')) {
         this.setState({
            todoList: JSON.parse(window.localStorage.getItem('listData'))
         })
      }
   }

   componentDidUpdate() {
      window.localStorage.setItem('listData', JSON.stringify(this.state.todoList))
   }

   constructor() {
      super()
      this.state = {
         todoList: [{
            title: "You have a new todo list",
            id: 3838,
            color: color(),
            completed: false
         }],
         inputValue: ''
      }
   }

   inputHandler = e => {
      const { value } = e.target
      this.setState({
         inputValue: value
      })
   }

   handleCheck = id => {
      const newArr = this.state.todoList.map(item => item.id === id ?
         { ...item, completed: !item.completed }
         :
         item)
      this.setState({
         todoList: newArr
      })
   }

   submitHandler = e => {
      e.preventDefault()
      const newItem = {
         title: this.state.inputValue,
         id: Date.now(),
         completed: false,
         color: color({ luminosity: "bright" })
      }
      this.setState({
         todoList: [...this.state.todoList, newItem],
         inputValue: ''
      })
   }

   handleFilter = e => {
      const filteredArr = this.state.todoList.filter(item => !item.completed)
      this.setState({
         todoList: filteredArr
      })
   }

   render() {
      return (
         <div>
            <h2 style={{ color: '#fff' }}>Welcome to your Todo App!</h2>
            <TodoList check={this.handleCheck} data={this.state.todoList} />
            <TodoForm filter={this.handleFilter} value={this.state.inputValue} submitHandler={this.submitHandler} inputHandler={this.inputHandler} />
         </div>
      )
   }
}

export default App
