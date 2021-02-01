
import React from 'react';
import { TeampeopleData } from '../Components/TeampeopleData';
import { motion } from "framer-motion";



function Aboutus() {

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0  },
      }
    const variants2 = {
        hidden: { opacity: 0, x: -50, transition: {delay: 0.4} },
        visible: { opacity: 1, x: 0, transition: {delay: 0.4}  },
      }


    return (
        <div className='about'>

                <motion.div className="about-text"
                initial="hidden" animate="visible" variants={variants}>
                    <h1 className='about-text-title'>ABOUT US</h1>
                    <h2 className="about-text-big">We work until we see the invisible</h2>
                    <h2 className="about-text-small">Because it is our passion to serve our clients to the utmost satisfaction, we go against all odds to meet your expectations. We can’t promise you the world but here’s one thing we can assure you: We like to be as clear as we possibly can. We’ll hound you – one, two, three meetings – as many as it takes to get it right! We’re not perfectionists. We just want to make YOU the happiest.
                    </h2>
                </motion.div>
            <motion.div className="about-team"
            initial="hidden" animate="visible" variants={variants2}>
                <h2 className="about-team-title">Our Team</h2>
                <div className="about-team-people">
                    {TeampeopleData.map((item)=>{
                        return(
                            <div className='people'>
                                <div className="people-img">
                                   <img src={item.photo} alt="team-people" className="people-img-photo"/>
                                </div>
                                <h2 className="people-name">{item.name}</h2>
                                <p className="people-title">{item.title}</p>
                            </div>
                        )

                    })}
                </div>
            </motion.div>

            <div className="about-law">
                <div className="about-law-words">
                    <p className="about-law-words-text">PEOPLE</p>
                </div>
                <div className="about-law-words">
                    <p className="about-law-words-text">+</p>
                </div>
                <div className="about-law-words">
                    <p className="about-law-words-text">DREAMS</p>
                </div>
                <div className="about-law-words">
                    <p className="about-law-words-text">=</p>
                </div>
                <div className="about-law-words">
                    <p className="about-law-words-text">RESULTS</p>
                </div>
            </div>
            <div className="about-law-sub">
                    <p className="about-law-sub-text">It is our motto.</p>
            </div>
            <div className="about-law-team">
                    <p className="about-law-team-text">The diversity of opinions and points of view is what is really interesting about teamwork. A dynamic work will help you to grow individually and collectively, that is, you will achieve double the goals</p>
            </div>




        </div>
    )
}

export default Aboutus
