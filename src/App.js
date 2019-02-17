import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Leaf from './components/Leaf';
import PersonDetails from './components/DetailsSection';
import Dialog from './components/Dialog';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Leaf />
      <Dialog>
        <PersonDetails />
      </Dialog>
      
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);