import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Container, InnerContainer } from "../../styles/Commons";
import Side from "../sidebar/Sidebar";
import {SpeakerHeading} from "./styles/Speakers"

const columns = [
  { id: "name", label: "Name", minWidth: 190 },
  { id: "email", label: "Email Address", minWidth: 190 },
  {
    id: "contact",
    label: "Contact Number",
    minWidth: 150,
    align: "left",
  },
  // {
  //   id: "size",
  //   label: "Size\u00a0(km\u00b2)",
  //   minWidth: 170,
  //   align: "right",
  //   format: value => value.toLocaleString("en-US")
  // },
  {
    id: "join",
    label: "Joined Date",
    minWidth: 100,
    align: "left",
  }
];

function createData(name, email, contact, join) {
  return { name, email, contact, join };
}

const rows = [
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),
  createData("Neeraj Pandey", "dummyemail@mail.com", '+918677463774', '2020-05-29'),
  createData("Ajay Devgan", "dummyemail@mail.com", '+918977663774', '2020-05-19'),
  createData("Divyam Singh", "dummyemail@mail.com", '+919977663084', '2020-06-19'),

];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function Speakers() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const useForceUpdate = () => useState()[1];
  const forceUpdate = useForceUpdate();

  useEffect(() => {
      forceUpdate()
      console.log('rendering')
  })


  return (
    <Container>
      <Side />
      <InnerContainer>

        <Paper className={classes.root} id = "outer_table2">
        <SpeakerHeading>
        SPEAKERS
        </SpeakerHeading>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        id="table_row"
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </InnerContainer>
    </Container>
  );
}
