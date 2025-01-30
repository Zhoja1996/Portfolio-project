import { useTheme } from '../App/providers/ThemeProvider';
import styles from './styles.module.css';
import GitHubIcon from '../../assets/img/GitHub.png';

const Footer = () => {

    const {isDarkMode} = useTheme();

    return (
        <footer className={`${isDarkMode ? styles.dark : styles.light} ${styles.navbar}`}>
            <div className={styles.links}>
                <a target='_blank' href="https://github.com/Zhoja1996">
                    <img className={styles.github} src={GitHubIcon} alt="GitHub" />
                </a>
            </div>

            <span >&copy; 2025</span>
        </footer>
    );
}

export default Footer;