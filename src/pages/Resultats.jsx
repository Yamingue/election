import { Box, Card, CardContent, CardHeader, Container, Grid, Icon, IconButton, LinearProgress, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

export default class Resultats extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Link to='/' style={{ marginBottom: '10px', textDecoration: 'none' }}>
                    <IconButton color='primary'>
                        <Icon className="fas fa-arrow-alt-circle-left" /> Retour
                </IconButton>
                </Link>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={'Résultats Présidentielles'}
                            />
                            
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={'Résultats législatives'}
                            />
                         
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={'Résultats communales'}
                            />
                            
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}