import React from 'react';

import {
    Card, 
    CardContent, 
    CardMedia,
    Typography,
    Divider,
    makeStyles,


} from '@material-ui/core';



const useStyles=makeStyles((theme)=>({
    card: {
        maxWidth:"350px",
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        borderBottom:"4px solid #cd853f",
    },
    media: {
        cursor:"pointer",
        paddingTop:"100%",
        filter:"grayscale(0.2)",
        transition:"0.3s ease-in-out",
        "&:hover":{
            filter:"grayscale(0)",
            transform:"scale(1.05)"
        }
    },
    title:{
        fontFamily:"Nunito",
        fontWeight:"700",
        fontSize:"1.5rem",
    },
    description:{
        fontFamily:"Montserrat",
        fontWeight:"500",
        color:"#333333",
        fontSize:"0.8rem",
    },
    divider:{
        height:"4px",
        marginTop:"1rem",
    },
    others:{
        display:"flex",
        alignItems:"center",
        marginTop:"1rem",
        justifyContent:"space-between",
        flexWrap:"wrap",
    },
    demo:{
        color:"#333333",
        textDecoration:"none",
        border:"2px solid #333333",
        padding:"0.5rem 1rem",
        fontWeight:"700",
        borderRadius:"24px",
        cursor:"pointer",
        transition:"all 0.3s ease-in-out",
        "&:hover":{
            color:"white",
            backgroundColor:"#cd853f",
            border:"2px solid #cd853f",
        }
    },
    icons:{
        display:"flex",
        alignItems:"center",
        "& i":{
            color:"rgba(0,0,0,0.5)",
            fontSize:"2rem",
            marginRight:"10px",
        }
    },
      
}))

function CardProject({image,name,description,demo,icons}) {
    const classes=useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia 
                className={classes.media}
                image={image}
            >
            </CardMedia>
            <CardContent className={classes.content}>
                <Typography
                    className={classes.title}
                    gutterBottom
                >
                    {name}
                </Typography>
                <Typography
                    className={classes.description}
                    gutterBottom
                >
                    {description}
                </Typography>
                <Divider className={classes.divider} light />
                <div className={classes.others}>
                    <div className={classes.icons}>
                        {icons?.map((icon,i)=>(
                            <i key={i} className={icon}>
                                
                            </i>
                        ))}
                    </div>
                    <a href={demo} rel="noreferrer" target="_blank" className={classes.demo}>
                        VER DEMO
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardProject
