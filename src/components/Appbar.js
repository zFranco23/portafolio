import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton, makeStyles } from '@material-ui/core'

import CodeIcon from '@material-ui/icons/Code';
import SortIcon from '@material-ui/icons/Sort';

import {Link as Scroll} from 'react-scroll'
import useScroll from '../useScroll';

const useStyles=makeStyles((theme)=>({
    root:{
        zIndex:9999,
        backgroundColor:"transparent",
        transition:"0.3s ease-in-out"
    },
    toolbar:{
        justifyContent:"space-between",
        alignItems:"center",
    },
    btnCode:{
        [theme.breakpoints.down("xs")]:{
            display:"none",
        }
    }
    ,
    btns:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("xs")]:{
            display:"none",
        }
    },
    bar:{
        fontWeight:"600",
        textAlign:"center",
        textTransform:"uppercase",
        cursor:"pointer",
        marginRight:"1rem",
        marginLeft:"1rem",
        transition:"0.3s ease-in-out",
    },
    code:{
        color:"#ffffff"
    },
    menu:{
        display:"none",
        color:"black",
        transition:"0.3s",
        [theme.breakpoints.down("xs")]:{
            display:"flex",
        }
    },
    menuIcon:{
        fontSize:"2rem",
    },
    active:{
        borderBottom:"3px solid #cd853f",
    },
    icons:{
        display:"flex",
        "& a ":{
            color:"white",
            fontSize:"25px",
            cursor:"pointer",
            marginLeft:"1rem",
        },
        [theme.breakpoints.down("xs")]:{
            display:"none",
        }
    },
    facebook:{
        transition:"0.5s ease-in-out",
        "&:hover":{
            color:"#3b5998",
        }
    },
    github:{
        transition:"0.5s ease-in-out",
        "&:hover":{
            color:"#211F1F",
        }
    },
    linkedin:{
        transition:"0.5s ease-in-out",
        "&:hover":{
            color:"#0e76a8",
        }
    },
    ref:{
        textDecoration:"none",
    },
    bgBlack:{
        backgroundColor:"#333333",
        [theme.breakpoints.down("xs")]:{
            backgroundColor:"transparent",
        }
    }
}))
function Appbar({active,handleActive,handleVisible}) {

    const classes=useStyles();
    const position=useScroll();
    return (
        <AppBar className={`${classes.root} ${position && classes.bgBlack}`} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <IconButton className={classes.btnCode}>
                    <CodeIcon className={classes.code}/>
                </IconButton>
                <div className={classes.btns}>
                    <Scroll to="home" smooth={true}>
                        <div className={`${classes.bar} ${active===0 && classes.active}`} onClick={()=>handleActive(0)}>
                            Home
                        </div>
                    </Scroll>
                    <Scroll to="about" smooth={true}>
                        <div className={`${classes.bar} ${active===1 && classes.active}`} onClick={()=>handleActive(1)}>
                            About me
                        </div>
                    </Scroll>
                    <Scroll to="projects" smooth={true}>
                        <div className={`${classes.bar} ${active===2 && classes.active}`} onClick={()=>handleActive(2)}>
                            Projects
                        </div>
                    </Scroll>
                </div>
                <div className={classes.icons}>
                    <a href="https://www.linkedin.com/in/franco-jossep-hermenegildo-flores-69a8a2208/" target="_blank" rel="noreferrer" className={classes.ref}>
                        <i className={`fab fa-linkedin ${classes.linkedin}` }></i>
                    </a>
                    <a href="https://github.com/zFranco23" target="_blank" rel="noreferrer"  className={classes.ref}>
                        <i className={`fab fa-github ${classes.github}` }></i>
                    </a>
                    <a href="https://www.facebook.com/franco.flores.7545708/" target="_blank" rel="noreferrer" className={classes.ref}>
                        <i className={`fab fa-facebook ${classes.facebook}`}></i>
                    </a>
                </div>

                <IconButton className={classes.menu} onClick={handleVisible}>
                    <SortIcon className={classes.menuIcon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
