import React from "react";
import { useTable } from "react-table";

const SimpleTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: "1px solid black", borderCollapse: "collapse" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  padding: "8px",
                  border: "1px solid black",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ border: "1px solid black" }}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ padding: "8px", border: "1px solid black" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "column1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "column2",
      },
      {
        Header: "Column 3",
        accessor: "column3",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        column1: "Row 1, Col 1",
        column2: "Row 1, Col 2",
        column3: "Row 1, Col 3",
      },
      {
        column1: "Row 2, Col 1",
        column2: "Row 2, Col 2",
        column3: "Row 2, Col 3",
      },
      {
        column1: "Row 3, Col 1",
        column2: "Row 3, Col 2",
        column3: "Row 3, Col 3",
      },
    ],
    []
  );

  return <SimpleTable columns={columns} data={data} />;
};

export default App;
