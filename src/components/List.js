import React, { useState } from "react";

function List({ todos }) {

    return(
        <ul>
            {
                todos.map((todo, idx) => <li key={`todo-${idx}`}>{todo}</li>)
            }
        </ul>
    );
}


export default List;