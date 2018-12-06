import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Todo from './components/Todo'

// material-ui components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  rootGrid: {
    flexGrow: 1,
  },
  contentGrid: {
    height: 240,
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="row"
              spacing={16}
              className={classes.contentGrid}
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
