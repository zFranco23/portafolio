(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{72:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(11),n=a.n(o),c=(a(72),a(26)),i=a(10),r=a(108),l=a(109),d=a(106),m=a(117),b=a(55),j=a.n(b),f=a(56),p=a.n(f),g=a(12),h=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];Object(s.useEffect)((function(){o(!1)}),[]);return window.addEventListener("scroll",(function(){window.scrollY>=document.getElementById("home").offsetHeight?o(!0):o(!1)})),a},x=a(1),u=Object(d.a)((function(e){return{root:{zIndex:9999,backgroundColor:"transparent",transition:"0.3s ease-in-out"},toolbar:{justifyContent:"space-between",alignItems:"center"},btnCode:Object(i.a)({},e.breakpoints.down("xs"),{display:"none"}),btns:Object(i.a)({display:"flex",justifyContent:"space-between"},e.breakpoints.down("xs"),{display:"none"}),bar:{fontWeight:"600",textAlign:"center",textTransform:"uppercase",cursor:"pointer",marginRight:"1rem",marginLeft:"1rem",transition:"0.3s ease-in-out"},code:{color:"#ffffff"},menu:Object(i.a)({display:"none",color:"black",transition:"0.3s"},e.breakpoints.down("xs"),{display:"flex"}),menuIcon:{fontSize:"2rem"},active:{borderBottom:"3px solid #cd853f"},icons:Object(i.a)({display:"flex","& a ":{color:"white",fontSize:"25px",cursor:"pointer",marginLeft:"1rem"}},e.breakpoints.down("xs"),{display:"none"}),facebook:{transition:"0.5s ease-in-out","&:hover":{color:"#3b5998"}},github:{transition:"0.5s ease-in-out","&:hover":{color:"#211F1F"}},linkedin:{transition:"0.5s ease-in-out","&:hover":{color:"#0e76a8"}},ref:{textDecoration:"none"},bgBlack:Object(i.a)({backgroundColor:"#333333"},e.breakpoints.down("xs"),{backgroundColor:"transparent"})}}));var O=function(e){var t=e.active,a=e.handleActive,s=e.handleVisible,o=u(),n=h();return Object(x.jsx)(r.a,{className:"".concat(o.root," ").concat(n&&o.bgBlack),elevation:0,children:Object(x.jsxs)(l.a,{className:o.toolbar,children:[Object(x.jsx)(m.a,{className:o.btnCode,children:Object(x.jsx)(j.a,{className:o.code})}),Object(x.jsxs)("div",{className:o.btns,children:[Object(x.jsx)(g.Link,{to:"home",smooth:!0,children:Object(x.jsx)("div",{className:"".concat(o.bar," ").concat(0===t&&o.active),onClick:function(){return a(0)},children:"Inicio"})}),Object(x.jsx)(g.Link,{to:"about",smooth:!0,children:Object(x.jsx)("div",{className:"".concat(o.bar," ").concat(1===t&&o.active),onClick:function(){return a(1)},children:"Sobre mi"})}),Object(x.jsx)(g.Link,{to:"projects",smooth:!0,children:Object(x.jsx)("div",{className:"".concat(o.bar," ").concat(2===t&&o.active),onClick:function(){return a(2)},children:"Proyectos"})})]}),Object(x.jsxs)("div",{className:o.icons,children:[Object(x.jsx)("a",{href:"https://www.linkedin.com/in/franco-jossep-hermenegildo-flores-69a8a2208/",target:"_blank",rel:"noreferrer",className:o.ref,children:Object(x.jsx)("i",{className:"fab fa-linkedin ".concat(o.linkedin)})}),Object(x.jsx)("a",{href:"https://github.com/zFranco23",target:"_blank",rel:"noreferrer",className:o.ref,children:Object(x.jsx)("i",{className:"fab fa-github ".concat(o.github)})}),Object(x.jsx)("a",{href:"https://www.facebook.com/franco.flores.7545708/",target:"_blank",rel:"noreferrer",className:o.ref,children:Object(x.jsx)("i",{className:"fab fa-facebook ".concat(o.facebook)})})]}),Object(x.jsx)(m.a,{className:o.menu,onClick:s,children:Object(x.jsx)(p.a,{className:o.menuIcon})})]})})},v=a(43),N=a(110),k=a(118),y=a(58),w=a.n(y),C=a(57),S=a.n(C),z=Object(d.a)((function(){return{root:{position:"relative",minHeight:"100vh",background:"url(".concat("/portafolio","/assets/images/hero2.jpg)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover","&::before":{content:"''",position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.4)"}},containerHero:{position:"relative",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},text:{fontFamily:"Nunito",color:"#ffffff",fontSize:"1.8rem"},containerText:{textAlign:"center"},expand:{fontSize:"4rem",color:"#cd853f",transition:"0.3s ease-in-out","&:hover":{color:"#efb810"}}}}));var T=function(e){var t=e.checked,a=z();return Object(x.jsx)("div",{className:a.root,id:"home",children:Object(x.jsx)("div",{className:a.containerHero,children:Object(x.jsx)(k.a,Object(v.a)(Object(v.a)({in:t},t?{timeout:2500}:{}),{},{children:Object(x.jsxs)("div",{className:a.containerText,children:[Object(x.jsx)(N.a,{className:a.text,children:Object(x.jsx)(S.a,{strings:["Hola","Soy Franco \ud83d\udc4b","Soy Desarrollador Web ... \ud83e\udd13","Soy Desarrollador Web en progreso \ud83d\ude37 ","\xa1 Bienvenido! \ud83d\ude0a"],typeSpeed:40,backSpeed:60,loop:!0})}),Object(x.jsx)(g.Link,{to:"about",smooth:!0,children:Object(x.jsx)(m.a,{children:Object(x.jsx)(w.a,{className:a.expand})})})]})}))})})},F=a(111),I=a(25),B=a.n(I),W=Object(d.a)((function(e){return{root:{minHeight:"100vh",paddingTop:"5rem"},title:{marginBottom:"1rem",fontFamily:"Nunito",fontWeight:"600",fontSize:"2rem",textAlign:"center"},container:{display:"flex"},left:{padding:"1rem",height:"100%",background:"#cd853f",display:"flex",flexDirection:"column",justiyContent:"center",alignItems:"center"},right:{padding:"0rem 1rem 1rem 1rem",height:"100%",margin:"auto 0"},description:{marginTop:"2rem",fontFamily:"Montserrat",fontWeight:"500"},img:{width:"40%"}}}));var q=function(){var e=W();return Object(x.jsxs)("div",{className:e.root,id:"about",children:[Object(x.jsx)(N.a,{className:e.title,children:"Sobre mi"}),Object(x.jsxs)(F.a,{container:!0,className:e.container,children:[Object(x.jsx)(F.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(B.a,{left:!0,children:Object(x.jsx)(B.a,{left:!0,cascade:!0,children:Object(x.jsxs)("div",{className:e.left,children:[Object(x.jsx)("img",{className:e.img,alt:"hobbies",src:"https://i.ibb.co/cg8ftSb/desarrollador-Web.png"}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{alt:"hobbies",src:"https://i.ibb.co/1v766X0/ilustraciones-covid05.png"})})]})})})}),Object(x.jsx)(F.a,{item:!0,xs:12,md:6,className:e.right,children:Object(x.jsx)(B.a,{right:!0,cascade:!0,children:Object(x.jsxs)("div",{className:e.right,children:[Object(x.jsxs)(N.a,{className:e.description,gutterBottom:!0,children:["Estudiante universitario de ",Object(x.jsx)("b",{children:"Ingenier\xeda de Sistemas"})," de la ",Object(x.jsx)("b",{children:"UNMSM"}),". Tengo como objetivo especializarme en el Desarrollo Web , manteniendome actualizado en las tendencias tecnol\xf3gicas e ir creciendo profesionalmente a medida que gane experiencia."]}),Object(x.jsx)(N.a,{className:e.description,gutterBottom:!0,children:"Aspiro a ser reconocido por el compromiso y cuidado en cada desarrollo en los que participe. Destacando, el detalle y la calidad de los productos entregados."}),Object(x.jsx)(N.a,{className:e.description,gutterBottom:!0,children:"Amante de los deportes , la pizza y la buena m\xfasica . Escribo c\xf3digo para mejorar mis skills cada dia."})]})})})]})]})},D=a(116),L=a(112),A=a(113),E=a(114),H=a(115),R=Object(d.a)((function(e){return{card:{maxWidth:"350px",margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"},borderBottom:"4px solid #cd853f"},media:{cursor:"pointer",paddingTop:"100%",filter:"grayscale(0.2)",transition:"0.3s ease-in-out","&:hover":{filter:"grayscale(0)",transform:"scale(1.05)"}},title:{fontFamily:"Nunito",fontWeight:"700",fontSize:"1.5rem"},description:{fontFamily:"Montserrat",fontWeight:"500",color:"#333333",fontSize:"0.8rem"},divider:{height:"4px",marginTop:"1rem"},others:{display:"flex",alignItems:"center",marginTop:"1rem",justifyContent:"space-between",flexWrap:"wrap"},demo:{color:"#333333",textDecoration:"none",border:"2px solid #333333",padding:"0.5rem 1rem",fontWeight:"700",borderRadius:"24px",cursor:"pointer",transition:"all 0.3s ease-in-out","&:hover":{color:"white",backgroundColor:"#cd853f",border:"2px solid #cd853f"}},icons:{display:"flex",alignItems:"center","& i":{color:"rgba(0,0,0,0.5)",fontSize:"2rem",marginRight:"10px"}}}}));var M=function(e){var t=e.image,a=e.name,s=e.description,o=e.demo,n=e.icons,c=R();return Object(x.jsxs)(L.a,{className:c.card,children:[Object(x.jsx)(A.a,{className:c.media,image:t}),Object(x.jsxs)(E.a,{className:c.content,children:[Object(x.jsx)(N.a,{className:c.title,gutterBottom:!0,children:a}),Object(x.jsx)(N.a,{className:c.description,gutterBottom:!0,children:s}),Object(x.jsx)(H.a,{className:c.divider,light:!0}),Object(x.jsxs)("div",{className:c.others,children:[Object(x.jsx)("div",{className:c.icons,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(x.jsx)("i",{className:e},t)}))}),Object(x.jsx)("a",{href:o,rel:"noreferrer",target:"_blank",className:c.demo,children:"VER DEMO"})]})]})]})},V=[{demo:"https://zfranco23.github.io/countryquiz/",name:"Country Quiz",preview:"https://i.ibb.co/5YgF711/image-Country-Quiz.png",description:"Un juego de conocimiento acerca de paises , puedes escoger preguntas acerca de la capital o tambi\xe9n puedes responder reconociendo las banderas.",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt"]},{demo:"https://zfranco23.github.io/quotegarden/",name:"Quote Garden",preview:"https://i.ibb.co/DR0DTFQ/image-Quote-Garden.png",description:"Una app web que permite generar frases de manera aleatoria mostrando al autor y el genero, adem\xe1s puedes ver mas frases de dicho autor.",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt"]},{demo:"https://zfranco23.github.io/windbnb/",name:"Wind bnb",preview:"https://i.ibb.co/tJCQ73T/image-Wind-Bnb.png",description:"Un buscador de habitaciones de descanso en algunas ciudades de Per\xfa. Se puede filtrar por localidad y por cantidad de personas a hospedarse.",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt"]},{demo:"https://zfranco23.github.io/covidTracker/",name:"Covid Tracker",preview:"https://i.ibb.co/3TxDjGN/image-Covid-Tracker.png",description:"Un recopilador de la situaci\xf3n del covid a nivel mundial y a nivel nacional , se muestran infectados,recuperados y decesos.",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt"]},{demo:"https://zfranco23.github.io/sk8layout/",name:"Skate Layout",preview:"https://i.ibb.co/JR3HqMM/image-Skate-Layout.png",description:"Layout de una p\xe1gina de reclutamiento de fotografos aficionados al skate , ofreciendo la galeria de fotos mas vistas por la comunidad.",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt"]},{demo:"https://zfranco23.github.io/videochat/",name:"Video Chat",preview:"https://i.ibb.co/Fq9tb5g/image-Video-Chat.png",description:"Una app web de videochat en la cual puedes compartir tu ID para poder recibir llamadas o realizar llamadas a otra persona. ",icons:["fab fa-react","fab fa-js-square","fab fa-css3-alt","cib-socket-io"]}],_=Object(d.a)((function(e){return{root:{paddingTop:"5rem",minHeight:"100vh"},title:{marginBottom:"1rem",fontFamily:"Nunito",fontWeight:"600",fontSize:"2rem",textAlign:"center"},container:{marginTop:"1rem",height:"100%"}}}));var P=function(){var e=_();return Object(x.jsxs)("div",{className:e.root,id:"projects",children:[Object(x.jsx)(N.a,{className:e.title,children:"Proyectos"}),Object(x.jsx)(D.a,{className:e.container,children:Object(x.jsx)(F.a,{container:!0,spacing:3,children:V.map((function(e,t){return Object(x.jsx)(F.a,{item:!0,xs:12,sm:6,md:4,children:Object(x.jsx)(B.a,{top:1===t&&!0,bottom:4===t&&!0,left:(3===t||0===t)&&!0,right:(2===t||5===t)&&!0,children:Object(x.jsx)(M,{image:e.preview,name:e.name,description:e.description,demo:e.demo,icons:e.icons})})},t)}))})})]})},Q="".concat("/portafolio","/assets/images/html.png"),U="".concat("/portafolio","/assets/images/css.svg"),J="".concat("/portafolio","/assets/images/js.png"),G="".concat("/portafolio","/assets/images/material-ui.png"),Y="".concat("/portafolio","/assets/images/react.png"),X="".concat("/portafolio","/assets/images/bootstrap.png"),K="".concat("/portafolio","/assets/images/express.png"),Z="".concat("/portafolio","/assets/images/node.png"),$="".concat("/portafolio","/assets/images/mongodb.svg"),ee="".concat("/portafolio","/assets/images/mysql.png"),te="".concat("/portafolio","/assets/images/java.png"),ae="".concat("/portafolio","/assets/images/python.png"),se="".concat("/portafolio","/assets/images/cpp.png"),oe="".concat("/portafolio","/assets/images/php.png"),ne="".concat("/portafolio","/assets/images/git.png"),ce="".concat("/portafolio","/assets/images/parallax.jpg"),ie=a(59),re=Object(d.a)((function(e){return{root:{height:"100%",paddingTop:"5rem"},title:{marginBottom:"1rem",fontFamily:"Nunito",fontWeight:"600",fontSize:"2rem",textAlign:"center"},img:{width:"60px"},content:{paddingTop:"2rem",paddingBottom:"2rem",marginBottom:"1rem"},types:{textTransform:"uppercase",textAlign:"center",fontFamily:"Nunito",fontWeight:"700",fontSize:"1.2rem",color:"#F2F2F2"},containerTechnologies:{marginTop:"1rem",display:"flex",alignItems:"center",justifyContent:"center","& img":{marginLeft:"1rem"},flexWrap:"wrap"}}}));var le=function(){var e=re();return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(N.a,{className:e.title,children:"Tecnolog\xedas"}),Object(x.jsx)(ie.Parallax,{bgImage:ce,bgImageAlt:"bg",children:Object(x.jsx)(D.a,{className:e.containerContent,children:Object(x.jsxs)(F.a,{container:!0,spacing:3,children:[Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)("div",{className:e.content,children:[Object(x.jsx)(N.a,{className:e.types,children:"Elementales"}),Object(x.jsxs)("div",{className:e.containerTechnologies,children:[Object(x.jsx)("img",{className:e.img,src:Q,alt:"html"}),Object(x.jsx)("img",{className:e.img,src:U,alt:"css"}),Object(x.jsx)("img",{className:e.img,src:J,alt:"js"})]})]})}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)("div",{className:e.content,children:[Object(x.jsx)(N.a,{className:e.types,children:"Front-end"}),Object(x.jsxs)("div",{className:e.containerTechnologies,children:[Object(x.jsx)("img",{className:e.img,src:G,alt:"material-ui"}),Object(x.jsx)("img",{className:e.img,src:Y,alt:"react"}),Object(x.jsx)("img",{className:e.img,src:X,alt:"bootstrap"})]})]})}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)("div",{className:e.content,children:[Object(x.jsx)(N.a,{className:e.types,children:"Back-end"}),Object(x.jsxs)("div",{className:e.containerTechnologies,children:[Object(x.jsx)("img",{className:e.img,src:K,alt:"express"}),Object(x.jsx)("img",{className:e.img,src:Z,alt:"node"})]})]})}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)("div",{className:e.content,children:[Object(x.jsx)(N.a,{className:e.types,children:"Bases de Datos"}),Object(x.jsxs)("div",{className:e.containerTechnologies,children:[Object(x.jsx)("img",{className:e.img,src:$,alt:"mongodb"}),Object(x.jsx)("img",{className:e.img,src:ee,alt:"mysql"})]})]})}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)("div",{className:e.content,children:[Object(x.jsx)(N.a,{className:e.types,children:"Otros"}),Object(x.jsxs)("div",{className:e.containerTechnologies,children:[Object(x.jsx)("img",{className:e.img,src:te,alt:"java"}),Object(x.jsx)("img",{className:e.img,src:ae,alt:"python"}),Object(x.jsx)("img",{className:e.img,src:se,alt:"cpp"}),Object(x.jsx)("img",{className:e.img,src:oe,alt:"php"}),Object(x.jsx)("img",{className:e.img,src:ne,alt:"git"})]})]})})]})})})]})},de=a(61),me=a.n(de),be=a(60),je=a.n(be),fe=Object(d.a)((function(e){return{root:{marginTop:"4rem",fontFamily:"Nunito,sans-serif",color:"#fff",background:"#333333",overflow:"hidden"},container:{padding:"2rem"},content:{display:"flex",justifyContent:"center"},containerIcons:{display:"flex",justifyContent:"center","& i":Object(i.a)({display:"block",fontSize:"2rem",textAlign:"center",margin:"0 1.5rem",cursor:"pointer",transition:"all 0.4s ease-in-out","&:hover":{color:"#cda434",transform:"scale(1.05)"}},e.breakpoints.down("xs"),{margin:"0 2rem"})},border:Object(i.a)({borderRight:"3px solid #cd853f"},e.breakpoints.down("xs"),{border:"none",borderBottom:"3px solid #cd853f"}),footer:{textAlign:"center",cursor:"pointer",fontFamily:"Nunito",fontWeight:"600",fontSize:"1rem"},icons:{display:"flex","& a ":{color:"white",fontSize:"25px",cursor:"pointer",marginLeft:"1rem"}},facebook:{transition:"0.5s ease-in-out","&:hover":{color:"#3b5998"}},github:{transition:"0.5s ease-in-out","&:hover":{color:"#211F1F"}},linkedin:{transition:"0.5s ease-in-out","&:hover":{color:"#0e76a8"}},ref:{textDecoration:"none"},contentContact:{display:"flex",justifyContent:"center","& svg":{marginRight:"1rem"}},text:{fontFamily:"Nunito",fontWeight:"600"}}}));var pe=function(){var e=fe();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)("div",{className:e.container,children:Object(x.jsxs)(F.a,{container:!0,spacing:3,className:e.content,children:[Object(x.jsxs)(F.a,{item:!0,xs:12,sm:4,md:4,className:e.border,children:[Object(x.jsx)(N.a,{className:e.footer,children:"Franco Jossep Hermenegildo Flores"}),Object(x.jsx)(N.a,{className:e.footer,children:"2021 - \xa9"})]}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,md:4,className:e.border,children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:e.contentContact,children:[Object(x.jsx)(je.a,{}),Object(x.jsx)(N.a,{className:e.text,children:"francoheflo@gmail.com"})]}),Object(x.jsxs)("div",{className:e.contentContact,children:[Object(x.jsx)(me.a,{}),Object(x.jsx)(N.a,{className:e.text,children:"933475707"})]})]})}),Object(x.jsx)(F.a,{item:!0,xs:12,sm:4,md:4,children:Object(x.jsx)(D.a,{className:e.content,children:Object(x.jsxs)("div",{className:e.icons,children:[Object(x.jsx)("a",{href:"https://www.linkedin.com/in/franco-jossep-hermenegildo-flores-69a8a2208/",target:"_blank",rel:"noreferrer",className:e.ref,children:Object(x.jsx)("i",{className:"fab fa-linkedin ".concat(e.linkedin)})}),Object(x.jsx)("a",{href:"https://github.com/zFranco23",target:"_blank",rel:"noreferrer",className:e.ref,children:Object(x.jsx)("i",{className:"fab fa-github ".concat(e.github)})}),Object(x.jsx)("a",{href:"https://www.facebook.com/franco.flores.7545708/",target:"_blank",rel:"noreferrer",className:e.ref,children:Object(x.jsx)("i",{className:"fab fa-facebook ".concat(e.facebook)})})]})})})]})})})},ge=a(62),he=a.n(ge),xe=Object(d.a)((function(e){return{root:Object(i.a)({position:"fixed",zIndex:"999999999",width:"100%",height:"100%",top:0,background:"#eeefe2x",justifyContent:"center",alignItems:"center",display:"none",opacity:1,transition:"0.6s ease-in-out"},e.breakpoints.down("xs"),{display:"flex"}),content:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},link:{background:"none",border:"none",cursor:"pointer",fontFamily:"Nunito,sans-serif",fontSize:"2rem",marginTop:"2rem"},close:{position:"absolute",top:1,left:12},closeIcon:{fontSize:"2rem"},off:{top:"-100%"}}}));var ue=function(e){var t=e.visible,a=e.handleVisible,s=xe();return Object(x.jsxs)("div",{className:"".concat(s.root," ").concat(!t&&s.off),children:[Object(x.jsx)(m.a,{className:s.close,onClick:a,children:Object(x.jsx)(he.a,{className:s.closeIcon})}),Object(x.jsxs)("div",{className:s.content,children:[Object(x.jsx)(g.Link,{to:"home",smooth:!0,children:Object(x.jsx)("button",{className:s.link,onClick:a,children:"Inicio"})}),Object(x.jsx)(g.Link,{to:"about",smooth:!0,children:Object(x.jsx)("button",{className:s.link,onClick:a,children:"Sobre mi"})}),Object(x.jsx)(g.Link,{to:"projects",smooth:!0,children:Object(x.jsx)("button",{className:s.link,onClick:a,children:"Proyectos"})})]})]})};var Oe=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),a=t[0],o=t[1],n=Object(s.useState)(),i=Object(c.a)(n,2),r=i[0],l=i[1],d=Object(s.useState)(!1),m=Object(c.a)(d,2),b=m[0],j=m[1];Object(s.useEffect)((function(){o(!0),l(0)}),[]);var f=function(){j(!b)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(ue,{visible:b,handleVisible:f}),Object(x.jsx)(O,{active:r,handleActive:function(e){l(e)},handleVisible:f}),Object(x.jsx)(T,{checked:a}),Object(x.jsx)(q,{}),Object(x.jsx)(P,{}),Object(x.jsx)(le,{}),Object(x.jsx)(pe,{})]})};var ve=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(Oe,{})})};n.a.render(Object(x.jsx)(ve,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.a82c315a.chunk.js.map