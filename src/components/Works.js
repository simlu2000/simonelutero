import { projects, tags } from "../Utils/datas";
import { useState } from 'react';
const Works = () => {
    const [selectedProject, setSelectedProject] = useState(''); //stato per gestione progetti

    const updateProject = (projectName) => { //aggiornamento stato progetti con progetto selezionato
        setSelectedProject(projectName);
    }

    const filteredProjects = selectedProject //progetti filtrati pari a quello selezionato
        ? projects.filter(project => project.name === selectedProject) //se progetto attuale corrisponde al selez, filtro progetti
        : projects; //sennò mostro tutti

    return (
        <>

            <section className="works box">
                <section className="works-menu">
                <h1 className="container">My works</h1>

                    <div id="button-area">
                        <ul>
                            <li><a className="button pj" onClick={ () => updateProject('WAPA')}>WAPA</a></li>
                            <li><a className="button pj" onClick={ () => updateProject('Briji')}>Briji</a></li>
                            <li><a className="button pj" onClick={ () => updateProject('Ciakmov')}>Ciakmov</a></li>
                            <li><a className="button pj" onClick={ () => updateProject('')}>All</a></li>
                        </ul>

                    </div>
                </section>
                <div className="container">
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
                                    <p >{project.description}</p>
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
                                        <a class="link" href={project.source_code_link}>Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}
export default Works;