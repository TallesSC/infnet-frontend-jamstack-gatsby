import React, { ReactNode } from 'react';
import '@styles/reset.scss';
import '@styles/global.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function PageLayout({children}: { children: ReactNode }) {
  return <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </>;
}