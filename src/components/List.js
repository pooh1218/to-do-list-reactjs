import React, { useState } from "react";

function List({ todos ,handleRemoveTodo }) {

    const handleRemove = (index) => {
        handleRemoveTodo(index);
    };

    return (
        <ul>
            {
                todos.map((todo, idx) => <li key={`todo-${idx}`}>{todo} <button onClick={() => handleRemove(idx)}>Remove</button> </li>)
            }
        </ul>
    );
}


export default List;