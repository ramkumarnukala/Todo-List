import styles from "./commonstyles.module.css";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCardForm from "./AddCardForm";
import { Draggable } from "react-beautiful-dnd";

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
            <Draggable key={props.task.id} draggableId={props.task.id} index={props.index}>
                {(provided) => {
                    return(
                        <div
                            className={styles.cardcontainer}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
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
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
}

export default TaskCard;
