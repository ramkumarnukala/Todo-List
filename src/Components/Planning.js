import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";

function Planning(props) {
    return(
        <div className={styles.planning}>
            <h2>Planning</h2>
            <div>
                {
                    props.taskList?.map((task) => {
                        if(task.status === "planning") {
                            return(<TaskCard key={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} />);
                        }
                        return "";
                    })
                }
            </div>
        </div>
    );
}

export default Planning;
