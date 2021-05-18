
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:"4rem",
        fontFamily:"Nunito,sans-serif",
        color:"#fff",
        background:"#333333",
        overflow:"hidden"
    },
    container:{
        padding:"2rem"
    },
    content:{
        display:"flex",
        justifyContent:"center"
    },
    containerIcons:{
        display:"flex",
        justifyContent:"center",
        "& i":{
            display:"block",
            fontSize:"2rem",
            textAlign:"center",
            margin:"0 1.5rem",
            cursor:"pointer",
            transition:"all 0.4s ease-in-out",
            "&:hover":{
                color:"#cda434",
                transform:"scale(1.05)"
            },
            [theme.breakpoints.down("xs")]:{
                margin:"0 2rem",
            }    
        }
    },
    border:{
        borderRight:"3px solid #cd853f",
        [theme.breakpoints.down("xs")]:{
            border:"none",
            borderBottom:"3px solid #cd853f",
        }
    },
    footer:{
        textAlign:"center",
        cursor:"pointer",
        fontFamily:"Nunito",
        fontWeight:"600",
        fontSize:"1rem",
    },
    icons:{
        display:"flex",
        "& a ":{
            color:"white",
            fontSize:"25px",
            cursor:"pointer",
            marginLeft:"1rem",
        },
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
    contentContact:{
        display:"flex",
        justifyContent:"center",
        "& svg":{
            marginRight:"1rem",
        }
    },
    text:{
        fontFamily:"Nunito",
        fontWeight:"600",
    }
}))

function Footer() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grid container spacing={3} className={classes.content}>
                    <Grid item xs={12} sm={4} md={4} className={classes.border}>
                        <Typography className={classes.footer}>
                            Franco Jossep Hermenegildo Flores 
                        </Typography>
                        <Typography className={classes.footer}>
                            2021 - &copy;
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className={classes.border}>
                        <div>
                            <div className={classes.contentContact}>
                                <MailOutlineIcon />
                                <Typography className={classes.text}>
                                    francoheflo@gmail.com
                                </Typography>
                            </div>
                            <div className={classes.contentContact}>
                                <WhatsAppIcon />
                                <Typography className={classes.text}>
                                    933475707
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Container className={classes.content}>      
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
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
