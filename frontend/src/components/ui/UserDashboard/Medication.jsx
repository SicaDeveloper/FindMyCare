import React from "react";
import { Box, Typography, Stack, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const columns = [
  { id: "name", label: "Name" },
  { id: "dosage", label: "Dosage" },
  { id: "frequency", label: "Frequency" },
  { id: "startDate", label: "Start Date" },
  { id: "endDate", label: "End Date" },
];

const medicationRows = [
  {
    name: "Ibuprofen",
    dosage: "200mg",
    frequency: "Once a day",
    startDate: "2022-01-01",
    endDate: "2022-01-31",
  },
  {
    name: "Acetaminophen",
    dosage: "500mg",
    frequency: "Twice a day",
    startDate: "2022-02-01",
    endDate: "2022-02-28",
  },
];

const Medication = () => {
  return (
    <Box>
      <Typography variant="h6">Medication</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {medicationRows.map((row) => (
              <TableRow key={row.name}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Medication;
