import React from 'react';
import { useSelector } from "react-redux";

const TodosFooter = () => {
    const todoItems = useSelector(state => state.todos);
    const handleSave = () => {
        localStorage.setItem('todos', JSON.stringify(todoItems));
    }
    return (
        <div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default TodosFooter;