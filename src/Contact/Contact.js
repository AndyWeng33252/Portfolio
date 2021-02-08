import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [success, setSuccess] = useState("")
    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setSuccess("SUCCESS");
            } 
            else {
                setSuccess("ERROR");
            }
        };
        xhr.send(data);
    }
    return (<section id="contact" className="contactGrid">
        <h1 className="title">Contacts</h1>
        <form
            onSubmit={submitForm}
            action="https://formspree.io/f/mknpejgz"
            method="POST"
            className="form">

            <div>
                <label>Email:</label>
                <input type="email" name="email" required
                className="input"/>
            </div>

            <div>
                <label>Message:</label>
                <textarea type="text" name="message" required
                className="input message"/>
            </div>

            <button className="button">Submit</button>
            {success === "SUCCESS" ? <p>Thanks!</p> : null}
            {success === "ERROR" && <p>Ooops! There was an error.</p>}

        </form>

        <div className="socialIcons">
            <a class="fab fa-github" onClick={()=>window.open('https://github.com/AndyWeng33252', '_blank')}></a>
            <a class="fab fa-linkedin" onClick={()=>window.open('https://www.linkedin.com/in/andy-weng-309517183', '_blank')}></a>
        </div>
    </section>
    );
}
export default Contact;