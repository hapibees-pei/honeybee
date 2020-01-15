import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import StarIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";

import time from '../../assets/images/time.png';
import vector from '../../assets/images/Vector.png';
import Logo from "../../assets/images/logo/black_on_yellow.png";
import LogoBlack from "../../assets/images/logo/black_on_transparent.png";


const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        alignContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    heroMessage: {
        width: '100%',
        fontSize: 30,
        marginTop: 40,
        fontStyle: 'italic',
        lineHeight: 1.43,
        letterSpacing: '0.01071em'
    },
    heroBlurb: {
        marginTop: 20,
        fontSize: 20
    },
    image: {
        height: 400,
        width: 400,
        textAlign: 'center'
    }
}));
/*
<Typography
    component="h1"
    variant="h2"
    align="center"
    color="textPrimary"
    gutterBottom
>
    Hero Message
</Typography>
<Typography
variant="h5"
align="center"
color="textSecondary"
component="p"
    >
    Quickly build an effective pricing table for your potential customers
with this layout. It&apos;s built with default Material-UI components
with little customization.
</Typography>
*/
function Hero() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="main" alignItems="center" className={classes.heroContent}>
            <Container style={{ textAlign: 'center', width: '100%' }}>
                <img src={LogoBlack} height="100px" />
            </Container>
            {/* <Grid container spacing={2} alignItems="center" justify="center">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    alignContent="center"
                > */}
            <Container maxWidth="md" className={classes.heroMessage} style={{ textAlign: 'center', width: '100%' }}>
                “If the bee disappeared off the face of the Earth, man would only have four years left to live.”                        
                <Typography style={{ textAlign: 'right', width: '100%' }}>
                    Albert Einstein                  </Typography>                 </Container>

            {/* <Grid
                        item
                        xs={6}
                        sm={6}
                        md={12}
                        className={classes.heroBlurb}
                    >
                        <div>
                            O voo das abelhas tem uma relação directa com a colmeia, por razões de orientação e reconhecimento da àrea envolvente a estrutura é na maioria das vezes em loop e/ou zigzag.
                        </div>
                    </Grid> */}
            {/* </Grid>
                <Grid
                    item
                    key="img"
                    xs={12}
                    sm={12}
                    md={6}
                > */}
            {/* <Grid item> */}
            <Container maxWidth="md" style={{ textAlign: 'center', height: 450, width: '100%' }}>
                <img src={time} height="100%" />
            </Container>
            {/* </Grid> */}
            {/* </Grid> */}
            {/* </Grid> */}
        </Container>
    );
}

export default Hero;
