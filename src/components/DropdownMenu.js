import { makeStyles, IconButton} from '@material-ui/core';
import React from 'react'

import CloseIcon from '@material-ui/icons/Close';
import {Link as Scroll} from 'react-scroll';

const useStyles=makeStyles((theme)=>({
    root:{
        position:"fixed",
        zIndex:"999999999",
        width:"100%",
        height:"100%",
        top:0,
        background:"#eeefe2x",
        justifyContent:"center",
        alignItems:"center",
        display:"none",
        opacity:1,
        transition:"0.6s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            display:"flex"
        }
    },
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"
    },
    link:{
        background:"none",
        border:"none",
        cursor:"pointer",
        fontFamily:"Nunito,sans-serif",
        fontSize:"2rem",
        marginTop:"2rem"
    },
    close:{
        position:"absolute",
        top:1,
        left:12
    },
    closeIcon:{
        fontSize:"2rem",
    },
    off:{
        top:"-100%",
    }
}))
function DropdownMenu({visible,handleVisible}) {
    const classes=useStyles();

    return (
        <div className={`${classes.root} ${!visible && classes.off }`}>
                <IconButton className={classes.close} onClick={handleVisible}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton> 
                <div className={classes.content}>
                    <Scroll to="home" smooth={true}>
                        <button className={classes.link} onClick={handleVisible}>
                            Inicio
                        </button>
                    </Scroll>
                    <Scroll to="about" smooth={true} >
                        <button className={classes.link} onClick={handleVisible}>
                            Sobre mi
                        </button>
                    </Scroll>
                    <Scroll to="projects" smooth={true}>
                        <button className={classes.link} onClick={handleVisible}>
                            Proyectos
                        </button>
                    </Scroll>
                </div>          
            </div>
    )
}

export default DropdownMenu
