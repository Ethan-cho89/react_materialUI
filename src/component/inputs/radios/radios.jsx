import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@material-ui/core';
const Radios = () => {
  const [selectedRadio, setSelectedRadio] = useState('a');
  const [value, setValue] = useState('male');

  const handleChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleGender = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio
        checked={selectedRadio === 'a'}
        value="a"
        id="radio_a"
        onChange={handleChange}
      />
      <label htmlFor="radio_a">a option</label>
      <Radio
        checked={selectedRadio === 'b'}
        value="b"
        id="radio_b"
        color="primary"
        onChange={handleChange}
      />
      <label htmlFor="radio_b">b option</label>
      <Radio
        checked={selectedRadio === 'c'}
        value="c"
        color="default"
        id="radio_c"
        onChange={handleChange}
      />
      <label htmlFor="radio_c">c option</label>
      <Radio
        checked={selectedRadio === 'd'}
        value="d"
        id="radio_d"
        size="small"
        onChange={handleChange}
      />
      <label htmlFor="radio_d">d option</label>

      <br />
      <br />
      <br />

      {/* 코드의 길이를 봤을때엔 RadioGroup을 사용하는게 더 효율적*/}
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup name="gender1" value={value} onChange={handleGender}>
          {/* FormControlLabel은 라벨이 지정한 form을 컨트롤 할 수 있는 요소인듯 */}
          <FormControlLabel value="male" control={<Radio />} label="male" />
          <FormControlLabel value="female" control={<Radio />} label="female" />
          <FormControlLabel value="other" control={<Radio />} label="other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Radios;
