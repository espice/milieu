import styles from "./index.module.scss";
import Bg from '../../../public/bg.svg';

const Landing = () => {
    return (
        <div className={styles.landing}>
            <div className={styles.landing__hack}>
                <div className={styles.landing__bg} />
                <div className={styles.landing__chip}>
                    <span className={styles.landing__chip__read}>New: Fabripaint</span>
                    <button className={styles.landing__chip__button}>Read More
                    <svg className={styles.landing__button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </button>
                </div>
                <div className={styles.landing__title}>
                    <h1 className={styles.landing__title__title}>
                    Eco Friendly clothing for the Modern World
                    </h1>
                    <h2 className={styles.landing__title__subtitle}>Helping save the world, one cloth at a time</h2>
                </div>
            </div>
        </div>
    )
}

export default Landing;