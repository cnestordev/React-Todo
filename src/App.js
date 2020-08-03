import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {

   componentDidMount() {
      this.setState({
         todoList: JSON.parse(window.localStorage.getItem('listData'))
      })
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
      const newArr = this.state.todoList.map(item => {
         if (item.id === id) {
            console.log("it's a match")
            return {
               ...item,
               completed: !item.completed
            }
         }
         console.log("no match")
         return item
      })
      this.setState({
         todoList: newArr
      })
   }

   submitHandler = e => {
      e.preventDefault()
      const newItem = {
         title: this.state.inputValue,
         id: Date.now(),
         completed: false
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
            <h2>Welcome to your Todo App!</h2>
            <TodoList check={this.handleCheck} data={this.state.todoList} />
            <TodoForm filter={this.handleFilter} value={this.state.inputValue} submitHandler={this.submitHandler} inputHandler={this.inputHandler} />
         </div>
      );
   }
}

export default App;
