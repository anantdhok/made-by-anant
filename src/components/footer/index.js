import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { mergeClass } from "../../shared/utils/index.js";
import styles from "../../shared/styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={mergeClass(styles.body, "container")}>
        <p>
          I look for jobs I am passionate about, which will allow me to be extremely productive and creative. I have
          experience working in UI Design, Full Stack Development, Cloud, and Graphic Design. I'd like to work in a team
          that'll help me learn more about my expertise and grow my existing set of skills.
        </p>
        <span className={styles.social}>
          <Link href="/media/Anant Dhok.pdf" target="_blank" rel="noopener noreferrer" aria-label="Mail">
            Resume
          </Link>
          |
          <Link
            href="https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=anantdhok16@gmail.com&su=Hi!&body=Write your message here, I'll get in touch with you ASAP.%0AThank you for writing!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
          >
            <SiGmail className={styles.icon} />
          </Link>
          <Link href="//www.instagram.com/anantdhok/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={styles.icon} />
          </Link>
          <Link
            href="//www.linkedin.com/in/anantdhok-444701/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </Link>
          <Link href="//twitter.com/AnantDhok" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <FaTwitter className={styles.icon} />
          </Link>
        </span>
      </div>

      <div className={mergeClass(styles.body, "container")}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={54} height={12} />
          </span>
        </a>
        <small>© 2020-21, All rights reserved by Anant Dhok</small>
      </div>
    </footer>
  );
}
