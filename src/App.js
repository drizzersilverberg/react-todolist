import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Todo from './components/Todo'

// material-ui components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="row"
              spacing={16}
              className={classes.demo}
            >
              <Grid
                item
                xs={10}
                sm={8}
                md={8}
                lg={6}
              >
                <Todo/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
