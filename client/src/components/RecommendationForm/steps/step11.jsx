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

const Step11 = ({clickHandler, questions}) => {
  const currentQuestion = questions[10];
  // When do you usually take protein powder? 
  const classes = useStyles();

  const buttonHandler = (e) => {
    e.preventDefault();
    clickHandler(e.target.value, "step11");
  };
  
  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" value="0" onClick={buttonHandler}>
            Morning
          </Button>
          <Button variant="outlined" color="primary" value="1" onClick={buttonHandler}>
            Mid-Day
          </Button>
          <Button variant="outlined" color="primary" value="2" onClick={buttonHandler}>
            Evening 
          </Button>
        </div>
    </div>
  )
};

export default Step11;