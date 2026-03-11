import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Total Sales</Typography>
          <Typography variant="h4">$1200</Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Products</Typography>
          <Typography variant="h4">320</Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Orders</Typography>
          <Typography variant="h4">45</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;