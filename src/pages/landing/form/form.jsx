import {Button, Form, Input, InputNumber} from 'antd';
import './form.scss';
import { useUserData } from "../../../hooks/useUserData";

export const CRUDForm  = () => {
  const [ users, setUsers ] = useUserData();
  const [form] = Form.useForm();
  const submit = (values) => {
    setUsers({ action: 'add', data: values });
    form.resetFields();
  };

  return (
    <Form
      className="form"
      name="basic"
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
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}