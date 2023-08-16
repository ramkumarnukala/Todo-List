import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";
import { StrictModeDroppable as Droppable } from "./helpers/StrictModeDroppable";

function InProgress(props) {
    return(
        <div className={styles.inprogress}>
            <h2>InProgress</h2>
            <div className={styles.taskcontainer}>
                <Droppable key="inprogress" droppableId="inprogress">
                {(provided) => {
                        return(
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={styles.taskcontainer}
                            >
                                {
                                    props.taskList?.map((task, index) => {
                                        if(task.status === "inprogress") {
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

export default InProgress;
