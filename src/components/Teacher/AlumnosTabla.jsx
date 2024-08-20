import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(1, 'Andres Jorge', 'Sarmiento Diaz', 'andres@gmail.com'),
  createData(2, 'Andres Jorge', 'Sarmiento Diaz', 'andres@gmail.com'),
  createData(3, 'Andres Jorge', 'Sarmiento Diaz', 'andres@gmail.com'),
  createData(4, 'Andres Jorge', 'Sarmiento Diaz', 'andres@gmail.com'),
  createData(5, 'Andres Jorge', 'Sarmiento Diaz', 'andres@gmail.com'),
];

export default function AlumnosTabla() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Nombres</TableCell>
            <TableCell align="center">Apellidos</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
