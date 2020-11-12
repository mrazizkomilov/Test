import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';

const Registratsiya = () => (
    <div className='container'>

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting = true
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="field">
                        <div className="control">
                            <label className="label">Name</label>
                            <Field className="input" type="name" name="name" placeholder="name" required />
                        </div>
                    </div>
                    <label className="label">Surname</label>
                    <div className="control has-icons-left has-icons-right">
                        <Field className="input" type="name" name="Surname" placeholder="Surname" required />
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <Field className="input" type="email" name="email" placeholder="email" required />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <Field className='input' type="password" name="password" placeholder="password" required />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
          </button>
                </Form>
            )}
        </Formik>
    </div>
);
export default Registratsiya
