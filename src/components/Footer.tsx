import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        
        {/* Left Section: Logo */}
        <div className={styles.footer__logoSection}>
          <Image
            src="/images/footer logo.png"
            alt="Logo"
            width={145}  // Width of the logo
            height={94}  // Height of the logo
          />
        </div>

        {/* Center Section: Information and Contacts */}
        <div className={styles.footer__centerSection}>
          <div className={styles.footer__info}>
            <h4>Information</h4>
            <ul>
            <li><Link href="/">Information</Link></li>
              <li><Link href="/">Main</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><Link href="/contacts">Contacts</Link></li>
            </ul>
          </div>
          <div className={styles.footer__contacts}>
            <h4>Contacts</h4>
            <ul>
              <li><Image src="/images/location-icon.png" alt="Location" width={16} height={16} /> 1234 Sample Street, Austin Texas 78704</li>
              <li><Image src="/images/phone-icon.png" alt="Phone" width={16} height={16} /> 512.333.2222</li>
              <li><Image src="/images/email-icon.png" alt="Email" width={16} height={16} /> sampleemail@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className={styles.footer__socialsSection}>
          <h4>Social Media</h4>
          <div className={styles.footer__socials}>
            <Link href="#"><Image src="/images/facebook.png" alt="Facebook" width={10} height={19}/></Link>
            <Link href="#"><Image src="/images/Twitter.png" alt="Twitter" width={22} height={17} /></Link>
            <Link href="#"><Image src="/images/Linked In.png" alt="LinkedIn" width={20} height={20} /></Link>
            <Link href="#"><Image src="/images/pininterest.png" alt="Pinterest" width={14} height={19} /></Link>
          </div>
        </div>

      </div>

      <div className={styles.footer__bottom}>
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
