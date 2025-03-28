import { useParams } from "react-router-dom";
import { projects } from "../../Helpers/projects";
import { useTheme } from "../../components/App/providers/ThemeProvider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GitHubBtn from "../../components/GitHubBtn/GutHubBtn";

import styles from './styles.module.css';

const ProjectPage = () => {

    const {id} = useParams();
    const {isDarkMode} = useTheme();

    return (
        <>
            <Navbar/>
            <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.project}`}>
                <h1>{projects[id].title}</h1>
                <a target='_blank' href={projects[id].url}><img src={projects[id].img} alt={projects[id].title} /></a>
                <p className={styles.skills}>{projects[id].skills}</p>
                <GitHubBtn url={projects[id].gitHub}/>
            </div>
            <Footer/>
        </>
    );
}

export default ProjectPage;