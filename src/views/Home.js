import React, { useEffect, useState } from 'react'

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';

function Home() {

    const [checked,setChecked]=useState();
    const [active,setActive]=useState();
    const [visible,setVisible]=useState(false);



    useEffect(()=>{
        setChecked(true);
        setActive(0);
    },[])

    const handleActive = (i) =>{
        setActive(i)
    }
    const handleVisible = () =>{
        setVisible(!visible);
    }
    return (
        <div>
            <DropdownMenu visible={visible} handleVisible={handleVisible}/>
            <Appbar active={active} handleActive={handleActive} handleVisible={handleVisible}/>
            <Hero checked={checked}/>
            <About />
            <Projects />
            <Technologies />
            <Footer />

        </div>
    )
}

export default Home
