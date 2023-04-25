import Link from 'next/link';
import styles from './index.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href="/" className={styles.header__title}>
                <h1 className={styles.header__title}>Milieu</h1>
            </Link>
                <div className={styles.header__links}>
                    <Link className={styles.header__links__link} href="#how">
                        <span>How</span>
                    </Link>
                    <Link className={styles.header__links__link} href="#experiments">
                        <span>Experiments</span>
                    </Link>
                    <Link className={styles.header__links__link} href="#contact">
                        <span>Contact</span>
                    </Link>
                </div>
                <button className={styles.header__button}>
                    Shop
                    <svg className={styles.header__button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </button>
        </div>
    )
}

export default Header;