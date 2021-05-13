import React from 'react';
import { Grid, Box } from '@material-ui/core';

/*
  격자 식의 구성이 필요할 때 사용
  Grid는 기본적으로 12열 격자로 구성되어 있다.
  xs={} lg={} 등의 설정은 화면 크기가 xs일때 몇개의 열을 차지할 것인가에 대한 설정이다
  


*/
const Grids = () => (
  <>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          3
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          4
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          5
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          6
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          7
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Grids;
