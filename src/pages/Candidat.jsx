import { Grid, IconButton, Icon, Container, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import brice from '../bice.jpg'
import felix from './felix.jpg'

export default class Candidat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <IconButton color='primary'>
                        <Icon className="fas fa-arrow-alt-circle-left" /> Retour
                    </IconButton>
                </Link>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image={'https://www.ceni.td/wp-content/uploads/2021/03/1-212x300.png'}
                            />
                            <CardContent>
                                MBAIMON GUEDMBAYE BRICE
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/2-212x300.png'
                            />
                            <CardContent>
                                IDRISS DEBY ITNO
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/4-724x1024.png'
                            />
                            <CardContent>
                                KEBZABO SALEH
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image={'https://www.ceni.td/wp-content/uploads/2021/03/4-724x1024.png'}
                            />
                            <CardContent>
                                ROMANDOUMNGAR FELIX NIALBE
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/5-724x1024.png'
                            />
                            <CardContent>
                                ALLADOUM DJARMA BALTHAZAR
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/6-724x1024.png'
                            />
                            <CardContent>
                                NGARLEJY KODJI-YORONGAR LE MOIBAN
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://lesahel.td/wp-content/uploads/2021/02/theophile-bongoro-752x440.jpg'
                            />
                            <CardContent>
                                BONGORO THEOPHILE
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/8-724x1024.png'
                            />
                            <CardContent>
                                PAHIMI PADACHE ALBERT
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/9-724x1024.png'
                            />
                            <CardContent>
                            BEASSEMDA LYDIE
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://www.ceni.td/wp-content/uploads/2021/03/10-212x300.png'
                            />
                            <CardContent>
                                YOMBOMBE MADJITOLOUM THEOPHILE
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}