import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeTodos } from "./action/todos";
import './App.css';
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodoItems from "./components/todo-items";
import TodosFooter from "./components/todos-footer";
function App() {
    const dispatch = useDispatch()
    const todoItems = useSelector(state => state.todos);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        dispatch(initializeTodos(todos));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-3">
                        <TodosHeader length={todoItems.length}/>
                        <TodosForm/>
                        <TodoItems/>
                        <TodosFooter/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
