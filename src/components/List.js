import React from "react";

function List({ todos, handleRemoveTodo }) {
    // add remove
    const handleRemove = (index) => {
        handleRemoveTodo(index);
    };

    // function list(todo, idx) {
    //     return <li key={`todo-${idx}`}>{todo} <button onClick={() => handleRemove(idx)}>Remove</button> </li>
    // }

    const array = [1,2,3,4,5,6,10]

    function a (i) {
        return i*i;
    }

    // const array1 = array.map(a)
    
    const array1 = array.map(i => i*i)

    console.log(array1)

    const array2 = array1.filter(j => j%5===0)

    console.log(array2)



    return (
        <ul>
            {
                todos.map((todo, idx) => <li key={`todo-${idx}`}>{todo} <button onClick={() => handleRemove(idx)}>Remove</button> </li>)
            }
        </ul>
    );
}


export default List;