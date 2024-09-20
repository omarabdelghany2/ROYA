'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss'; // Import SCSS module
import Link from 'next/link';
import Image from 'next/image'
import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";


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
            src="/svgs/white-logo.svg"
            width={50}
            height={50}
            alt="Roya Technology logo"
          />
        </Link>
        <div className={styles.base}>
          <div className={styles.menu} onClick={toggleMenu}>
             { isOpen ? <HiX /> : <IoMenu /> }
          </div>
          <div className={styles.navigator}>
            <div className={styles.left}>
              <Link href="/">Home</Link>
              <Link href="/">Departments</Link>
            </div>
            <div className={styles.mid}>
              <Link href="/">Contact us</Link>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.icon}><FaInstagram /></div>
            <div className={styles.icon}><FaXTwitter /></div>
            <div className={styles.icon}><FaFacebookF /></div>
            <div className={styles.icon}><FaLinkedin /></div>
          </div>
        </div>
        
        {
          isOpen ? (
            <ul className={styles.navmobile}>
              <li className={styles.mobilelink} >
                <Link href={"/"} >Home</Link>
                <RiArrowDropDownLine />
                </li>
              <li className={styles.mobilelink} >
                <Link href={"/"} >Departments</Link>
                <RiArrowDropDownLine />
              </li>
              <li className={styles.mobilelink} >
                <Link href={"/"} >Contact Us</Link>
                <RiArrowDropDownLine />
              </li>
            </ul>
          ) : null
        }
      </nav>
    </header>
  );
};

export default Header;
