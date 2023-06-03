export const useResizableColumns = (columns, setColumns) => {
  const handleResize = (index) =>
    (_, { size }) => {
      const newColumns = [...columns];
      newColumns[index] = { ...newColumns[index], width: size.width };
      setColumns(newColumns);
    };
  const mergeColumns = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return mergeColumns;
}
