import styles from "./TodoItem.module.css"
import {Button, Card} from "react-bootstrap";
const TodoItem = ({name, text, done, id, deleteTodoItem}) => {
    const completeTodo = () => {
        deleteTodoItem(id)
    }
    return (
        <div>
            <Card style={{ width: '100%', marginTop: "5px", backgroundColor: "#fafafb"}}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="primary" onClick={completeTodo}>Выполнить</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TodoItem;
