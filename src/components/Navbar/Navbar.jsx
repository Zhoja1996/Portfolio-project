import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import light from '../../assets/img/light.png';
import dark from '../../assets/img/dark.png';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
                <Link to="/">
                    <h1>Portfolio</h1> 
                </Link>
            </div>

            <div className={styles.details}>
                <div className={styles.info}>
                    <ul>
                        <li className={styles.navListItem}>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? styles.active : styles.navListLink}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.navListItem}>
                            <NavLink 
                                to="/projects" 
                                className={({ isActive }) => isActive ? styles.active : styles.navListLink}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className={styles.navListItem}>
                            <NavLink 
                                to="/contacts" 
                                className={({ isActive }) => isActive ? styles.active : styles.navListLink}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <button className={styles.darkBtn}>
                    <img className={styles.light} src={light} alt="Light mode" />
                    <img className={styles.dark} src={dark} alt="Dark mode" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;