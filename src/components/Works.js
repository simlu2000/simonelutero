import { projects } from "../Utils/datas";
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Chip } from '@mui/material';

const Works = () => {
    const [selectedProject] = useState(''); // stato per gestione progetti

    const filteredProjects = selectedProject
        ? projects.filter(project => project.name === selectedProject)
        : projects; // Mostra tutti i progetti se nessuno è selezionato

    return (
        <>
        
            <section className="works-menu">
                {/*menu per selezionare i progetti  */}
            </section>

            <div id="project-box" className="me-container">
            <h1 className="area-title">Projects</h1>

                <Grid container spacing={2}>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ borderRadius: '25px', height: '100%', display: 'flex', flexDirection: 'column',alignItems:'center', gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.76)', backdropFilter: 'blur(10px)'}} >
                                <CardContent>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <img 
                                            src={project.logo} 
                                            alt={`${project.name} logo`} 
                                            style={{ width: '100px', height: '100px', objectFit: 'contain', borderRadius:'25px'}}
                                        />
                                        <Typography variant="h5" component="div" style={{ flex: 1 }}>
                                            {project.name} : {project.info}
                                        </Typography>
                                    </div>

                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>

                                    <Typography variant="subtitle2" style={{ marginTop: '1rem' }}>Technologies:</Typography>
                                    <div>
                                        {project.tags.map((tag, tagIndex) => (
                                            <Chip key={tagIndex} label={tag.name} style={{ margin: '0.2rem', backgroundColor: '#ffffff', border: '3px solid #d4eca5' }} />
                                        ))}
                                    </div>

                                    <Typography variant="subtitle2" style={{ marginTop: '1rem' }}>Features:</Typography>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        {project.features && project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>

                                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                                        Period: {project.start} - {project.end}
                                    </Typography>

                                </CardContent>
                                <CardActions style={{ justifyContent: 'center', marginTop: 'auto', marginBottom: '5%' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        target="_blank"
                                        href={project.source_code_link} sx={{
                                            borderRadius: '25px',
                                        }}
                                    >
                                        View source
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Works;
