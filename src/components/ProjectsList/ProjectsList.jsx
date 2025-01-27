import ProjectItem from '../ProjectItem/ProjectItem';
import { projects } from '../../Helpers/projects';
import styles from './styles.module.css';

const ProjectsList = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.info}>Projects</h1>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <ProjectItem index={index} key={index} img={project.img} url={project.url} title={project.title}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectsList;