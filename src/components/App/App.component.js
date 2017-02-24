import React from 'react';
import styles from './App.stylesheet.scss';
import Header from '../Header/Header.component';
import Nav from '../Nav/Nav.component';
import Footer from '../Footer/Footer.component';

const App = ({ children }) =>
  <section className={styles.red}>
    <Header />
    <Nav />
    {children}
    <Footer />
  </section>;

export default App;
