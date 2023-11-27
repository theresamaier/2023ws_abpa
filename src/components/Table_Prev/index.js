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
                  padding: "14px",
                  width: "8px",
                  border: "1px solid white",
                  backgroundColor: "rgb(75, 192, 192)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={rowIndex} // Adding key prop here
              style={{ border: "1px solid black" }}
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  {...cell.getCellProps()}
                  key={cellIndex} // Adding key prop here
                  style={{
                    padding: "14px",
                    border:
                      cell.column.id === "column1"
                        ? "1px solid white"
                        : "1px solid rgb(75, 192, 192)",
                    backgroundColor:
                      cell.column.id === "column1"
                        ? "rgb(75, 192, 192)"
                        : "white",
                    color: cell.column.id === "column1" ? "white" : "#368a8a",
                    fontWeight:
                      cell.column.id === "column1" ? "bold" : "normal",
                    fontSize: "15px",
                  }}
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
        Header: " ",
        accessor: "column1", // accessor is the "key" in the data
      },
      {
        Header: "Women",
        accessor: "column2",
      },
      {
        Header: "Men",
        accessor: "column3",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        column1: "Low-risk consumption",
        column2: "< 12g pure alcohol per day",
        column3: "< 24 g pure alcohol per day",
      },
      {
        column1: "Risky consumption",
        column2: "> 12g pure alcohol per day",
        column3: "> 24 g pure alcohol per day",
      },
      {
        column1: "Dangerous consumption",
        column2: "> 40-80g pure alcohol per day",
        column3: "> 60-120g pure alcohol per day",
      },
      {
        column1: "High consumption",
        column2: "> 80 g pure alcohol per day",
        column3: "> 120 g pure alcohol per day",
      },
      {
        column1: "Episodic binge drinking",
        column2:
          "Consumption of 4 or more small alcoholic drinks (12 g alcohol each) on a drinking occasion",
        column3:
          "Consumption of 5 or more small alcoholic drinks (12 g alcohol each) on a drinking occasion",
      },
    ],
    []
  );

  return <SimpleTable columns={columns} data={data} />;
};

export default App;
