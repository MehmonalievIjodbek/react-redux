import {useDispatch} from "react-redux";
import {removeTodo, markTodoDone} from "../action/todos";
import React from 'react';

const TodoItem = ({id, title, isDone}) => {
    const dispatch = useDispatch();
    const handleMarkTodo = (e) => {
        dispatch(
            markTodoDone({
            id,
            title,
            isDone: e.target.checked

        }))
    }
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <input className="form-check-input me-2" type="checkbox" value=""
                           id="flexCheckDefault" onChange={handleMarkTodo}/>
                    <label className={`form-check-label ${isDone ? 'text-decoration-line-through' : ""}`}  htmlFor="flexCheckDefault">
                        {title}
                    </label>
                </div>
                <div className="btn btn-danger" onClick={() => dispatch(removeTodo(id))}>
                    Remove
                </div>
            </li>
        </div>
    );
};

export default TodoItem;