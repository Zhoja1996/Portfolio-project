import { useTheme } from '../App/providers/ThemeProvider';
import styles from './styles.module.css';

const Header = () => {

    const {isDarkMode} = useTheme();

    return (
        <div className={`${isDarkMode ? styles.dark : styles.light}`}>
            <header>
                <div className={styles.description}>
                    <p>My name is Yevhenii</p>
                    <h2>a frontend developer</h2>
                </div>
            </header>

            <div className={styles.roadmap}>
                <div className={styles.descriprion}>
                    <div className={styles.info}>
                        <h3>Frontend</h3>
                        <ul>
                            <li><span>HTML</span></li>
                            <li><span>CSS</span></li>
                            <li><span>JavaScript</span></li>
                            <li><span>TypeScript</span></li>
                            <li><span>React</span></li>
                            <li><span>React-Router</span></li>
                            <li><span>Redux</span></li>
                            <li><span>NPM</span></li>
                            <li><span>TailwindCSS</span></li>
                            <li><span>GIT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;