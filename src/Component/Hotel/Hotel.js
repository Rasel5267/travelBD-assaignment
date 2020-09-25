import React from 'react';
import './Hotel.css';
import { Container } from '@material-ui/core';
import hotel1 from '../../Image/Rectangle 26.png';
import hotel2 from '../../Image/Rectangle 27.png';
import hotel3 from '../../Image/Rectangle 28.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: 270,
    height: 160,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Hotel = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className="blog-title">
                <span>252 stays Apr 13-17 3 guests</span> <br/>
                <span className="blg-title">Stay in Cox's Bazar</span>
            </div>
            <div className="hotel-sec">
                <div className="hotel-dtl">
                    <div className={classes.root}>
                        <Paper className='paper'>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                    <img className='hotel-img' alt="complex" src={hotel1} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                            Light bright airty stylish apt & safe peaceful stay
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            4 guests 2 bedrooms 2 beds 2 baths
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Wif Air conditioning Kitchen
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Cancellation flexibility available
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                            <span className='star'><i class="fas fa-star"> </i> 4.9 (20)</span>
                                            <span className='amount'>$34/night<span className='total-amount'> $167 total</span></span>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    <div className={classes.root}>
                        <Paper className='paper'>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                    <img className='hotel-img' alt="complex" src={hotel2} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                            Apartment in Lost Panorama
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            4 guests 2 bedrooms 2 beds 2 baths
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Wif Air conditioning Kitchen
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Cancellation flexibility available
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                            <span className='star'><i class="fas fa-star"></i> 4.8 (10)</span>
                                            <span className='amount'>$52/night<span className='total-amount'> $167 total</span></span>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    <div className={classes.root}>
                        <Paper className='paper'>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                    <img className='hotel-img' alt="complex" src={hotel3} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                            AR Lounge & Pool (r&r + b&b)
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            4 guests 2 bedrooms 2 beds 2 baths
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Wif Air conditioning Kitchen
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom color="textSecondary">
                                            Cancellation flexibility available
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                        <Grid item>
                                            <span className='star'><i class="fas fa-star"></i> 4.9 (25)</span>
                                            <span className='amount'>$44/night <span className='total-amount'> $167 total</span> </span>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </div>
                <div className="hotel-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d302756.5197571992!2d91.91167331815753!3d21.263065882257482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb13b426bade6ac8b!2sCox&#39;s%20Bazar%20Airport.!5e0!3m2!1sen!2sbd!4v1601008669297!5m2!1sen!2sbd" frameborder="0" style={{border:'0',width:'500px',height:'600px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </Container>
    );
};

export default Hotel;