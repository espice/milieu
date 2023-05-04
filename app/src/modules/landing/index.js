import styles from "./index.module.scss";
import Bg from '../../../public/bg.svg';
import Link from "next/link";
import PlaceSvg from "../../../public/place.svg";
import TreeSvg from "../../../public/tree.svg";
import LeafSvg from '../../../public/leaf.svg';
import Health from '../../../public/healthcare.svg';
import Donate from '../../../public/donate.svg';
import Needle from '../../../public/needle.svg';
import Twitter from "../../../public/twitter.svg";
import Mail from "../../../public/mail.svg";
import { signIn } from "next-auth/react";

const Landing = () => {
    return (
        <div className={styles.landing}>
            <div className={styles.landing__hack}>
                <div className={styles.landing__bg} ></div>
                <div className={styles.landing__chip}>
                    <span className={styles.landing__chip__read}>New: Fabripaint</span>
                    <button className={styles.landing__chip__button}>Read More
                    <svg className={styles.landing__button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </button>
                </div>
                <div className={styles.landing__title}>
                    <h1 className={styles.landing__title__title}>
                    Eco Friendly clothing for the <br/> Modern World
                    </h1>
                    <h2 className={styles.landing__title__subtitle}>Helping save the world, one cloth at a time</h2>
                    <div className={styles.landing__title__buttons}>
                        <button className={styles.landing__title__buttons__button} onClick={() => {signIn("google")}}>Shop Now</button>
                        <Link href="https://google.com" className={styles.landing__title__buttons__link}>Learn More</Link>
                    </div>
                </div>
            </div>
            <div className={styles.landing__meet} id="how">
                <h2 className={styles.landing__meet__title}>Meet Hemp, the Better Cotton</h2>
                <p className={styles.landing__meet__subtitle}>
                All our clothes are made of Hemp, an organic fibre similar to cotton but with a plethora of other advantages.
                </p>
                <div className={styles.landing__meet__advantages}>
                    <div className={styles.landing__meet__advantages__1}>
                        <h1 className={styles.landing__meet__advantages__1__title}>4x</h1>
                        <h3 className={styles.landing__meet__advantages__1__subtitle}>stronger</h3>
                    </div>
                    <div className={styles.landing__meet__advantages__2}>
                        <h1 className={styles.landing__meet__advantages__2__title}>2x to 5x</h1>
                        <h3 className={styles.landing__meet__advantages__2__subtitle}>less water usage</h3>
                    </div>
                </div>
                <p className={styles.landing__meet__subtitle}>
                We also use other fabrics such as Bamboo Linen, Cork and Recycled Polyester all of which have a much lower impact on the environment than their counterparts and do not hurt animals.
                </p>
                <h2 className={styles.landing__meet__title} style={{fontSize: '25px', marginTop: '45px', marginBottom: '0px'}}>...that{"'"}s not all</h2>
                <p className={styles.landing__meet__subtitle} style={{marginTop: '10px'}}>
                Our clothes are stitched and shipped in a way to make the process as sustainable as possible.
                </p>
                {'\n'}
                <div className={styles.landing__meet__features}>
                    <div className={styles.landing__meet__features__1}>
                        <PlaceSvg className={styles.landing__meet__features__1__image} />
                        <h1 className={styles.landing__meet__features__1__title}>Locally Produced</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>All clothes are made at and shipped from the nearest facility to ensure its carbon footprint is as little as possible.</p>
                    </div>
                    <div className={styles.landing__meet__features__1} style={{width: '40%'}}>
                        <TreeSvg className={styles.landing__meet__features__1__image} />
                        <h1 className={styles.landing__meet__features__1__title}>#TeamTrees</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>We have partnered with several people to plant a tree for every cloth bought.</p>
                    </div>
                </div>
                <div className={styles.landing__meet__features}>
                <div className={styles.landing__meet__features__1} style={{width: '100%', background: 'radial-gradient(150.55% 6288.08% at 29.67% 49.98%, rgba(194, 255, 184, 0.4) 35%, rgba(214, 222, 213, 0.0466996) 87.71%, rgba(217, 217, 217, 0) 40%)'}}>
                        <LeafSvg className={styles.landing__meet__features__1__image} />
                        <h1 className={styles.landing__meet__features__1__title}>Eco Plus+</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>An opt in feature for frequent buyers, allowing them to opt for a slightly slower delivery but with a much lower carbon footprint. We achieve this by shipping out your order from our facility in much larger batches, making it much more efficient.</p>
                    </div>
                </div>
                <div className={styles.landing__meet__features}>
                    <div className={styles.landing__meet__features__1} style={{width: '50%'}}>
                        <Health className={styles.landing__meet__features__1__image} />
                        <h1 className={styles.landing__meet__features__1__title}>Workers are Family</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>All workers get benefits like health insurance, paid leave, and education sponsorship for their kids.</p>
                    </div>
                    <div className={styles.landing__meet__features__1} style={{width: '50%'}}>
                        <Donate className={styles.landing__meet__features__1__image} />
                        <h1 className={styles.landing__meet__features__1__title}>Giving Back</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>We have partnered with several NGOs to donate all extra stock to those who need it every 6 months.</p>
                    </div>
                </div>
                <div className={styles.landing__meet__features}>
                <div className={styles.landing__meet__features__1} style={{width: '100%', }}>
                        <Needle className={styles.landing__meet__features__1__image} />
                        <div className={styles.workers__bg}></div>
                        <h1 className={styles.landing__meet__features__1__title}>Supporting Regional Workers</h1>
                        <p className={styles.landing__meet__features__1__subtitle}>We hire regional workers to work on traditional regional wear such as Chikankari, Tie & Dye etc. This allows us to both, support regional workers as well as provide you with authentic regional wear. It also helps in reviving the slowly dying out handicrafts industry.</p>
                    </div>
                </div>
                <h2 style={{marginTop: '40px'}} className={styles.landing__meet__title} id="experiments">Milieu Experiments - FabriPaints</h2>
                <p className={styles.landing__meet__subtitle}>
                A new way of clothing, FabriPaints let you spray fabric directly from a can onto your body, creating a seamless T-Shirt of any colour and design within moments.
                </p>
                <div className={styles.landing__demo}>

                </div>
                <p className={styles.landing__meet__subtitle} style={{fontWeight: '600', fontSize: '14px', marginTop: '12px'}}>Available now for <Link href={"https://google.com"} style={{textDecoration: 'none', color: '#3963F8'}}>Pre Order</Link></p>
                <h2 style={{marginTop: '45px'}} className={styles.landing__meet__title}>Contact Us</h2>
                <div className={styles.landing__contact} id="contact">
                <div className={styles.landing__contact} >
                    <div className={styles.landing__contact__1} style={{width: '50%', background: '#DB6565'}}>
                        <div className={styles.image}>
                            <Mail className={styles.landing__contact__1__image} />
                        </div>
                        <h1 className={styles.landing__contact__1__title}>Mail us</h1>
                    </div>
                    <div className={styles.landing__contact__1} style={{width: '50%', background: '#42ABE5'}}>
                        <div className={styles.image}>
                            <Twitter className={styles.landing__contact__1__image} />
                        </div>
                        <h1 className={styles.landing__contact__1__title}>@ us on twitter</h1>
                    </div>
                </div>
                </div>
            </div>  
        </div>
    )
}

export default Landing;