// import React, { useState } from 'react';

// function ContactForm() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate form fields
//         const newErrors = {};
//         if (!formData.fullName) {
//             newErrors.fullName = 'Full name is required';
//         }
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         }

//         setErrors(newErrors);

//         // If there are no errors, submit the form
//         if (Object.keys(newErrors).length === 0) {
//             // Handle form submission (e.g., send data to server)
//             console.log('Form submitted:', formData);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label htmlFor="fullName">Full Name:</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.email && <small className="text-danger">{errors.email}</small>}
//             </div>
//             <div className="form-group">
//                 <label htmlFor="message">Message:</label>
//                 <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                 ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Send</button>
//         </form>
//     );
// }

// export default ContactForm;



import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
export const ContactUs = () => {




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
                    window.location.reload();



                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(error)
                },
            );
    };

    return (
        <form className="form-div" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
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

export default ContactUs

