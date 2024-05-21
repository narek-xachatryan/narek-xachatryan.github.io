import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../button/Button.jsx';
import { SocialButton } from '../socialButton/SocialButton.jsx';
import { env } from '../../env.js';
import styles from "./contact.module.scss";

export const Contact = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const validateEmail = (email) => {
        var validate = /\S+@\S+\.\S+/;
        setEmail(email);
        if (!email) {
            setEmailError("Please write an email.");
            setIsDisabled(true);
        }
        else if (!validate.test(email)) setEmailError("Please write correct email.");
        else {
            setEmail(email);
            setEmailError("");
        }
    };

    const validateMessage = (message) => {
        setMessage(message);
        if (!message) {
            setMessageError("Please write a message.");
            setIsDisabled(true);
        }
        else setMessageError("");
    };

    const validate = () => {
  console.log(22222, form.current); return
  if (!message || !email || !(/\S+@\S+\.\S+/).test(email)) {
            validateMessage(message);
            validateEmail(email);
        } else {
            sendEmail();
            setIsDisabled(false);
        }
    };

    useEffect(() => {
        if (message && email && (/\S+@\S+\.\S+/).test(email)) setIsDisabled(false);
        else setIsDisabled(true);
    }, [message, email]);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
//   console.log(111111, form.current); return
      emailjs
        .sendForm('service_sibzsjj', 'template_kslcq2l', form.current, {
          publicKey: 'K01C4fcgXvp1jejk4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (<section className={styles.contact} id="contact">
        <h1>Contact Me</h1>
        <div className={styles.contact_content}>
            <img src="/images/contact.svg" alt="" />
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="email">Email</label><br />
                <input
                    type="text"
                    id="email"
                    name='email'
                    placeholder="example@gmail.com"
                    onChange={(e) => validateEmail(e.target.value)}
                />
                {emailError && <p className={`${styles.error} ${styles.errorEmail}`}>{emailError}</p>}<br />
                <label htmlFor="message">Message</label><br />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Describe your project"
                    onChange={(e) => validateMessage(e.target.value)}></textarea>
                {messageError && <p className={styles.error}>{messageError}</p>}
                <div className={styles.contact_buttons}>
                    {!isDisabled && <Button
                        text="Send Message"
                        color="#fff"
                        background='linear-gradient(269.64deg, #4b30cd 0.26%, #78fd7d 99.66%)'
                        // borderColor='linear-gradient(269.64deg, #4b30cd 0.26%, #78fd7d 99.66%)'
                        // href={`https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3D${env.email}%26subject%3DMessage%2520from: %2520${email}%26body%3D${message}`}
                        src={"/images/send.svg"}
                        isDownload={false}
                        hoverDetails={"cvButton"}
                        target={'blank'}
                        onClick={sendEmail}
                    />
                    }
                    {isDisabled &&
                        <span onClick={validate}>
                            <Button
                                text="Send Message"
                                color="#fff"
                                background='linear-gradient(269.64deg, #4b30cd 0.26%, #78fd7d 99.66%)'
                                // borderColor='linear-gradient(269.64deg, #4b30cd 0.26%, #78fd7d 99.66%)'
                                src={"/images/send.svg"}
                                isDownload={false}
                                hoverDetails={"cvButton"}
                            /></span>}
                    <div className={styles.social_icons}>
                        <SocialButton src={"/icons/email.svg"} href={`mailto:${env.email}`} />
                        <SocialButton src={"/icons/github.svg"} href={env.github} />
                    </div>
                </div>
            </form>
        </div>
    </section>);
}
