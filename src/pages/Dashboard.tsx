import { Grid, Paper, Typography } from "@mui/material";
import api from "../api/axios";
import { useEffect } from "react";

const Dashboard = () => {
  const fetchOrganization = async () => {
    try {
      const response = await api
      .get("/company");
      console.log("API Response:", response.data); // confirm API works
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchOrganization();
  }, []);

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>

      <Grid size={{xs: 12}}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Organizations</Typography>
          {/* <Typography variant="h4">{organizations.length}</Typography> */}
        </Paper>
      </Grid>

      <Grid size={{xs: 12}}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Entities</Typography>
          {/* <Typography variant="h4">{entities.length}</Typography> */}
        </Paper>
      </Grid>

      <Grid size={{xs: 12}}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">API Status</Typography>
          <Typography variant="h4">
            {/* {organizations.length > 0 || entities.length > 0 ? "Working" : "Checking..."} */}
          </Typography>
        </Paper>
      </Grid>

    </Grid>
  );
};

export default Dashboard;