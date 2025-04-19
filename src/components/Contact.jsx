import React from "react";
import "../styles/contact.css";

const Contact = () => {
    return (
        <section className='contact vw-100'>
            <form
                action=''
                className='contact-form d-flex w-100 d-column align-center justify-center'
            >
                <label>Name</label>
                <input type='text' placeholder="Who's reaching out?" />
                <label>Email</label>
                <input type='email' placeholder='Where can I write you back?' />
                <label>Subject</label>
                <input type='text' placeholder="What's on your mind?" />
                <label>Message</label>
                <textarea type='text' placeholder="Let's make it meaningful" />
                <button className='moreBtn' type='submit'>
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
