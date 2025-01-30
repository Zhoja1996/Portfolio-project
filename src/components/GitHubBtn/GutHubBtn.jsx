
import styles from './styles.module.css';

const GitHubBtn = ( {url} ) => {
    return (
        <a target='_blank' href={url} className={styles.btn}>Open GitHub Repo</a>
    );
}

export default GitHubBtn;