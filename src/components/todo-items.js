import React from 'react';
import TodoItem from "./todo-item";
import {useSelector} from "react-redux";

const TodoItems = () => {
    const todos = useSelector(state => state.todos);
    return (
        <div>

            <ul className="list-group list-group-flush">
                {
                    todos.length > 0 ? todos.map(item => (
                        <TodoItem
                            title={item.title}
                            key={item.id}
                            id={item.id}
                            isDone={item.isDone}
                        />
                    )) : (
                        <h3 className="text-center mb-3">Todos not created yet</h3>
                    )
                }
            </ul>
        </div>
    );
};

export default TodoItems;