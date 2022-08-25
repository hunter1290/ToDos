import React from 'react';
import './Todo.css'
import db from './firebase';
function Todo(props) {

    return (
        <ul  className="listitems">
        <li className="list">{props.todo.todo}</li>
        <button  onClick={event =>db.collection('todos').doc(props.todo.id).delete()}><i class="fas fa-trash-alt"></i></button>
      </ul>
    )
}

export default Todo;