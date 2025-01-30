import ProjectItem from '../ProjectItem/ProjectItem';
import { projects } from '../../Helpers/projects';
import { useTheme } from '../App/providers/ThemeProvider';
import styles from './styles.module.css';

const ProjectsList = () => {

    const {isDarkMode} = useTheme();

    return (
        <div className={`${isDarkMode ? styles.dark : styles.light}`}>
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