import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { useTheme } from '../App/providers/ThemeProvider';
import { themeIcons } from '../../assets';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={`${isDarkMode ? styles.dark : styles.light} ${styles.navbar}`}>
            <div className={styles.logo}>
                <NavLink to="/">
                    <h1>Portfolio</h1>
                </NavLink>
            </div>

            <div className={styles.details}>
                <div className={styles.info}>
                    <ul className={showMenu ? styles.show : ''}>
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

                    <div className={styles.menu} onClick={toggleMenu}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                </div>

                <img className={styles.lightBtn} src={isDarkMode ? themeIcons.light : themeIcons.dark} alt="Light mode" onClick={toggleTheme}/>
            </div>
        </nav>
    );
}

export default Navbar;