import { Card, CardHeader, CardMedia, Container, Grid, Icon, IconButton } from '@material-ui/core';
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
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                    <Card>
                        <CardHeader
                        title='MPS'
                        />
                        <CardMedia
                        component='img'
                        image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2018/12/De%CC%81by-MPS.jpg'
                        />
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card>
                        <CardHeader
                        title='MPS'
                        />
                        <CardMedia
                        component='img'
                        image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2018/12/De%CC%81by-MPS.jpg'
                        />
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card>
                        <CardHeader
                        title='MPS'
                        />
                        <CardMedia
                        component='img'
                        image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2018/12/De%CC%81by-MPS.jpg'
                        />
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card>
                        <CardHeader
                        title='MPS'
                        />
                        <CardMedia
                        component='img'
                        image='https://www.letchadanthropus-tribune.com/wp-content/uploads/2018/12/De%CC%81by-MPS.jpg'
                        />
                    </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}