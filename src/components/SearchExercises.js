import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
//import { ImportContacts } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScollBar from './HorizontalScollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  
  const [bodyParts, setBodyParts] = useState([]);

  

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  
  const handleSearch = async () => {
    let exercisesData = [];
    if (search) {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', exerciseOptions);
      console.log(exercisesData); 
      
      const searchedExercises =  exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      //console.log(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);  
  }
};
  return (
    <Stack alignItems='center' mt='37px' p='20px' justifyContent='center'>
      <Typography  fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box>
        <TextField
        height= '76px'
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width: {lg: '800px', sm: '380px', xs: '240px'},
          backgroundColor: 'white',
          borderRadius: '40px',
        }} 
           
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Seach Exercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height:'56px',
            
            // position: 'absolute',
            // right: '0'
          }}
          onClick={handleSearch}
          
        >Search</Button>
      </Box>

      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};


export default SearchExercises