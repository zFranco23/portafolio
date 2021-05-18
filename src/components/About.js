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
                Sobre mi
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
                                        Estudiante universitario de <b>Ingeniería de Sistemas</b> de la <b>UNMSM</b>.
                                        Tengo como objetivo especializarme en el Desarrollo Web , manteniendome actualizado en las
                                        tendencias tecnológicas e ir creciendo profesionalmente a medida que gane experiencia.    
                                    </Typography>
                                    <Typography className={classes.description} gutterBottom>
                                        Aspiro a ser reconocido por el compromiso y cuidado en cada desarrollo en los que participe. Destacando, el detalle y la calidad de los productos entregados.
                                    </Typography>
                                    <Typography className={classes.description} gutterBottom>
                                        Amante de los deportes , la pizza y la buena música . Escribo código para mejorar mis skills cada dia.
                                    </Typography>
                                
                            </div>
                        </Fade>
                    </Grid>
            </Grid>
        </div>
    )
}

export default About
