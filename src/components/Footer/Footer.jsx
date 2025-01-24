
import styles from './styles.module.css';
import GitHubIcon from '../../assets/img/GitHub.png';

const Footer = () => {
    return (
        <>
            <div className={styles.roadmap}>
                <div className={styles.descriprion}>
                    <div className={styles.info}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>React-Router</li>
                            <li>Redux</li>
                            <li>NPM</li>
                            <li>TailwindCSS</li>
                            <li>GIT</li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer>
                <div className={styles.links}>
                    <a  target='_blank' href="https://github.com/Zhoja1996">
                        <img src={GitHubIcon} alt="GitHub" />
                    </a>
                </div>

                <span >&copy; 2025</span>
            </footer>
        </>
    );
}

export default Footer;