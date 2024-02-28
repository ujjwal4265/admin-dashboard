import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Team = () => {
  const employeeData = [
    {
      name: 'Emma Roberts',
      image: '/img/girl2.jpeg',
      designation: 'UI Designer',
      role: 'Artist is a term applied to a person who engages in an',
      role2: 'activity deemed to be an art',
    },
    {
      name: 'William Pearce',
      image: '/img/man2.jpeg',
      designation: 'Boss',
      role: 'Artist is a term applied to a person who engages in an',
      role2: 'activity deemed to be an art',
    },
    {
      name: 'Ivana Flow',
      image: '/img/girl3.jpeg',
      designation: 'Athelete',
      role: 'Artist is a term applied to a person who engages in an',
      role2: 'activity deemed to be an art',
    },
    {
      name: 'Marquez Garcia',
      image: '/img/man3.jpeg',
      designation: 'JS Developer',
      role: 'Artist is a term applied to a person who engages in an',
      role2: 'activity deemed to be an art',
    },
  ];

  return (
    <>
      <Box sx={{ background: '#000000bf', marginTop: '3rem', color: 'white', inset: '20px', padding: '30px' }}>
        <Box sx={{ color: 'white', marginLeft: '6rem' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 'xx-large' }}>The Executive Team</Typography>
          <Typography sx={{ color: 'ffffffa3' }}>
            There is nothing I really wanted to do in life that I was not able to get good at that is my skill.
          </Typography>
        </Box>
        <Grid container spacing={5} sx={{ paddingTop: '30px' }}>
          {employeeData.map((item, index) => (
            <Grid key={index} item xs={6} sx={{ margin: '50px 0px', alignItems: 'center', justifyContent: 'center' }}>
              <Card
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  overflow: 'unset',
                  '@media only screen and (min-width: 1440px)': {
                    margin: "0px 7rem"
                  }
                }}
              >
                <Card
                  sx={{ marginLeft: "3%", marginTop: "-20px", boxShadow: "none", display: 'inline-block', top: '-17px', left: '14px', overflow: 'unset' }}
                >
                  <Image src={item.image} alt="team card" width={112} height={124} style={{ borderRadius: '3px' }} />
                </Card>
                <Box sx={{ padding: '10px', marginLeft: '20px' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000c4' }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: '#009eff', fontWeight: 'bold' }}>{item.designation}</Typography>
                  <Typography sx={{ color: '#000000a1' }}>{item.role}</Typography>
                  <Typography sx={{ color: '#000000a1' }}>{item.role2}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Team;
