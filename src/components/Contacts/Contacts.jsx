
import styles from './styles.module.css';

const Contacts = () => {
    return (
        <div className={styles.contacts}>

            <h1>Contacts</h1>

            <div className={styles.location}>
                <p>Location</p>
                <span>Kamenskoye, Ukraine</span>
            </div>

            <div className={styles.social}>
                <p>Telegram/WhatsApp</p>
                <span><a href="tel:+380978243919">+38 (097) 824-39-19</a></span>
            </div>

            <div className={styles.email}>
                <p>Email</p>
                <span><a href="mailto:g.n.kowal@gmail.com">g.n.kowal@gmail.com</a></span>
            </div>

        </div>
    );
}

export default Contacts;