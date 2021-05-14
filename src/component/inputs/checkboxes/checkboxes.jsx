import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';

const Checkboxes = () => {
  const [state, setState] = useState({
    checkedH: true,
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  };

  return (
    <form>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checked={state.checkedH}
              checkedIcon={<Favorite />}
              name="checkedH"
              onClick={handleChange}
            />
          }
          label="Custom icon"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checkedA} />}
          label="Check it"
          name="checkedA"
          onClick={handleChange}
        />
      </FormGroup>
    </form>
  );
};

export default Checkboxes;
