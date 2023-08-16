import React, { useEffect, useState } from "react";
import AddCardForm from "./Components/AddCardForm"
import { Button, Col, Row } from "antd";
import Planning from "./Components/Planning";
import InProgress from "./Components/InProgress";
import Completed from "./Components/Completed";
import { DragDropContext } from 'react-beautiful-dnd';

function Board() {
    const [addCard, setAddCard] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;

        taskList.forEach((task) => {
            if(task.id === result.draggableId) {
                task.status = destination.droppableId;
            }
        })

        setTaskList([...taskList]);
        console.log(source,destination)
    }

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
            <DragDropContext onDragEnd={onDragEnd}>
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
            </DragDropContext>
        </>
    );
}

export default Board;
