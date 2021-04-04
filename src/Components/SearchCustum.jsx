import React from 'react';
import { makeStyles, Paper, InputBase,IconButton } from '@material-ui/core';
import {Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchCustum = ()=> {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Nom et prenom Electeur"
        inputProps={{ 'aria-label': 'Nom et prenom Electeur' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default  SearchCustum;
