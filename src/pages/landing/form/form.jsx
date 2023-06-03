import { Button, Form, Input, InputNumber } from 'antd';
import { useUserStore } from "../../../store/users";

import './form.scss';

export const CRUDForm  = () => {
  const addUser = useUserStore((state) => state.addUser);
  const [form] = Form.useForm();
  const submit = (values) => {
    addUser(values);
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
          Set data
        </Button>
      </Form.Item>
    </Form>
  );
}