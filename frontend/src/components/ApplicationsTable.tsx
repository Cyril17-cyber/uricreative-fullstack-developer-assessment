"use client";
import {
  Box,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs"; // Import day
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

interface JobApplication {
  id: string;
  jobTitle: string;
  companyName: string;
  status: string;
  dateApplied: string; // Format: YYYY-MM-DD
}

const ApplicationsTable = ({
  applications,
}: {
  applications: JobApplication[];
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState("all");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  // Filter applications by status
  //   const filteredApplications = applications.filter((app) =>
  //     statusFilter === "all" ? true : app.status === statusFilter
  //   );

  // Filter applications based on status and date range
  const filteredApplications = applications.filter((app) => {
    const appDate = dayjs(app.dateApplied); // Convert appDate to Dayjs object

    // Status filter logic
    const statusMatch = statusFilter === "all" || app.status === statusFilter;

    // Date range filter logic
    const dateMatch =
      (!startDate || appDate >= startDate) && (!endDate || appDate <= endDate);

    return statusMatch && dateMatch;
  });

  // Handle pagination
  const handlePageChange = (_: any, newPage: number) => setPage(newPage);
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* Filters Section */}
      <Box display="flex" gap={2} marginBottom={2} flexWrap="wrap">
        {/* Filter Dropdown */}
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ marginTop: "8px" }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="accepted">Accepted</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>

        {/* Date Range Filters */}
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newDate) => setStartDate(newDate)}
          />
        </DemoContainer>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newDate) => setEndDate(newDate)}
          />
        </DemoContainer>
      </Box>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date Applied</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredApplications
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.jobTitle}</TableCell>
                <TableCell>{app.companyName}</TableCell>
                <TableCell>{app.status}</TableCell>
                <TableCell>{app.dateApplied}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredApplications.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default ApplicationsTable;
