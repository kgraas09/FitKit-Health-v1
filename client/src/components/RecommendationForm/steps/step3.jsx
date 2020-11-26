import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Step3 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[2];
  // What is your current height and weight?
  const heightArray = [];
  const weightArray = [];

  for (var i = 48; i < 85; i++) {
    heightArray.push(i);
  }
  for (var j = 75; j < 300; j++) {
    weightArray.push(j);
  }

  const classes = useStyles();

  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Height</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            <option aria-label="None" value="" />
            <optgroup label="Height">
            {heightArray.map((height) => {
              return (
                <option value={height}>{height} in</option>
              )
            })}
            </optgroup>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Weight</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            <option aria-label="None" value="" />
            <optgroup label="Weight">
            {weightArray.map((weight) => {
              return (
                <option value={weight}>{weight} lbs</option>
              )
            })}
            </optgroup>
          </Select>
        </FormControl>
      </div>
    </div>
  )
};

export default Step3;