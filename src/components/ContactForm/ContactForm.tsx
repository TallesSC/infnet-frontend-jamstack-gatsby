import * as React from 'react';
import * as styles from './ContactForm.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {

  const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });

  return <section className={styles.section}>
    <div className="container">
      <h1 className={styles.title}>Contact Us!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">
            Name
            <input value={values.name} onChange={handleChange} id="name" name="name" type="text"/>
            <p className={styles.error}>{errors.name}</p>
          </label>
          <label htmlFor="email">
            Email
            <input value={values.email} onChange={handleChange} id="email" name="email" type="email"/>
            <p className={styles.error}>{errors.email}</p>
          </label>
        </div>
        <label htmlFor="message">
          Message
          <textarea value={values.message} onChange={handleChange} name="message" id="message"/>
          <p className={styles.error}>{errors.message}</p>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>;
}