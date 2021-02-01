
import React from 'react';
import { motion } from "framer-motion";

function Contact() {

const variants = {
    hidden: { opacity: 0, x: -50, transition: {delay: 0.4} },
    visible: { opacity: 1, x: 0, transition: {delay: 0.4}  },
    } 

const variants2 = {
    hidden: { opacity: 0, x: -50, transition: {delay: 0.6} },
    visible: { opacity: 1, x: 0, transition: {delay: 0.6}  },
    }

    return (
        <div className='contact'>
            <motion.div className="contact-title"
            initial="hidden" animate="visible" variants={variants}>
                <h1 className="contact-title-text">CONTACT US</h1>
                <p className="contact-title-subtext">
                We are glad to hear from your company.
                <br/> What do you prefer to communicate?</p>
            </motion.div>

        <motion.div className="contact-social"
        initial="hidden" animate="visible" variants={variants2}>
            <h2 className="contact-social-link">+46 246 235 235</h2>
            <h2 className="contact-social-link">hola@mixin.ico</h2>
            <h2 className="contact-social-link">Telegram</h2>
            <h2 className="contact-social-link">Google Meet</h2>
        </motion.div>
        <motion.div className="contact-form"
        initial="hidden" animate="visible" variants={variants2}>
            <h2 className="contact-form-title">Or send us a message here:</h2>
        </motion.div>
        <motion.form action="" method='post' 
        initial="hidden" animate="visible" variants={variants2}>
            <ul>
            <li>
                <label for="name">Name:</label>
                <input type="text" id="name" name="user_name" placeholder="What is your name?"/>
            </li>
            <li>
                <label for="mail">Mail:</label>
                <input type="email" id="mail" name="user_mail" placeholder="What is your mail?"/>
            </li>
            <li>
                <label for="msg">Messege:</label>
                <textarea id="msg" name="user_message" placeholder="What do you want to tell us?"></textarea>
            </li>
            <li class="button">
                <button type="submit">Send</button>
            </li>
            </ul>
        </motion.form>
        </div>
    )
}

export default Contact
