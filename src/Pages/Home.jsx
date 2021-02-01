import React from 'react';
import { motion } from "framer-motion";

function Home() {

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }
    const variants2 = {
    hidden: { opacity: 0, x: -50, transition: {delay: 0.8} },
    visible: { opacity: 1, x: 0, transition: {delay: 0.8}  },
    }
    
    return (
        <div className='home'>
           <div className="home-box">
            <div className="home-boxintro">
                <motion.p className="home-boxintro-pretitle"
                initial="hidden" animate="visible" variants={variants2}>
                    we are
                </motion.p>
                <motion.h1 className='home-boxintro-title'
                initial="hidden" animate="visible" variants={variants}>
                MIXIN
                </motion.h1>
            </div>
            <motion.p className="home-subtitle"
            initial="hidden" animate="visible" variants={variants2}>
            Ready to put your company in the sky?
            </motion.p>
            

            </div> 
        </div>
    )
}

export default Home
