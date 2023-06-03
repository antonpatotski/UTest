import { useState } from "react";
import { Table } from "antd";
import { useUserStore } from "../../../store/users";
import { ResizableTitle } from "./resizableTitle";
import { useTableSearch } from "./useTableSearch";
import { COLUMNS } from "./columns";

import './table.scss';
import {useResizableColumns} from "./useResize";

export const UsersTable = () => {
  const getColumnSearchProps = useTableSearch();
  const users = useUserStore((state) => state.users);
  const [columns, setColumns] = useState(COLUMNS.map(e => ({ ...e, ...getColumnSearchProps(e.key) })));
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