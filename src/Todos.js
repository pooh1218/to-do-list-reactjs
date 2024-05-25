import React, { useState } from "react";
import Todoadd from './components/Todoadd';
import List from './components/List';




function Todos() {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (title) => {
        setTodos([...todos, title]);
    }


    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((todo, idx) => idx !== index);
        setTodos(updatedTodos);
    };


    return (
        <div>
            <h1>My To Do List</h1>
            <Todoadd handleAddTodo={handleAddTodo} />
            <List todos={todos} handleRemoveTodo={handleRemoveTodo} />
        </div>
    );
}

export default Todos;