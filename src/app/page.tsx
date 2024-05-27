'use client'

import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Option 1', 'Option 2'];

export default function Home() {
  return (
    <main>
      <Button variant="contained">Hello world</Button>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </main>
  );
}
