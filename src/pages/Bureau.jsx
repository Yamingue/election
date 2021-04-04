import { Container, Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react'
import { Link } from 'react-router-dom';
import bureau from './data'

const dataf = [
    'dembe 1',
    'dembe2',
    'walia 1',
    'walia 2',

]

export default class Bureau extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            data: []
        }

        this.findBureau= this.findBureau.bind(this)
    }
findBureau(text){
    let find = String(text);
    const d =  dataf.filter(el=>{
       console.log( find.indexOf(el) )
        //console.log((el+ " ").search(text) )
        return  el.indexOf(find) == -1
    })
    console.log(d )
    this.setState({ data :d })
}
    render() {
        const data = [];
        return (
            <Container>
                <Link to='/' style={{marginBottom: '10px', textDecoration: 'none'}}>
                    <IconButton color='primary'>
                        <Icon className="fas fa-arrow-alt-circle-left" /> Retour
                </IconButton>
                </Link>
                <Grid container spacing={6}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyItems:'center',alignContent:'center'}}>
                        <TextField 
                        onChange={this.findBureau}
                        id='recherche'
                        label='Recherche'
                        placeholder='Ville ou quartier'
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        />
                    </Grid>
                    {
                        this.state.data.map(k=><Grid item xs={6} key={k}>{k}</Grid>)
                    }
                </Grid>
            </Container>
        );
    }
}