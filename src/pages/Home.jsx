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
                {/*containeur globale de cette page*/}
                <Grid container spacing={6} style={{ marginTop: '10px' }} alignItems='center'>
                    {/*grille bureau*/}
                    <Grid item xs={6} >
                        <Link to='/bureau' style={{ textDecoration: "none" }}>
                        <Card style={{ backgroundColor: 'blue', color:'white'}}>
                            <CardContent >
                                <Typography variant='h5' align='center'>
                                    <HowToVote style={{ fontSize: '50px' }} /> <br />
                                    Bureau de vote
                                </Typography>

                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    {/*fin grille bureau*/}
                    {/*grille candidats*/}
                    {/** on modifi la couleur du bouttons come sa */}
                    <Grid item xs={6} style={{backgroundColor:'blue', color:'white'}}>
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
                    {/*fin grille candidats*/}
                    {/*grille resultats*/}
                    <Grid item xs={6} style={{backgroundColor:'blue', color:'white'}}>
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
                    {/*grille resultats*/}
                </Grid>
            </Container>
        );
    }
}