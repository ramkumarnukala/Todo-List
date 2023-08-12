import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";

function Completed(props) {
    return(
        <div className={styles.completed}>
            <h2>Completed</h2>
            <div>
                {
                    props.taskList?.map((task) => {
                        if(task.status === "completed") {
                            return(<TaskCard key={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} />);
                        }
                        return "";
                    })
                }
            </div>
        </div>
    );
}

export default Completed;
