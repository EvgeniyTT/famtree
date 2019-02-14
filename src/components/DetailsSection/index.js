import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './styles.css';

import { data } from '../../data';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {data.map(data=>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>My age is - {data.age}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details-wrapper">
              {Object
                .keys(data)
                .map(prop => 
                  (<div key={prop}>
                    <span className="title">{prop}: </span>
                    <span className="value">{Array.isArray(data[prop]) ? data[prop].join(', ') : data[prop]}</span>
                  </div>)
                )
              }
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}

    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);