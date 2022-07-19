import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import Card from './Card';
import {projects} from '../DataProjects';


import Fade from 'react-reveal/Fade';
const useStyles=makeStyles((theme)=>({
    root:{
        paddingTop:"5rem",
        minHeight:"100vh",
    },
    title:{
        marginBottom:"1rem",
        fontFamily:"Nunito",
        fontWeight:"600",
        fontSize:"2rem",
        textAlign:"center",
    },
    container:{
        marginTop:"1rem",
        height:"100%",
        /* background: "linear-gradient(to right, white 0%, white 50%, #333333 50%, #333333 100%)", */
    }
}))
function Projects() {

    const classes=useStyles();
    return (
        <div className={classes.root} id="projects">
            <Typography  className={classes.title}>
                Projects
            </Typography>
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {projects.map((project,index)=>(
                       <Grid key={index} item xs={12} sm={6} md={4}>
                           <Fade 
                                top={(index===1) && true}
                                bottom={(index===4) && true}
                                left={(index===3 || index===0) && true}
                                right={(index===2 || index===5) && true}
                            
                           >
                                <Card 
                                    image={project.preview} 
                                    name={project.name} 
                                    description={project.description}
                                    demo={project.demo}
                                    icons={project.icons}
                                />
                           </Fade>
                       </Grid> 
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Projects
