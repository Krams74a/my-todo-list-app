import React, {useState} from "react";
import styles from "./AddTodoList.module.css";
import {Button, Form} from 'react-bootstrap';

const AddTodoList = ({setTodoList}) => {
    const [todoName, setTodoName] = useState("")
    const [todoText, setTodoText] = useState("")

    const addTodoItem = (event, name, text) => {
        event.preventDefault();
        if(name && text){
            const newElement = {name: name, text: text, done: false, id:Math.random()}
            setTodoList(todoList => [...todoList, newElement])
            setTodoName("")
            setTodoText("")
        } else {
            const newElement = {name: "Название TODO", text: "Текст TODO", done: false, id:Math.random()}
            setTodoList(todoList => [...todoList, newElement])
            setTodoName("")
            setTodoText("")
        }
    }

    const todoNameHandler = (event) => {
        setTodoName(event.target.value)
    }

    const todoTextHandler = (event) => {
        setTodoText(event.target.value)
    }

    return (
        <div className={styles.addTodoList}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Название TODO</Form.Label>
                    <Form.Control type="name" placeholder="Введите название" onChange={todoNameHandler} value={todoName}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Текст TODO</Form.Label>
                    <Form.Control type="text" placeholder="Введите текст" onChange={todoTextHandler} value={todoText}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => addTodoItem(event, todoName, todoText)}>
                    Добавить
                </Button>
            </Form>
        </div>
    )
}

export default AddTodoList;
