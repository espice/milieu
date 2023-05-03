import Link from 'next/link';
import styles from './index.module.scss';
import useUser from '../../../utils/hooks/useUser';
import CartSvg from '../../../public/cart.svg';

const Header = () => {
    const user = useUser();
    if (!user?.user) {
    return (
        <div className={styles.header}>
            <Link href="/" className={styles.header__title}>
                <h1 className={styles.header__title}>Milieu</h1>
            </Link>
                <div className={styles.header__links}>
                    <Link className={styles.header__links__link} href="https://google.com">
                        <span>How</span>
                    </Link>
                    <Link className={styles.header__links__link} href="https://google.com">
                        <span>Why</span>
                    </Link>
                    <Link className={styles.header__links__link} href="https://google.com">
                        <span>Experiments</span>
                    </Link>
                    <Link className={styles.header__links__link} href="https://google.com">
                        <span>Contact</span>
                    </Link>
                </div>
                <button className={styles.header__button}>
                    Shop
                    <svg className={styles.header__button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </button>
        </div>
    )
    } else {
        return (
            <div className={styles.header2}>
                <div className={styles.header2__links}>
                    <Link className={styles.header2__links__link} href="https://google.com">
                        <span>Men</span>
                    </Link>
                    <Link className={styles.header2__links__link} href="https://google.com">
                        <span>Women</span>
                    </Link>
                    <Link className={styles.header2__links__link} href="https://google.com">
                        <span>Kids</span>
                    </Link>
                    <Link className={styles.header2__links__link} style={{color: '#00A560'}} href="https://google.com">
                        <span>Up-cycle</span>
                    </Link>
                </div>
                <div className={styles.header2__button}>
                    Cart
                    <CartSvg className={styles.header2__button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></CartSvg>
                </div>
                <div className={styles.header2__pfp}>

                </div>
        </div>
        )
    }
}

export default Header;