import React, { FC, useState } from 'react';

import { useAppDispatch } from '../store/hooks';
import { addCategory } from '../store/categoriesReducer';

import { TextField, Button, Grid } from '@mui/material';

const CategoriesForm:FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');

  const createNewCategory = () => {
    const id = Date.now();
    const category = {
      id,
      label: value,
    };

    dispatch(addCategory(category));

    setValue('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='outlined-basic'
          label='Category'
          variant='outlined'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant='contained'
          onClick={() => createNewCategory()}
        >
          Add category
        </Button>
      </Grid>
    </Grid>
  );
};

export default CategoriesForm;
