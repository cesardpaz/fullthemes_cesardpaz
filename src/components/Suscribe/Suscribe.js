import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const Suscribe = () => {

    const susccess = document.querySelector('.suscribe-form__form span');

    const formik = useFormik({

        initialValues: {
            email: "",
        },
        validationSchema: yup.object({
            email: yup.string()
                    .email()
                    .required()
        }),
        onSubmit: (values, {resetForm, setStatus}) => {
            susccess.classList.add('active');
            susccess.textContent = 'Your registration was successful';
            
            setTimeout( ()=> {
                susccess.classList.remove('active');
                resetForm({})
                setStatus({success: true});
            },2000);
        },

    });

    return (
        <div className="suscribe">
            <div className="container">
                <div className="suscribe-form">
                    <div className="suscribe-form__content">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <div className="suscribe-form__titles">
                            <h3>Fear Of Missing Out?</h3>
                            <h4>Get the latest deals, updates & more</h4>
                        </div>
                    </div>
                    <div className="suscribe-form__form">
                        <form 
                            onSubmit={formik.handleSubmit}
                        >
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Your email address"
                                onChange={formik.handleChange}
                                error={formik.errors.email}
                                value={formik.values.email}
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                        <span className="susccess"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscribe
