import React from 'react';
import Grid from '@material-ui/core/grid';
import Box from '@material-ui/core/box';
import Hidden from '@material-ui/core/hidden';
const Grids1 = () => {
  const message = 'hello';

  return (
    <Grid container justify="center" spacing={1}>
      <Hidden only="xl">
        <Grid item xs={5} md={4} lg={12}>
          <Box bgcolor="info.main" p={3}>
            {message}1
          </Box>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid item xs={5} md={4} lg={12}>
          <Box bgcolor="info.main" p={3}>
            {message}2
          </Box>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid item xs={2} md={4} lg={12}>
          <Box bgcolor="info.main" p={3}>
            {message}3
          </Box>
        </Grid>
      </Hidden>
      <Grid container item>
        <Grid item xs={12}>
          <Box bgcolor="info.main" p={3}>
            {message}4
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Grids1;
