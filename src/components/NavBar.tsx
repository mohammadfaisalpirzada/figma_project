import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
   
      <div className={styles.navbar__container}>
     
     
        <div className={styles.navbar__logo}>


          <Image
           src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />


        </div>

     
        <div className={styles.navbar__links}>
          <Link href="/" className={styles.navbar__link}>
            <div className={styles.navbar__linkWithLines} >
      
      
              <Image
                src="/images/Rectangle 19.png"
                
                alt="Top line"
                className={styles.navbar__topLine}
                width={100}
                height={5}
              />
              <span className={styles.navbar__linkText}>MAIN</span>
      
      
              <Image
                src="/images/Rectangle 18.png"  
                
                alt="Bottom line"
                className={styles.navbar__bottomLine}
                width={100}
                height={5}
              />
            </div>
          </Link>

       
       
          <Link href="/gallery" className={styles.navbar__link}>
            GALLERY
          </Link>
          <Link href="/projects" className={styles.navbar__link}>
            PROJECTS
          </Link>
          <Link href="/certifications" className={styles.navbar__link}>
            CERTIFICATIONS
          </Link>
          <Link href="/contacts" className={styles.navbar__link}>
            CONTACTS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
