
"use client";
import Link from 'next/link';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar;
