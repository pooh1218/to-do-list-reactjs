import React, { useState } from "react";
import Todoadd from './components/Todoadd';
import List from './components/List';




function Todos() {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (title) => {
        setTodos([...todos, title]);
    }


    return (
        <div>
            <h1>My To Do List</h1>
            <Todoadd handleAddTodo={handleAddTodo} />
            <List todos={todos} />
        </div>
    );
}

export default Todos;