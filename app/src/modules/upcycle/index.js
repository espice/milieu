import styles from "./index.module.scss";
import PlusSvg from "../../../public/plus.svg";

const Upcycle = () => {
    return (
        <div className={styles.upcycle}>
            <div className={styles.section}>
                <h1 className={styles.section__title}>Up-Cycle</h1>
                <h2 className={styles.section__subtitle}>Your recent orders</h2>
            </div>
            <div className={styles.stuff}>
                <div className={styles.stuff__row}>
                    <div className={styles.stuff__row__plus}>
                        <PlusSvg className={styles.stuff__row__plus__plus} />
                        <h2 className={styles.stuff__row__plus__title}>New Order</h2>
                     </div>   
                     <div className={styles.stuff__row__item}>
                        <div style={{padding: '20px'}}>
                        <h1 className={styles.stuff__row__item__heading}>Saree  -{"> "} Shirt</h1>
                        <div className={styles.stuff__row__item__bottom}>
                            <h2 className={styles.stuff__row__item__bottom__status}>Status: Tailoring</h2>
                            <h2 className={styles.stuff__row__item__bottom__delivery}>Estimated Delivery: 28 April</h2>
                        </div>
                        </div>
                     </div>
                </div>
                <div className={styles.stuff__row}>
                <div className={styles.stuff__row__item}>
                        <div style={{padding: '20px'}}>
                        <h1 className={styles.stuff__row__item__heading}>Saree  -{"> "} Shirt</h1>
                        <div className={styles.stuff__row__item__bottom}>
                            <h2 className={styles.stuff__row__item__bottom__status}>Status: Tailoring</h2>
                            <h2 className={styles.stuff__row__item__bottom__delivery}>Estimated Delivery: 28 April</h2>
                        </div>
                        </div>
                     </div>  
                     <div className={styles.stuff__row__item}>
                        <div style={{padding: '20px'}}>
                        <h1 className={styles.stuff__row__item__heading}>Saree  -{"> "} Shirt</h1>
                        <div className={styles.stuff__row__item__bottom}>
                            <h2 className={styles.stuff__row__item__bottom__status}>Status: Tailoring</h2>
                            <h2 className={styles.stuff__row__item__bottom__delivery}>Estimated Delivery: 28 April</h2>
                        </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Upcycle;