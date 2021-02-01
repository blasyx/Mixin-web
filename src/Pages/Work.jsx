
import React from 'react';
import { motion } from "framer-motion";


function Work() {

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0  },
      }
    const variants2 = {
        hidden: { opacity: 0, x: -50, transition: {delay: 0.4} },
        visible: { opacity: 1, x: 0, transition: {delay: 0.4}  },
      }


    return (
        <div className='work'>
            <motion.h1 className="work-title"
            initial="hidden" animate="visible" variants={variants}>OUR WORK</motion.h1>
            <motion.div className="work-intro"
            initial="hidden" animate="visible" variants={variants2}>
                <p className="work-intro-text">For over 7 years, we have been leading with purpose, we deliver top-notch branding, meaningful content and sustainable growth to our clients in a creative and engaging way.</p>
            </motion.div>
            <motion.div className="work-clients"
            initial="hidden" animate="visible" variants={variants2}>
                <h1 className="work-clients-title"> CLIENTS</h1>
                <div className="work-clients-box">
                    <div className="work-clients-box1">
                        <h2 className="work-clients-box-name">Gastrofasa</h2>
                        <h2 className="work-clients-box-name">Comunlife</h2>
                        <h2 className="work-clients-box-name">Somos Rego</h2>
                    </div>
                    <div className="work-clients-box2">
                        <h2 className="work-clients-box-name">Fantiksye srl</h2>
                        <h2 className="work-clients-box-name">Trogo</h2>
                        <h2 className="work-clients-box-name">MeanFloor</h2>
                    </div>
                    <div className="work-clients-box3">
                        <h2 className="work-clients-box-name">IbuTrucks</h2>
                        <h2 className="work-clients-box-name">Pamperdole srl</h2>
                    </div>
                </div>
            </motion.div>

            <div className="work-special">
                <p className="work-special-text">We specialize in startups with clear messages and social support. We like to know that we help teams that do good to the world.</p>
            </div>

            <div className="work-contact">
                <p className="work-contact-text">CONTACT US</p>
            </div>
        </div>
    )
}

export default Work
