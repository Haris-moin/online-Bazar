import React from 'react';
import { Grid } from '@mui/material';
import Header from '../shared-components/header';
import Sidebar from '../components/sidebar';
import Dashboard from '../dasboard';

function Layout() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2.5}>
          <Sidebar />
        </Grid>
        <Grid item xs={9.5}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
