import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';






export const ContactForm = () => {




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nl96w5r', 'template_6rwi2zz', form.current, {
                publicKey: 'jhNHZ8e3DPtKak_R-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');

                    toast.success("Email sent")


                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(error)
                },
            );
    };

    return (
        <form className="form-div" ref={form} onSubmit={sendEmail}>
            <label> Full Name</label>
            <input
                className="form-control"
                type="text" name="user_name"
                required
            />
            <label>Email</label>
            <input
                className="form-control"
                type="email" name="user_email"
                required
            />
            <label>Phone Number</label>

            <input
                className="form-control"
                type="number" name="user_email"
                required
            />
            <label>Message</label>
            <textarea
                className="form-control"

                name="message"
                required
            />
            <input
                className="btn-primary"
                type="submit" value="Send" />

            <Toaster position='top-center' />


        </form>


    );
};

export default ContactForm

