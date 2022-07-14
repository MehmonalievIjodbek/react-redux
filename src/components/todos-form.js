import React from 'react';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../action/todos";
import { v4 as uuidv4 } from 'uuid';

const TodosForm = () => {
    const inputRef = useRef(null);
    const formRef  = useRef(null);
    const dispatch = useDispatch();
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title: inputRef.current.value,
            id: uuidv4(),
            isDone: false,
        }));
        formRef.current.reset();
    }
    return (
        <div>
            <div className="card-body">
                <form className="mb-3 d-flex justify-content-between align-items-center" onSubmit={handlerSubmit} ref={formRef}>
                    <div>
                        <input
                            ref={inputRef}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="e.g buy eggs"
                        />
                    </div>
                    <button className="btn btn-success">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodosForm;