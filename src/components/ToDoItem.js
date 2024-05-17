import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </li>
  );
};

export default ToDoItem;