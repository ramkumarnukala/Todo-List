import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";
import { StrictModeDroppable as Droppable } from "./helpers/StrictModeDroppable";

function Planning(props) {
    return(
        <div className={styles.planning}>
            <h2>Planning</h2>
            <div className={styles.taskcontainer}>
                <Droppable key="planning" droppableId="planning">
                    {(provided) => {
                        return(
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={styles.taskcontainer}
                            >
                                {
                                    props.taskList?.map((task, index) => {
                                        if(task.status === "planning") {
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

export default Planning;
