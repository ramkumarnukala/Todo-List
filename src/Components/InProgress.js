import TaskCard from "./TaskCard";
import styles from "./commonstyles.module.css";

function InProgress(props) {
    return(
        <div className={styles.inprogress}>
            <h2>InProgress</h2>
            <div>
                {
                    props.taskList?.map((task) => {
                        if(task.status === "inprogress") {
                            return(<TaskCard key={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} />);
                        }
                        return "";
                    })
                }
            </div>
        </div>
    );
}

export default InProgress;
