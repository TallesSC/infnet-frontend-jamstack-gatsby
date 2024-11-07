import React from "react";
import * as styles from './Header.module.scss';
import { Link } from 'gatsby';
export default function Header() {
  return <header className={styles.header}>
    <nav className="container">
      <Link to="/" className={styles.title}>Tech<span className={styles.highlight}>NEWS</span></Link>
      <ul className={styles.links}>
        <li className={styles.item}><Link className={styles.link} to="/">Home</Link></li>
      </ul>
    </nav>
  </header>
}