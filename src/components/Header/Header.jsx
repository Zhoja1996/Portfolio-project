
import styles from './styles.module.css';

const Header = () => {
    return (
        <>
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
        </>
    );
}

export default Header;