import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Step8 = ({clickHandler, questions}) => {
  const currentQuestion = questions[7];
  // Do you prefer plant based?
  const classes = useStyles();

  const buttonHandler = (e) => {
    e.preventDefault();
    clickHandler(e.target.value, "step8");
  };

  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" value="0" onClick={buttonHandler}>
            Yes
          </Button>
          <Button variant="outlined" color="primary" value="1" onClick={buttonHandler}>
            No
          </Button>
          <Button variant="outlined" color="primary" value="1" onClick={buttonHandler}>
            No Preference
          </Button>
        </div>
    </div>
  )
};

export default Step8;