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

const Step7 = ({clickHandler, questions}) => {
  const currentQuestion = questions[6];
  // Why do you exercise? 
  const classes = useStyles();

  const buttonHandler = (e) => {
    e.preventDefault();
    clickHandler(e.target.value, "step7");
  };

  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" value="0" onClick={buttonHandler}>
            Build Mass
          </Button>
          <Button variant="outlined" color="primary" value="3" onClick={buttonHandler}>
            Lose Weight
          </Button>
          <Button variant="outlined" color="primary" value="1" onClick={buttonHandler}>
            Tone Up
          </Button>
          <Button variant="outlined" color="primary" value="2" onClick={buttonHandler}>
            Increase Endurance
          </Button>
        </div>
    </div>
  )
};

export default Step7;