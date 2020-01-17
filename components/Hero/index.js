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
import Quote from "../../assets/images/aspa.svg";
import Bee from "../../assets/images/Bee.png";
import LogoBlack from "../../assets/images/logo/black_on_transparent.png";


const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(10, 0, 4),
        //alignContent: 'center',
        //alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundImage: `url(${Bee})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        backgroundSize: '600px 500px',
        minHeight: 750
    },
    heroMessage: {
        width: '80%',
        fontSize: 40,
        marginTop: 70,
        fontStyle: 'italic',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        backgroundImage: `url(${Quote})`,
        backgroundRepeat: 'no-repeat',
        marginLeft: 0,
        paddingTop: 42,
        paddingLeft: 56
    },
    heroBlurb: {
        marginTop: 20,
        fontSize: 20
    },
    image: {
        height: 400,
        width: 400,
        textAlign: 'center'
    },
    Einstein: {
        display: 'flex',
        marginTop: 12,
        fontSize: 24,
        paddingLeft: 56
    },
    bee: {
        width: '100%',
        backgroundImage: `url(${Bee})`,
        backgroundRepeat: 'no-repeat'
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
        <Container maxWidth="md" component="main" className={classes.heroContent}>
            <Container style={{ width: '100%' }}>
                <img src={LogoBlack} height="50px" />
            </Container>
            {/* <Grid container spacing={2} alignItems="center" justify="center">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    alignContent="center"
                > */}
            <Container maxWidth="md" className={classes.heroMessage}>
                Se as abelhas desaparecessem do planeta Terra, restariam ao Homem apenas quatro anos de vida.
            </Container>
            <Container maxWidth="md" className={classes.Einstein}>
                <Typography>
                    Albert Einstein
                </Typography>
            </Container>
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
            {/* </Grid> */}
            {/* </Grid> */}
            {/* </Grid> */}
        </Container>
    );
}

export default Hero;
