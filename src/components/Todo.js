import React from 'react'
import PropTypes from 'prop-types'

// material-ui components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  todoPaper: {
    height: '100%',
    padding: theme.spacing.unit *2,
  }
});

class Todo extends React.Component {
  render () {
    const {classes} = this.props;
    return (
      <div className="">
        <Paper className={classes.todoPaper}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod numquam, quaerat facilis veniam beatae harum repellat perferendis sit, dolorem, quas. Exercitationem a quidem, repudiandae totam praesentium, eius inventore ipsum!
        </Paper>
      </div>
    )
  }
}

Todo.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todo);
