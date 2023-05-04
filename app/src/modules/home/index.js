import { useState } from "react";
import styles from "./index.module.scss";
import HeartSvg from "../../../public/heart.svg";
import Image from "next/image"
import PlusSvg from "../../../public/plus.svg";
import Link from "next/link";

const Home = () => {
    const [search, setSearch] = useState("");
    return (
        <div className={styles.home}>
            <div className={styles.home__search}>
                <input value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="What do you want to buy today?" className={styles.home__search__input}></input>
                <button className={styles.home__search__button}>Search!</button>
            </div>
            <div className={styles.home__chip}>
                <h1 className={styles.home__chip__heading}>Introducing FabriPaint.</h1>
                <h2 className={styles.home__chip__subheading}>For as long as we can remember, the way clothes work hasn’t really evolved.
                <br/>
                We’re here to change that.</h2>
                <button className={styles.home__chip__button}>See what we{"'"}ve been up to</button>
            </div>
            <div className={styles.section}>
                <h1 className={styles.section__title}>Trending Today</h1>
            </div>
            <div className={styles.shop}>
                <Link href={"/cloth/unisex-gray-tshirt"}>
                    <div className={styles.shop__item}>
                        <div className={styles.shop__item__main}>
                            <div className={styles.shop__item__main__top}>
                                <span className={styles.shop__item__main__top__off}>-10% CO2</span>
                                <HeartSvg className={styles.shop__item__main__top__heart}/>
                            </div>
                            <img className={styles.shop__item__main__image} src={"/tshirt.png"} />
                        </div>
                        <div className={styles.shop__item__stats}>
                            <div className={styles.shop__item__stats__text}>
                                <h3 className={styles.shop__item__stats__text__heading}>Grey Black Unisex T-Shirt (Hemp)</h3>
                                <h3 className={styles.shop__item__stats__text__price}>$1.99</h3>
                            </div>
                            <button className={styles.shop__item__plus}>
                                <PlusSvg/>
                            </button>
                        </div>
                    </div>
                </Link>
                <div className={styles.shop__item}>
                    <div className={styles.shop__item__main}>
                        <div className={styles.shop__item__main__top}>
                            <span className={styles.shop__item__main__top__off}>-10% CO2</span>
                            <HeartSvg className={styles.shop__item__main__top__heart}/>
                        </div>
                        <img className={styles.shop__item__main__image} src={"/tshirt.png"} />
                    </div>
                    <div className={styles.shop__item__stats}>
                        <div className={styles.shop__item__stats__text}>
                            <h3 className={styles.shop__item__stats__text__heading}>Grey Black Unisex T-Shirt (Hemp)</h3>
                            <h3 className={styles.shop__item__stats__text__price}>$1.99</h3>
                        </div>
                        <button className={styles.shop__item__plus}>
                            <PlusSvg/>
                        </button>
                    </div>
                </div>
                <div className={styles.shop__item}>
                    <div className={styles.shop__item__main}>
                        <div className={styles.shop__item__main__top}>
                            <span className={styles.shop__item__main__top__off}>-10% CO2</span>
                            <HeartSvg className={styles.shop__item__main__top__heart}/>
                        </div>
                        <img className={styles.shop__item__main__image} src={"/tshirt.png"} />
                    </div>
                    <div className={styles.shop__item__stats}>
                        <div className={styles.shop__item__stats__text}>
                            <h3 className={styles.shop__item__stats__text__heading}>Grey Black Unisex T-Shirt (Hemp)</h3>
                            <h3 className={styles.shop__item__stats__text__price}>$1.99</h3>
                        </div>
                        <button className={styles.shop__item__plus}>
                            <PlusSvg/>
                        </button>
                    </div>
                </div>
            </div>
            <br/>
            <div className={styles.section}>
                <h1 className={styles.section__title}>Trending Today</h1>
            </div>
            <div className={styles.categories}>
                <div className={styles.categories__category} >
                    <img className={styles.categories__category__image} src="/tshirt.png" />
                    <h3 className={styles.categories__category__heading}>T SHIRTS</h3>
                </div>
                <div className={styles.categories__category} >
                    <img className={styles.categories__category__image} src="/tshirt.png" />
                    <h3 className={styles.categories__category__heading}>T SHIRTS</h3>
                </div>
                <div className={styles.categories__category} >
                    <img className={styles.categories__category__image} src="/tshirt.png" />
                    <h3 className={styles.categories__category__heading}>T SHIRTS</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;