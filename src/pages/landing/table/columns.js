export const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
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
];