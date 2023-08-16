import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";
import { StrictModeDroppable as Droppable } from "./helpers/StrictModeDroppable";

function Completed(props) {
    return(
        <div className={styles.completed}>
            <h2>Completed</h2>
            <div className={styles.taskcontainer}>
                <Droppable key="completed" droppableId="completed">
                {(provided) => {
                        return(
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={styles.taskcontainer}
                            >
                                {
                                    props.taskList?.map((task, index) => {
                                        if(task.status === "completed") {
                                            return(<TaskCard provided={provided} index={index} key={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} />);
                                        }
                                        return "";
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
}

export default Completed;
