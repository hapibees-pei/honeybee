import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import React from "react";

import taxiWaiting from '../../assets/images/taxiWaiting.png';

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        marginTop: 30,
        marginBottom: 30
    },
    heroMessage: {
        fontSize: 30,
        fontWeight: 'bold',
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

function Hero() {
  const classes = useStyles();
  return (
        <Container maxWidth="md" component="main" className={classes.heroContent}>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    alignContent="center"
                >
                    <div className={classes.heroMessage}>
                        Bees are running out  of time.
                    </div>
                    <Grid
                        item
                        xs={6}
                        sm={6}
                        md={12}
                        className={classes.heroBlurb}
                    >
                        <div>
                            O voo das abelhas tem uma relação directa com a colmeia, por razões de orientação e reconhecimento da àrea envolvente a estrutura é na maioria das vezes em loop e/ou zigzag.
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    item
                    key="img"
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <Grid item>
                        <Container maxWidth="md" style={{ textAlign: 'center', height: 450, width: '100%' }}>
                            <img src={taxiWaiting} height="100%" />
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
  );
}

export default Hero;
