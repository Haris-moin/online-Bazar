import React from 'react';
import { Grid } from '@mui/material';
import Header from '../shared-components/header';
import Sidebar from '../components/sidebar';
import Dashboard from '../dasboard';

function Layout() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
