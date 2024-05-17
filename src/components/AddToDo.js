import React, { useState } from 'react';

const AddToDo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ id: Date.now(), text, completed: false });
      setText('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new to-do" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDo;
