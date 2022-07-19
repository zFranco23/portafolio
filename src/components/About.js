import {Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import Fade from 'react-reveal/Fade';
const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        paddingTop:"5rem",
    },
    title:{
        marginBottom:"1rem",
        fontFamily:"Nunito",
        fontWeight:"600",
        fontSize:"2rem",
        textAlign:"center",
    },
    container:{
        display:"flex",
    },
    left:{
        padding:"1rem",
        height:"100%",
        background:"#cd853f",
        display:"flex",
        flexDirection:"column",
        justiyContent:"center",
        alignItems:"center",
    },
    right:{
        padding:"0rem 1rem 1rem 1rem",
        height:"100%",
        margin:"auto 0",
    },
    description:{
        marginTop:"2rem",
        fontFamily:"Montserrat",
        fontWeight:"500",
    },
    img:{
        width:"40%",
    }
}))
function About() {

    const classes=useStyles();
    return (
        <div className={classes.root} id="about">
            <Typography  className={classes.title}>
                About me
            </Typography>
            <Grid container className={classes.container}>
                    <Grid item xs={12} md={6}>
                        <Fade left >
                            <Fade left cascade >
                                <div className={classes.left}>
                                    <img className={classes.img} alt="hobbies" src="https://i.ibb.co/cg8ftSb/desarrollador-Web.png" />
                                    
                                    <div>
                                        <img  alt="hobbies" src="https://i.ibb.co/1v766X0/ilustraciones-covid05.png" />
                                    </div>
                                </div>
                            </Fade>       
                        </Fade>    
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.right}>
                        <Fade right cascade>
                            <div className={classes.right}>
                                    <Typography className={classes.description} gutterBottom>
                                        Systems Engineering graduated from <b>UNMSM</b>.
                                        My objective is to specialize in Web Development, keeping myself updated in the
                                        technological trends and grow professionally as I gain experience.    
                                    </Typography>
                                    <Typography className={classes.description} gutterBottom>
                                        I aspire to be recognized for the commitment and care in each development in which I participate. Highlighting the detail and quality of the delivered products.
                                    </Typography>
                                    <Typography className={classes.description} gutterBottom>
                                        Sports, pizza and good music lover. I write code to improve my skills every day.
                                    </Typography>
                                
                            </div>
                        </Fade>
                    </Grid>
            </Grid>
        </div>
    )
}

export default About
