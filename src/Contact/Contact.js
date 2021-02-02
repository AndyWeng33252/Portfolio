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
    return (<section>
        <h1 className="title">Contacts</h1>
        <form
            onSubmit={() => submitForm()}
            action="https://formspree.io/f/mknpejgz"
            method="POST"
            className="form">

        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea type="text" name="message" />
        {success === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {success === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
    </section>
    );
}
export default Contact;