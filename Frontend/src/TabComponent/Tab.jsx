import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import './Tab.css';

export default function TabComponent({Desc,Review}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ width: '100%', typography: 'body1' }}>
    //   <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
    //       <TabList onChange={handleChange} style={{color:'rgb(210, 63, 87)!important'}} aria-label="lab API tabs example">
    //         <Tab label="Item One" value="1" />
    //         <Tab label="Item Two" value="2" />
    //       </TabList>
    //     </Box>
    //     <TabPanel value="1">Item One</TabPanel>
    //     <TabPanel value="2">Item Two</TabPanel>
    //   </TabContext>
    // </Box>
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
            '& .MuiTab-root': {
              color: 'rgb(75, 86, 107)', // Unselected tab color
              '&.Mui-selected': {
                color: 'rgb(210, 63, 87)', // Selected tab color
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'rgb(210, 63, 87)', // Indicator color
            },
          }}
        >
          <Tab label="Description" value="1" />
          <Tab label={`Review(${3})`} value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <h5>Specification:</h5>
        <div className='m-0 specs' style={{width:'max-content',paddingLeft:'20px'}}>
            <p>Brand: Beats</p>
            <p>Model: S450</p>
            <p>Wireless Bluetooth Headset</p>
            <p>FM Frequency Response: 87.5 – 108 MHz</p>
            <p>Feature: FM Radio, Card Supported (Micro SD / TF)</p>
            <p>Made in China</p>
        </div>
        
      </TabPanel>
      <TabPanel value="2">
        <div>
          {
            [1,2,3,4].map(x=><ReviewCard/>)
          }
        </div>
        </TabPanel>
    </TabContext>
  </Box>
  );
}


import React from 'react';
import {Typography, Avatar, Rating } from '@mui/material';

function ReviewCard(){
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
        borderRadius: 2,
        maxWidth: 500
    }}
    >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
        src="/src/assets/person.webp"
        alt="Jannie Schumm"
        sx={{ width: 50, height: 50 }}
        />
        <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Jannie Schumm
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating value={4.7} precision={0.1} readOnly size="small" />
            <Typography variant="body2" sx={{ color: 'gray' }}>
            4.7
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
            • 4 years ago
            </Typography>
        </Box>
        </Box>
    </Box>

    <Typography variant="body2" sx={{ color: 'gray' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa
        id ut mattis. Facilisis vitae gravida egestas ac account.
    </Typography>
    </Box>
  );
};
 
