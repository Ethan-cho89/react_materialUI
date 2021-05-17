import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';

const TextField3 = () => {
  const currencies = [
    { value: 'WON', label: 'W' },
    { value: 'EUR', label: '€' },
    { value: 'BTC', label: '฿' },
  ];

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const [currency, setCurrency] = useState('WON');

  return (
    <div>
      <TextField select label="Select" value={currency} onChange={handleChange}>
        {currencies.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
// TextField는 select로도 사용할 수 있다.
export default TextField3;
