import React, { FC } from 'react';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Chip, Grid, Typography } from '@mui/material';
import { removeTransaction } from '../store/transactionsReducer';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionsDataGrid:FC = () => {
  const dispatch = useAppDispatch()

  const transactions = useAppSelector((state: RootState) => state.transactions);
  const categories = useAppSelector((state: RootState) => state.categories);

  const columns: GridColDef[] = [
    {
      field: 'label',
      headerName: 'Label',
      flex: 3,
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      flex: 1,
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const selectedCategory = categories.find(
          (category) => category.id === params.row.category
        );

        return selectedCategory ? (
          <Chip key={selectedCategory?.id} label={selectedCategory?.label} />
        ) : (
          <div />
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => {
        return (
          <IconButton
            aria-label='delete'
            onClick={() => dispatch(removeTransaction(params.id))}
          >
            <DeleteIcon />
          </IconButton>
        )
      }
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5'>
          Transaction list
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          hideFooterPagination={!transactions.length}
          disableSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          autoHeight
        />
      </Grid>
    </Grid>
  );
};

export default TransactionsDataGrid;
