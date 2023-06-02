import {Button, Form, Input, InputNumber} from 'antd';
import './form.scss';

const onFinish = (values) => {
  console.log('Success:', values);
};
export const CRUDForm  = () => (
  <Form
    className="form"
    name="basic"
    layout="vertical"
    initialValues={{ remember: true }}
    onFinish={onFinish}
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
      name="adress"
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