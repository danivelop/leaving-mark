'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }; 

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="global navigation">
        <Tab className="tab" label="post" />
        <Tab className="tab" label="project" />
        <Tab className="tab" label="profile" />
      </Tabs>
      <style jsx>{`
        .tab {
          flex: 1;
        }
      `}</style>
    </Box>
  )
}

export default Navigation;
