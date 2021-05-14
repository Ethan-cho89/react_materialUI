import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.success.main,
  },
}));

const Containers = () => {
  const classes = useStyles();

  return (
    <>
      <Container
        maxWidth="xs"
        disableGutters={false}
        className={classes.container}
      >
        <Typography variant="h6" color="primary">
          Fluid
        </Typography>
      </Container>

      <br />

      <Container fixed className={classes.container}>
        <Typography variant="h6" color="secondary">
          Fixed
        </Typography>
      </Container>
    </>
  );
};

export default Containers;
