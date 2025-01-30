import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { useTheme } from '../App/providers/ThemeProvider';
import { themeIcons } from '../../assets';

const Navbar = () => {

    const {isDarkMode, toggleTheme} = useTheme();

    return (
        <nav className={`${isDarkMode ? styles.dark : styles.light} ${styles.navbar}`}>
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

                <img className={styles.lightBtn} src={isDarkMode ? themeIcons.light : themeIcons.dark} alt="Light mode" onClick={toggleTheme}/>
                    
            </div>
        </nav>
    );
};

export default Navbar;