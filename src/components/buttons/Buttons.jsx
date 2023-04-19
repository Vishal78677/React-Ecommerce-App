import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import './button.css';

const Buttons = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className='category'>
      <div className='select-category'>
        <div>
          <p>Filter By Category : </p>
        </div>
        <FormControl fullWidth>
          <div></div>
          <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>
            Category
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Age'
            onChange={handleChange}
            style={{
              borderColor: 'white',
              outline: 'none',
              width: '17rem',
              border: '1px solid white',
              color: 'white',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </section>
  );
};

export default Buttons;
