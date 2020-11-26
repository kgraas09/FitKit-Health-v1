import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Step1 = ({questions, clickHandler}) => {
  const currentQuestion = questions[0];
  const classes = useStyles();

  const buttonHandler = (e) => {
    e.preventDefault();
    clickHandler(e.target.value, "step1");
  };

  return (
    <div className="question">
      <div className="question-formatter">{currentQuestion}</div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" value="1" key="1" onClick={buttonHandler}>
            Male
          </Button>
          <Button variant="outlined" color="primary" value="2" key="2" onClick={buttonHandler}>
            Female
          </Button>
          <Button variant="outlined" color="primary" value="3" key="2" onClick={buttonHandler}>
            Non-binary
          </Button>
      </div>
    </div>
  )
};

export default Step1;