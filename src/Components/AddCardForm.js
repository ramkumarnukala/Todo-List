import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCardForm(props) {
    const [task, setTask] = useState({});
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        if(props?.taskId) {
            const taskData = props.taskList.map((item) => {
                if(props.taskId === item.id) {
                    return(
                        {
                            id: item.id,
                            title: values.title,
                            description: values.description,
                            status: values.status
                        }
                    );
                }
                return item;
            });

            props.setTaskList([...taskData]);
        } else {
            const newItem = {
                id: props?.taskId ?? uuidv4(),
                title: values.title,
                description: values.description,
                status: values.status
            }
            props.taskList.push(newItem);
            props.setTaskList([...props.taskList]);
        }
        props.setAddCard(false);
    }

    useEffect(() => {
        if(props?.taskId) {
            const taskData = props.taskList.filter((item) => props.taskId === item.id);
            setTask(...taskData);
        }

        form.setFieldsValue({
            title: task?.title,
            description: task?.description,
            status: task?.status
        });
    },[task, props, form]);

    return (
        <>
            <Modal
                forceRender
                title="Add Task"
                open={props.addCard}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            handleSubmit(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={() => props.setAddCard(false)}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="addTaskForm"
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title of Task!',
                            },
                        ]}
                    >
                        <Input placeholder="Task Title" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input placeholder="Task Description" type="textarea" />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name='status'
                        id='status'
                        rules={[
                            {
                                required: true,
                                message: 'Please input the status of Task!',
                            },
                        ]}
                        >
                        <Select
                            placeholder="Task Status"
                            style={{"textAlign": "start"}}
                            allowClear
                            >
                            <Select.Option value='planning'>Planning</Select.Option>
                            <Select.Option value='inprogress'>In-Progress</Select.Option>
                            <Select.Option value='completed'>Completed</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddCardForm;
