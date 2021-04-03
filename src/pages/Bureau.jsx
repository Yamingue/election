import { Container, Grid, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react'
import { Link } from 'react-router-dom';
import ListeBureau from '../Components/ListeBureau';
import bureau from './data'

export default class Bureau extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Link to='/' style={{marginBottom: '10px', textDecoration: 'none'}}>
                    <IconButton color='primary'>
                        <Icon className="fas fa-arrow-alt-circle-left" /> Retour
                </IconButton>
                </Link>
                <Grid container spacing={6}>
                    {
                        bureau.map(k=><Grid item xs={6} key={k.id}><ListeBureau ville={k} /></Grid>)
                    }
                </Grid>
            </Container>
        );
    }
}