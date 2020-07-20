import React from 'react'

const Todos = ({ todos, deleteTodo }) =>{
    const todoList = todos.length ? (todos.map( 
        todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)} className="collection-item">{todo.content}</span>
                </div>
            )
        }
    )) : (
            <p>You have nothing to do.</p>
        )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos