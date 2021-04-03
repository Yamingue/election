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
                                title={'Marechal Idriss Deby Itno'}
                            />
                            <CardContent>
                                <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <LinearProgress variant="determinate" value={70} />
                                    </Box>
                                    <Box minWidth={35}>
                                        <Typography variant="body2" color="textSecondary">{`${Math.round(
                                            70,
                                        )}%`}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={'Marechal Idriss Deby Itno'}
                            />
                            <CardContent>
                                <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <LinearProgress variant="determinate" value={60} color='secondary' />
                                    </Box>
                                    <Box minWidth={35}>
                                        <Typography variant="body2" color="textSecondary">{`${Math.round(
                                            60,
                                        )}%`}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}