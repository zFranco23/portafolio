import { makeStyles, Typography, IconButton } from '@material-ui/core';
import React from 'react';

import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {Link as Scroll} from 'react-scroll'
import Typed from 'react-typed';   

const useStyles=makeStyles(()=>({
    root:{
        position:"relative",
        minHeight:"100vh",
        background:`url(${process.env.PUBLIC_URL}/assets/images/hero2.jpg)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        objectFit:"cover",
        "&::before":{
            content:"''",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
        }
    },
    containerHero:{
        position:"relative",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontFamily:"Nunito",
        color:"#ffffff",
        fontSize:"1.8rem",
    },
    containerText:{
        textAlign:"center",
    },
    expand:{
        fontSize:"4rem",
        color:"#cd853f",
        transition:"0.3s ease-in-out",
        "&:hover":{
            color:"#efb810"
        }
    }
}))

function Hero({checked}) {

    const classes=useStyles();
    return (
        <div className={classes.root} id="home">
            <div className={classes.containerHero}>
                <Collapse 
                in={checked}
                {...(checked ? { timeout: 2500 } : {})}
                >
                    <div className={classes.containerText}>
                        <Typography className={classes.text}>
                            <Typed
                                strings={[
                                'Hola',
                                'Soy Franco 👋',
                                'Soy Desarrollador Web ... 🤓',
                                'Soy Desarrollador Web en progreso 😷 ',
                                '¡ Bienvenido! 😊']}
                                typeSpeed={40}
                                backSpeed={60}
                                loop >
                            </Typed>
                        </Typography>
                        <Scroll to="about" smooth={true} >
                            <IconButton>
                                <ExpandMoreIcon className={classes.expand} />
                            </IconButton>
                        </Scroll>
                        
                    </div>
                    
                </Collapse>
            </div>
        </div>
    )
}

export default Hero
