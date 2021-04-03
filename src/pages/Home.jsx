import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { Accessibility, AssignmentIndTwoTone, EventNote, HowToVote } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Grid container spacing={6} style={{ marginTop: '10px' }} alignItems='center'>
                    
                    <Grid item xs={6} >
                        <Link to='/bureau' style={{ textDecoration: "none" }}>
                        <Card>
                            <CardContent >
                                <Typography variant='h5' align='center'>
                                    <HowToVote style={{ fontSize: '50px' }} /> <br />
                                    Bureau de vote
                                </Typography>

                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                    <Link to='/partis' style={{ textDecoration: "none" }}>
                        <Card>
                            <CardContent >
                                <Typography variant='h5' align='center'>
                                    <AssignmentIndTwoTone style={{ fontSize: '50px' }} /> <br />
                                    Partis pollitique
                                </Typography>

                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                    <Link to='/candidats' style={{ textDecoration: "none" }}>
                        <Card>
                            <CardContent >
                                <Typography variant='h5' align='center'>
                                    <Accessibility style={{ fontSize: '50px' }} /> <br />
                                    Candidat
                                </Typography>

                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={6}>
                    <Link to='/resultats' style={{ textDecoration: "none" }}>
                        <Card>
                            <CardContent >
                                <Typography variant='h5' align='center'>
                                    <EventNote style={{ fontSize: '50px' }} /> <br />
                                    Résultats
                                </Typography>

                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}