import TodoList from "./TodoList/TodoList";
import React, {useState} from "react";
import AddTodoList from "./AddTodoList/AddTodoList";
import styles from "./App.module.css";

const App = () => {
    const [todoList, setTodoList] = useState([])

    const deleteTodoItem = (id) => {
        setTodoList(prevState => {
            const newState = prevState.map(obj => {
                if (obj.id === id) {
                    return {...obj, done: true};
                }
                return obj;
            });

            return newState;
        });
    }

    return (
        <div className={styles.app}>
            <AddTodoList setTodoList={setTodoList}/>
            <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem}/>
        </div>
    )
}

export default App;
