import styles from "./commonstyles.module.css";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCardForm from "./AddCardForm";

function TaskCard(props) {
    const [addCard, setAddCard] = useState(false);

    const deleteTask = () => {
        const newTaskList = props.taskList.filter((item) => item.id !== props.task.id);
        props.setTaskList(newTaskList);
    }

    return (
        <>
            {
                addCard && <AddCardForm addCard={addCard} setAddCard={setAddCard} taskId={props.task.id} taskList={props.taskList} setTaskList={props.setTaskList} />
            }
            <Card
                key={props.task.id}
                className={`${styles.cardwrapper} ${props.task.status === "planning" ? styles.planningcard : (props.task.status === "inprogress" ? styles.inprogresscard : styles.completedcard)}`}
            >
                <h4>{props.task.title}</h4>
                <p>{props.task.description}</p>
                <div className={`${styles.cardactions} ${props.task.status === "planning" ? styles.planningactions : (props.task.status === "inprogress" ? styles.inprogressactions : styles.completedactions)}`}>
                    <EditOutlined key="edit" onClick={() => setAddCard(true)} />
                    <DeleteOutlined key="delete" onClick={() => deleteTask()} />
                </div>
            </Card>
        </>
    );
}

export default TaskCard;
