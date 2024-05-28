import styles from "../../styles/Footer.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes.jsx";
import LOGO from "../../images/logo.svg";


function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt={"Stuff"}/>
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by {""}
                <a
                    href="https://github.com/FrolovAS1984"
                    target="_blank"
                    rel="noreferrer"
                >
                    Anton
                </a>
            </div>
            <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={"../public/sprite.svg#instagram"} />
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={"../public/sprite.svg#facebook"} />
                    </svg>
                </a>
                <a href="https://yutube.com" target="_blank" rel="noreferrer">
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={"../public/sprite.svg#youtube"} />
                    </svg>
                </a>

            </div>

        </section>

    )
}

export default Footer;