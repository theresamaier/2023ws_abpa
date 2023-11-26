import React from "react";
import { useTable } from "react-table";

const SimplifiedTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: "1px solid black", borderCollapse: "collapse" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <React.Fragment key={headerGroup.id}>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: "14px",
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
            {/* Entferne die Zeile für untergeordnete Header */}
          </React.Fragment>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ border: "1px solid black" }}>
              {row.cells.map((cell, index) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: "14px",
                    border:
                      index === 0
                        ? "1px solid white"
                        : "1px solid rgb(75, 192, 192)",
                    backgroundColor:
                      index === 0 ? "rgb(75, 192, 192)" : "white",
                    color: index === 0 ? "white" : "#368a8a",
                    fontWeight: index === 0 ? "bold" : "normal",
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
        Header: " Alcohol",
        accessor: "column1",
      },
      {
        Header: "Men",
        accessor: "column4a",
        columns: [
          { Header: "n", accessor: "column4a1" },
          { Header: "%", accessor: "column4a2" },
        ],
      },
      {
        Header: "Women",
        accessor: "column4b",
        columns: [
          { Header: "n", accessor: "column4b1" },
          { Header: "%", accessor: "column4b2" },
        ],
      },
      {
        Header: "Total",
        accessor: "column5a",
        columns: [
          { Header: "n", accessor: "column5a1" },
          { Header: "%", accessor: "column5a2" },
        ],
      },
      {
        Header: "Extrapolation",
        accessor: "column5b",
        columns: [{ Header: "N", accessor: "column5b1" }],
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        column1: "Consumption prevalence",
        // Die Daten für die entfernten Spalten wurden ebenfalls angepasst
        column4a: "Details A",
        column4a1: "2987",
        column4a2: "74,8",
        column4b: "Details B",
        column4b1: "3561",
        column4b2: "66,0",
        column5a: "Details C",
        column5a1: "6557",
        column5a2: "70,5",
        column5b: "Details D",
        column5b1: "36,1 Mio.",
        column5b2: "Details D2",
      },
      {
        column1: "Episodic binge drinking",
        // Die Daten für die entfernten Spalten wurden ebenfalls angepasst
        column4a: "Details A",
        column4a1: "1319",
        column4a2: "41,9",
        column4b: "Details B",
        column4b1: "919",
        column4b2: "23,3",
        column5a: "Details C",
        column5a1: "2239",
        column5a2: "33,3",
        column5b: "Details D",
        column5b1: "12,0 Mio.",
        column5b2: "Details D2",
      },
      {
        column1: "Consumption of risky quantities ",
        column4a: "Details A",
        column4a1: "595",
        column4a2: "21,2",
        column4b: "Details B",
        column4b1: "815",
        column4b2: "22,9",
        column5a: "Details C",
        column5a1: "1410",
        column5a2: "21,9",
        column5b: "Details D",
        column5b1: "7,9 Mio.",
        column5b2: "Details D2",
      },
    ],
    []
  );

  return <SimplifiedTable columns={columns} data={data} />;
};

export default App;
