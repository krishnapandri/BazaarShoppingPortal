import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, 
  Switch, IconButton, TextField, TablePagination, Toolbar, InputAdornment
} from "@mui/material";
import { Search, Edit, Delete, Visibility } from "@mui/icons-material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faForward,faBackward} from '@fortawesome/free-solid-svg-icons'

const MuiTable = ({ columns, data, onEdit, onDelete, onView, onToggle,page,rowsPerPage,setPage,setRowsPerPage,totalRowCount }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  // Sorting Handler
  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  // Sorting Logic
  const sortedData = [...data].sort((a, b) => {
    if (!orderBy) return 0;
    return order === "asc" ? a[orderBy]?.toString().localeCompare(b[orderBy]?.toString()) : b[orderBy]?.toString().localeCompare(a[orderBy]?.toString());
  });

  // Search Filter Logic
  const filteredData = sortedData.filter((row) => 
    columns.some(col =>row[col.id]?.toString().toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const SetNextPage = ()=>{
    if(data.length<totalRowCount)
      setPage(page+1);
  }

  return (
    <Paper sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
      {/* Search Bar */}
      <Toolbar>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <Search /> */}
                X
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>

      <TableContainer>
        <Table>
          {/* Table Head */}
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id} align={col.align || "left"}>
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={orderBy === col.id ? order : "asc"}
                    onClick={() => handleSort(col.id)}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell align="center"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {/* {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => 0)} */}
            {
              filteredData.map(row=> <TableRow key={row.id}>
                {columns.map((col) => <TableCell key={col.id} align={col.align || "left"}>
                                          {col.render ? col.render(row[col.id], row,onToggle) : row[col.id]}
                                      </TableCell>)}
                {/* Actions */}
                <TableCell align="center">
                  <IconButton onClick={() => onEdit(row)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => onView(row)} color="info">
                    <Visibility />
                  </IconButton>
                  <IconButton onClick={() => onDelete(row)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {/* <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPageOptions={[5, 10, 20]}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      /> */}

      <div className="w-101 d-flex gap-3 justify-content-center mt-3">
          <div><FontAwesomeIcon cursor={'pointer'} icon={faBackward}/></div>
          <div>{page}</div>
            {data.length<=0 ?  <div>No Results Found</div>:<div>Results {data.length} Of {totalRowCount}</div>}
          <div><FontAwesomeIcon cursor={'pointer'} icon={faForward} onClick={()=> SetNextPage()} /></div>
      </div>

    </Paper>
  );
};

export default MuiTable;

