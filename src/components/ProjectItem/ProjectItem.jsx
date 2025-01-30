import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ProjectItem = ({ img, title, index }) => {
    return (
        <Link to={`/project/${index}`} className={styles.link}>
            <div className={styles.project}>
                <img src={img} alt={title} className={styles.projectImage} />
                <h1 className={styles.projectTitle}>
                    {title}
                </h1>
            </div>
        </Link>
    );
}

export default ProjectItem;