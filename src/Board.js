import React, { useEffect, useState } from "react";
import AddCardForm from "./Components/AddCardForm"
import { Button, Col, Row } from "antd";
import Planning from "./Components/Planning";
import InProgress from "./Components/InProgress";
import Completed from "./Components/Completed";

function Board() {
    const [addCard, setAddCard] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        localStorage.setItem("TaskList", JSON.stringify(taskList));
    },[taskList, setTaskList])

    return(
        <>
            {
                addCard && <AddCardForm addCard={addCard} setAddCard={setAddCard} taskList={taskList} setTaskList={setTaskList} />
            }
            <p>Click on <b>Add Task</b> below to add new task into the Task list.</p>
            <Button onClick={()=>setAddCard(!addCard)}>Add Task</Button>
            <div style={{padding: "0px 30px", borderRadius: "8px"}}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                        <Planning taskList={taskList} setTaskList={setTaskList} />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <InProgress taskList={taskList} setTaskList={setTaskList} />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Completed taskList={taskList} setTaskList={setTaskList} />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Board;
