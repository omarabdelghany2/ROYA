"use client";

import Image from 'next/image'
import styles from './Footer.module.scss'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTheme } from 'next-themes';



const Footer = () => {
  const { setTheme, resolvedTheme } = useTheme()


  return (
    <footer className={styles.footer}>
        <div className={styles.info}>
        <div className={styles.contact}>
            <p>
                <a href="tel:+2033087744"><TbDeviceLandlinePhone /> +2033087744</a>
                <a href="tel:+201066684474"><FaPhoneAlt /> +20-010 666 84474</a>
                <a href="mailto:info@roya-technology.com"><MdEmail /> info@roya-technology.com</a>
            </p>
        </div>
        
        <div className={styles.socialmedia}>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://x.com" target="_blank" aria-label="X (formerly Twitter)"><FaXTwitter /></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <div className={styles.description}>
            <p>
            Roya Technology is an Egyptian limited liability company with extensive experience in engineered Process Automation & Instrumentation, Electrical solutions. We provide complete automation solutions from the design phase, engineering, factory acceptance tests, commissioning, and startup phases. We manage project development and build a strong structure to serve partners and clients professionally, handling the EPC business from bidding to project handover.
            </p>
        </div>
        </div>
        <div className={styles.logo}>
            <Image width={70} height={85} src={`${resolvedTheme === "dark" ? "/svgs/white-logo.svg": "/svgs/black-logo.svg"}`} alt="Roya technology logo" />
        </div>
    </footer>
  )
}

export default Footer