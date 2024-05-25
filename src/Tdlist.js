import * as React from 'react';

const Tdlist = () => {
    const [title, setTitle] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const handleAdd = () => {
        // fhfgh
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (title === "") {
            alert("Empty title!");
            return;
        }
        setTitle("");
        setTodos([...todos, title]);
    }

    return (
        <div className='container'>
            {/* <button onClick={handleToggle} type="button">
        Toggle
      </button> */}
            <div className='header'>
                <h1>My To Do List</h1>
                <form onSubmit={onSubmit}>
                    <input value={title} type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            </div>
            <ul>
                {
                    todos.map((todo, idx) => <li key={`todo-${idx}`}>{todo}</li>)
                }
            </ul>
            {/* {isShow ? <Welcome text={greeting} /> : null} */}
        </div>
    );
};

export default Tdlist;