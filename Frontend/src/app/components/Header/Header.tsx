'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss'; // Import SCSS module
import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
        <Image
          src="/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={styles.hamburger}></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
