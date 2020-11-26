import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Step2 = ({formData, updateForm, questions}) => {
  const ages = [];
  for (var i = 18; i < 100; i++) {
    ages.push(i);
  }

  const currentQuestion = questions[1];
  // What is your age? 
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ages.map((age) => {
              return (
                <MenuItem value={age}>{age}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  )
};

export default Step2;