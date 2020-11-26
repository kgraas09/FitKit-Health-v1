import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Step6 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[5];
  // What type of exercises?
  const classes = useStyles();
  const [state, setState] = React.useState({
    running: true,
    swimming: false,
    weightlifting: false,
    hiking: false,
    yoga: false,
    pilates: false,
    sports: false,
    dancing: false,
    climbing: false,
    other: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Running, Swimming, Weightlifting, Hiking, Yoga, Pilates, Sports, Dancing, Climbing, Other } = state;
  
  return (
    <div>
      <div className="question-formatter">{currentQuestion}</div>
        <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Your Method!</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={Running} onChange={handleChange} name="running" />}
              label="Running"
            />
            <FormControlLabel
              control={<Checkbox checked={Swimming} onChange={handleChange} name="swimming" />}
              label="Swimming"
            />
            <FormControlLabel
              control={<Checkbox checked={Hiking} onChange={handleChange} name="hiking" />}
              label="Hiking"
            />
            <FormControlLabel
              control={<Checkbox checked={Yoga} onChange={handleChange} name="yoga" />}
              label="Yoga"
            />
            <FormControlLabel
              control={<Checkbox checked={Pilates} onChange={handleChange} name="pilates" />}
              label="Pilates"
            />
            <FormControlLabel
              control={<Checkbox checked={Sports} onChange={handleChange} name="sports" />}
              label="Sports"
            />
            <FormControlLabel
              control={<Checkbox checked={Dancing} onChange={handleChange} name="dancing" />}
              label="Dancing"
            />
            <FormControlLabel
              control={<Checkbox checked={Climbing} onChange={handleChange} name="climbing" />}
              label="Climbing"
            />
            <FormControlLabel
              control={<Checkbox checked={Weightlifting} onChange={handleChange} name="weightlifting" />}
              label="Weightlifting"
            />
            <FormControlLabel
              control={<Checkbox checked={Other} onChange={handleChange} name="other" />}
              label="Other"
            />
          </FormGroup>
          <FormHelperText>Please select at least one option.</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
};

export default Step6;