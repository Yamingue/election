import { Grid, IconButton, Icon, Container, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import brice from './brice.jpg'
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
                                image={brice}
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
                                image='https://afrique.tv5monde.com/sites/afrique/files/styles/diapo_908x605/public/2021-03/field_media_image-422099-AP_20183376583873.jpg?h=52605a11&itok=qBxkQ5Yz'
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
                                image='https://upload.wikimedia.org/wikipedia/commons/8/8a/Saleh_Kebzabo.jpg'
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
                                image={felix}
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
                                image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2021/03/i3.jpeg'
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
                                image='https://prabook.com/web/show-photo.jpg?id=12836&cache=false'
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
                                image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2018/03/Pahimi-Padacke%CC%81.jpg'
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
                                image='https://lesahel.td/wp-content/uploads/2020/06/Beassemnda-Lydie.jpg'
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
                                image='https://www.alwihdainfo.com/photo/art/default/53991121-40732140.jpg?v=1613570907'
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