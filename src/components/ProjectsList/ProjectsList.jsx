import * as React from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditButton from "../Button/Button";

function createData(id, name, startDate, endDate, projectManager) {
  return { id, name, startDate, endDate, projectManager };
}

const rows = [
  createData("project_a", "Project A", "12-02-2023", "13-03-2024", "John Doe"),
  createData("project_b", "Project B", "12-02-2023", "13-03-2024", "John Doe"),
  createData("project_c", "Project C", "12-02-2023", "13-03-2024", "John Doe"),
];

export default function ProjectsList() {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/projects/projectId`);
    // navigate(`/projects/${id}/edit`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell align="right">Project name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Project Manager</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.projectManager}</TableCell>
              <TableCell align="right">
                <EditButton onClick={() => handleOnClick(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
