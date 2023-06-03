import { useEffect } from "react";
import { Button, Form, Input, InputNumber } from 'antd';
import { useUserStore } from "../../../store/users";

import './form.scss';

export const CRUDForm  = () => {
  const { addUser, userForEdit, users, editUser } = useUserStore((state) => state);
  const [form] = Form.useForm();

  useEffect(() => {
    if (userForEdit !== null) {
      form.setFieldsValue(users.find(e => e.key === userForEdit))
    }
  }, [ userForEdit, form, users ])
  const submit = (values) => {
    if (userForEdit !== null) {
      editUser({ ...values, key: userForEdit });
    } else {
      addUser(values);
    }

    form.resetFields();
  };

  return (
    <Form
      className="form"
      name="basic"
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={submit}
      autoComplete="off"
    >
      <Form.Item
        label="User name"
        name="name"
        rules={[ { required: true, message: 'Please fill!' } ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User age"
        name="age"
        rules={[ { required: true, message: 'Please fill!' } ]}
      >
        <InputNumber min={18} max={120} />
      </Form.Item>

      <Form.Item
        label="User address"
        name="address"
        rules={[ { required: true, message: 'Please fill!' } ]}
      >
        <Input />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-button">
          { userForEdit ? 'Edit' : 'Add' }
        </Button>
      </Form.Item>
    </Form>
  );
}