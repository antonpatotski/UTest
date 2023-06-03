import { useState } from "react";
import { Table } from "antd";
import { useUserStore } from "../../../store/users";
import { ResizableTitle } from "./resizableTitle";
import { useTableSearch } from "./useTableSearch";
import { useResizableColumns } from "./useResize";
import { getColumns } from "./columns";

import './table.scss';

export const UsersTable = () => {
  const getColumnSearchProps = useTableSearch();
  const { users, deleteUser, setUserForEdit } = useUserStore((state) => state);
  // const deleteUser = useUserStore((state) => state.deleteUser);
  const [columns, setColumns] = useState(getColumns(deleteUser, setUserForEdit).map(
    e => ({ ...e, ...(e.key !== 'action' ? getColumnSearchProps(e.key) : {}) }))
  );
  const updatedColumns = useResizableColumns(columns, setColumns);

  return (
    <Table
      columns={updatedColumns}
      components={{ header: { cell: ResizableTitle } }}
      dataSource={users}
      pagination={{ pageSize: 5}}
    />
  );
}