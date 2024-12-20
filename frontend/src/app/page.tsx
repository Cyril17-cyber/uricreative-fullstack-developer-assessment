"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ApplicationsTable from "@/components/ApplicationsTable";
import StatsChart from "@/components/StatsChart";
import Grid from "@mui/material/Grid2";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Use the dayjs adapter

interface Stats {
  byStatus: Record<string, number>;
  total: number;
}

export default function Home() {
  const [applications, setApplications] = useState([]); // State for applications
  const [stats, setStats] = useState<Stats | null>(null); // State for stats

  useEffect(() => {
    // Fetch applications
    axios
      .get("https://uricreative-dashboard-backend.onrender.com/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error("Error fetching applications:", err));

    // Fetch statistics
    axios
      .get(
        "https://uricreative-dashboard-backend.onrender.com/applications/stats"
      )
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      <Grid size={12}>
        <h1>Job Application Dashboard</h1>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ApplicationsTable applications={applications} />
        </LocalizationProvider>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        {stats && <StatsChart stats={stats} />}
      </Grid>
    </Grid>
  );
}
