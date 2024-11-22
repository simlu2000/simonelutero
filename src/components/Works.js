import { projects } from "../Utils/datas";
import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 
import { Button } from '@mui/material';

const Works = () => {
    const [selectedProject, setSelectedProject] = useState(''); //stato per gestione progetti
    const [index, setIndex] = useState(0);

    const updateProject = (projectName) => { //aggiornamento stato progetti con progetto selezionato
        setSelectedProject(projectName);
    }

    const filteredProjects = selectedProject //progetti filtrati pari a quello selezionato
        ? projects.filter(project => project.name === selectedProject) //se progetto attuale corrisponde al selez, filtro progetti
        : projects; //sennò mostro tutti

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }

    const handleBack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }

    return (
        <>
            <section className="works-menu">
                {/* Il menu per selezionare i progetti potrebbe essere qui */}
            </section>

            <div className="container project">
                <AwesomeSlider selected={index} onTransitionEnd={handleNext} style={{backgroundColor:'#f7f7f7'}}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="works-item">
                            <h2 className="project">{project.name} :</h2>
                            <h2 className="project">{project.info}</h2>
                            <div className="work-info">
                                <div className="work-info-label">Technologies</div>
                                <ul>
                                    {project.tags.map((tag, tagIndex) => (
                                        <li key={tagIndex}>{tag.name}</li>
                                    ))}
                                </ul>
                                <div className="work-info-content">
                                    <div className="work-info-label">Description</div>
                                    <p>{project.description}</p>
                                </div>
                                <div className="work-info-label">Features</div>
                                <ul type="circle">
                                    {project.features && project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="work-info">
                                    <div className="work-info-label">Resources</div>
                                    <div className="work-info-content">
                                        <a class="link" href={project.source_code_link}><b>Link</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </AwesomeSlider>
                
                
            </div>
        </>
    );
}

export default Works;
