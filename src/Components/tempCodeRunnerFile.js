import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

function AddCardForm(props) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log(values)
    }

    useEffect(() => {
        form.setFieldsValue({
            id: undefined,
            title: undefined,
            description: undefined,
            status: undefined
        });
    });

    return(
        <>
            <Modal
                forceRender
                title="Add Task"
                open={props.addCard}
                onOk={() => {
                    setConfirmLoading(true);
                    form
                      .validateFields()
                      .then(values => {
                        form.resetFields();
                        handleSubmit(values);
                      })
                      .catch(info => {
                        console.log('Validate Failed:', info);
                      });
                    setConfirmLoading(false);
                  }}
                confirmLoading={confirmLoading}
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
                        message: 'Please input the title of collection!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddCardForm;
