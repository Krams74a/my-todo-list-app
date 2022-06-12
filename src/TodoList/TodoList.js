import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css"

const TodoList = ({todoList, deleteTodoItem}) => {
    return (
        <div className={styles.todoList}>
            {todoList.map((item) => item.done ? null : <TodoItem name={item.name} text={item.text} done={item.done} id={item.id} key={item.id} deleteTodoItem={deleteTodoItem}/>)}
        </div>
    )
}

export default TodoList;
