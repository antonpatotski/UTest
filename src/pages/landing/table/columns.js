import { NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../../../constants/routes";
import {Button, Space} from "antd";

export const getColumns = (deleteUser, setUserForEdit) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (text, record) => <NavLink to={`${ROUTE_PATH.itemInfo.path}/${record.key}`}>{text}</NavLink>,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    width: 200,
    render: (text, record) => (
      <Space>
        <Button onClick={() => setUserForEdit(record.key)} type="primary">Edit</Button>
        <Button onClick={() => deleteUser(record.key)} type="primary" danger>Delete</Button>
      </Space>
    )
  },
];