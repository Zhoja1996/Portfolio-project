import styles from './styles.module.css';

import light from '../../assets/img/light.png';
import dark from '../../assets/img/dark.png';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
                <h1>Portfolio <span>of Yevhenii Koval</span></h1>
            </div>

            <div className={styles.details}>
                <div className={styles.info}>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </div>

                <button className={styles.darkBtn}>
                    <img className={styles.light} src={light} alt="Light mode" />
                    <img className={styles.dark} src={dark} alt="Dark mode" />
                </button>

                {/* PS...
                    потом надо выносить кнопку в отдельный компонент!!!! 
                */}
            </div>
        </nav>
    )
}

export default Navbar;