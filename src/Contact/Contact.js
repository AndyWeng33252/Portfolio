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
            onSubmit={() => submitForm()}
            action="https://formspree.io/f/mknpejgz"
            method="POST"
            className="form">

            <div>
                <label>Email:</label>
                <input type="email" name="email"
                className="input"/>
            </div>

            <div>
                <label>Message:</label>
                <textarea type="text" name="message"
                className="input message"/>
            </div>

            {success === "SUCCESS" ? <p>Thanks!</p> : <button className="button">Submit</button>}
            {success === "ERROR" && <p>Ooops! There was an error.</p>}

        </form>

        <div className="socialIcons">
            ICONS
        </div>
    </section>
    );
}
export default Contact;