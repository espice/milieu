import styles from "./index.module.scss";
import BackSvg from "../../../public/back.svg";
import StarSvg from "../../../public/star.svg";
import HeartSvg from "../../../public/heart2.svg";
import { useState } from "react";

const Cloth = () => {
    const [search, setSearch] = useState("");
    return (
        <div style={{height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center'}}>
        <div className={styles.cloth}>
            <BackSvg style={{display: 'block'}} />
            <div className={styles.cloth__content}>
                <div className={styles.cloth__content__shirt}>
                    <img src="/shirt.png" className={styles.cloth__content__shirt__shirt} />
                    <div className={styles.cloth__content__shirt__slides}>
                        <div className={styles.cloth__content__shirt__slides__slide} style={{borderColor: '#2B8BFC'}}>
                            <img src="/tshirt.png" className={styles.cloth__content__shirt__slides__slide__image} />
                        </div>
                        <div className={styles.cloth__content__shirt__slides__slide}>
                            <img src="/tshirt.png" className={styles.cloth__content__shirt__slides__slide__image} />
                        </div>
                        <div className={styles.cloth__content__shirt__slides__slide}>
                            <img src="/tshirt.png" className={styles.cloth__content__shirt__slides__slide__image} />
                        </div>
                        <div className={styles.cloth__content__shirt__slides__slide}>
                            <img src="/tshirt.png" className={styles.cloth__content__shirt__slides__slide__image} />
                        </div>
                      
                    </div>
                </div>
                <div className={styles.cloth__content__content}>
                    <div className={styles.cloth__content__content__content}>
                        <h1 className={styles.cloth__content__content__content__title}>Black Unisex T-Shirt (Hemp)</h1>
                        <div className={styles.cloth__content__content__content__stars}>
                            <StarSvg />
                            <StarSvg />
                            <StarSvg />
                            <StarSvg />
                        </div>
                        <h1 className={styles.cloth__content__content__content__price}>$1.99</h1>
                        <div className={styles.divider}>

                        </div>
                        <div className={styles.deets}>
                            <span className={styles.deets__text}>Material: Hemp</span>
                            <span className={styles.deets__text}>Color: Black</span>
                            <span className={styles.deets__text}>Emissions: 10% less CO2 than average</span>
                            <span className={styles.deets__text}>Water Usage: 5x less than average</span>          
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.sizes}>
                            <h3 className={styles.sizes__name}>Select Size</h3>
                            <h4 className={styles.sizes__deets}>See Sizing Chart </h4>
                        </div>
                        <div className={styles.sizescards}>
                            <div className={styles.sizescards__card}>
                                XS
                            </div>
                            <div className={styles.sizescards__card}>
                                S
                            </div>
                            <div className={styles.sizescards__card}>
                                M
                            </div>
                            <div className={styles.sizescards__card}>
                                L
                            </div>
                            <div className={styles.sizescards__card}>
                                XL
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.buttons__button}>Add to Cart</button>
                            <HeartSvg />
                        </div>
                        <div className={styles.feedback}>
                            <div className={styles.feedback__icon}>
                                A
                            </div>
                            <input className={styles.feedback__input} placeholder={"Leave some feedback..."} value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cloth;