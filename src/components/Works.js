import { projects } from "../Utils/datas";
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

                    {/*<div id="button-area">
                        <ul>
                            <li><p className="button pj" onClick={() => updateProject('WAPA')}>WAPA</p></li>
                            <li><p className="button pj" onClick={() => updateProject('Briji')}>Briji</p></li>
                            <li><p className="button pj" onClick={() => updateProject('Ciakmov')}>Ciakmov</p></li>
                            <li><p className="button pj" onClick={() => updateProject('')}>All</p></li>
                        </ul>
                    </div>
                    */}
                </section>
                
                <div className="container project">

                    <AutoPlaySwipeableViews
                        enableMouseEvents
                        index={index}
                        interval={10000}
                        onChangeIndex={(newIndex) => setIndex(newIndex)} // Cambia l'indice quando si swippa manualmente
                    >
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
                                            <a class="link" href={project.source_code_link}><b>Link</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </AutoPlaySwipeableViews>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0'}}>
                        <Button style={{backgroundColor:'#FCA311'}} variant="contained" onClick={handleBack} disabled={filteredProjects.length <= 1}>
                            Previous
                        </Button>
                        <Button style={{backgroundColor:'#FCA311' , marginLeft: '10px'}} variant="contained" onClick={handleNext} disabled={filteredProjects.length <= 1}>
                            Next
                        </Button>
                    </div>
                </div>
        </>
    )
}
export default Works;