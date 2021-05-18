import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import {
    html, 
    css, 
    js,
    materialUi,
    react,
    bootstrap,
    express,
    node,
    mongodb,
    mysql,
    cpp, 
    java, 
    php, 
    python,
    git,
    parallax
} from '../DataImages';

import {Parallax} from 'react-parallax';

const useStyles=makeStyles((theme)=>({
    root:{
        height:"100%",
        paddingTop:"5rem",
    },
    title:{
        marginBottom:"1rem",
        fontFamily:"Nunito",
        fontWeight:"600",
        fontSize:"2rem",
        textAlign:"center",
    },
    img:{
        width:"60px",
    },
    content:{
        paddingTop:"2rem",
        paddingBottom:"2rem",
        marginBottom:"1rem",
    },
    types:{
        textTransform:"uppercase",
        textAlign:"center",
        fontFamily:"Nunito",
        fontWeight:"700",
        fontSize:"1.2rem",
        color:"#F2F2F2",
    },
    containerTechnologies:{
        marginTop:"1rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        "& img":{
            marginLeft:"1rem",
        },
        flexWrap:"wrap",
    }
}))
function Technologies() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Typography  className={classes.title}>
                Tecnologías
            </Typography>
            <Parallax
                bgImage={parallax}
                bgImageAlt="bg"
            >
                <Container className={classes.containerContent}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.content}>
                                <Typography className={classes.types}>
                                    Elementales
                                </Typography>
                                <div className={classes.containerTechnologies}>
                                    <img className={classes.img} src={html} alt="html"/>
                                    <img className={classes.img} src={css} alt="css"/>
                                    <img className={classes.img} src={js} alt="js" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.content}>
                                <Typography className={classes.types}>
                                    Front-end
                                </Typography>
                                <div className={classes.containerTechnologies}>
                                    <img className={classes.img} src={materialUi} alt="material-ui"/>
                                    <img className={classes.img} src={react} alt="react"/>
                                    <img className={classes.img} src={bootstrap} alt="bootstrap"/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.content}>
                                <Typography className={classes.types}>
                                    Back-end
                                </Typography>
                                <div className={classes.containerTechnologies}>
                                    <img className={classes.img} src={express} alt="express"/>
                                    <img className={classes.img} src={node} alt="node"/>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.content}>
                                <Typography className={classes.types}>
                                    Bases de Datos
                                </Typography>
                                <div className={classes.containerTechnologies}>
                                <img className={classes.img} src={mongodb} alt="mongodb"/>
                                <img className={classes.img} src={mysql} alt="mysql"/>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.content}>
                                <Typography className={classes.types}>
                                    Otros
                                </Typography>
                                <div className={classes.containerTechnologies}>
                                    <img className={classes.img} src={java} alt="java"/>
                                    <img className={classes.img} src={python} alt="python" />
                                    <img className={classes.img} src={cpp} alt="cpp" />
                                    <img className={classes.img} src={php} alt="php"/>   
                                    <img className={classes.img} src={git} alt="git"/>   
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                </Container>

            </Parallax>
        </div>
    )
}

export default Technologies
