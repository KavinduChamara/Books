import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataGrid(props) {
  const { books } = props;

  return (
    <TableContainer className='mt-3 mb-3' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{
          backgroundColor: "grey", "& th": {
            fontWeight: "bold",
            color: "white"
          }
        }}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.year}</TableCell>
              <TableCell>{book.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}