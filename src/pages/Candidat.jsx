import { Grid, IconButton, Icon, Container, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

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
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
                            />
                            <CardContent>
                                Marechal Idrise deby itno
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}