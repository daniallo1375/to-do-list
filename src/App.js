import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, updatedText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: updatedText } : todo
    ));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddToDo addTodo={addTodo} />
      <ToDoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete} 
        editTodo={editTodo} 
      />
    </div>
  );
};

export default App;
