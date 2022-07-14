import React from 'react';

const TodosHeader = ({length}) => {
    return (
        <div>
            <div className="card-header">
                <h1>Todos: {length}</h1>
            </div>
        </div>
    );
};

export default TodosHeader;