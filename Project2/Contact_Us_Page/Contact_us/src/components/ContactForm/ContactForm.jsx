import React, { useState } from 'react'
import styles from "./Contact.module.css";
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md'
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")




    const onSubmit = (event) => {
        event.preventDefault()

    

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

        console.log("name: ", event.target[0].value); 
        console.log("email: ", event.target[1].value);
        console.log("text: ", event.target[2].value);
    };



  return (
    <section className={styles.container} >

        <div className={styles.contact_form} >

            <div className= {styles.top_btn} >

                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
                <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />}/>


            </div>

            <Button isOutline = {true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />}/>

            <form onSubmit={onSubmit} >

                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="7" />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>                                                                                    
                    <Button isOutline={false} text="SUBMIT BUTTON" />
                </div>

                <div>
                    {
                        name + " " + email + " " +text
                    }
                </div>

                 
                

            </form>

            
        </div>

        <div className={styles.contact_image} >
            <img src="/images/service.svg" alt="" />
        </div>

    </section>
  )
}

export default ContactForm
