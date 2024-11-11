import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../layouts/PageLayout/PageLayout';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <ContactForm />
    </PageLayout>
  )
}

export default Contact;

export const Head: HeadFC = () => <title>Contact</title>;