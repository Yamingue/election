import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Icon, IconButton } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

export default class Partis extends React.Component {
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
                <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/MPTR-2-300x212.jpg'
                        />
                        <CardContent>
                        MPTR
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-3-150x150.jpg'
                        />
                        <CardContent>
                        MPS
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-4-150x150.jpg'
                        />
                        <CardContent>
                        UNDR
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan0002-2-150x150.jpg'
                        />
                        <CardContent>
                        URD
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-5-150x150.jpg'
                        />
                        <CardContent>
                        ASTRE
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-4-150x150.jpg'
                        />
                        <CardContent>
                       FAR/PF
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-1-150x150.jpg'
                        />
                        <CardContent>
                        PRET
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan0001-1-150x150.jpg'
                        />
                        <CardContent>
                        PNRDT LE REVEIL
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan0001-2-150x150.jpg'
                        />
                        <CardContent>
                        PDI
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            image='https://www.ceni.td/wp-content/uploads/2021/03/Scan-2-150x150.jpg'
                        />
                        <CardContent>
                        UTPC
                        </CardContent>
                    </Card>
                </Grid>

                </Grid>
            </Container>
        );
    }
}