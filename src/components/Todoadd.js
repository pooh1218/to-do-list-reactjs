import React, { useState } from "react";



function Todoadd({handleAddTodo}) {

    const [title, setTitle] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (title === "") {
            alert("Input any title!")
            return;
        }

        handleAddTodo(title);

        setTitle("");

    }
    return (
        <form onSubmit={onSubmit}>
            <input value={title} type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}


export default Todoadd;