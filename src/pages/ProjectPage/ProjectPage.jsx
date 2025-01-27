import { useParams } from "react-router-dom";
import { projects } from "../../Helpers/projects";
import styles from './styles.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ProjectPage = () => {

    const {id} = useParams();

    return (
        <>
            <Navbar/>
            <div className={styles.project}>
                <h1>{projects[id].title}</h1>
                <img src={projects[id].img} alt={projects[id].title} />
                <p className={styles.skills}>Skills: React, Redux, RTK Query, TypeScript, API</p>
            </div>
            <Footer/>
        </>
    );
}

export default ProjectPage;