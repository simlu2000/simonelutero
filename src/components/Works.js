import { projects } from "../Utils/datas";
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Chip} from '@mui/material';

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

            <div id="project-box" className="project">
                <Grid container spacing={2}>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ borderRadius: '25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                    <Typography variant="h5" component="div">
                                        {project.name} : {project.info}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>

                                    <Typography variant="subtitle2" style={{ marginTop: '1rem' }}>Technologies:</Typography>
                                    <div>
                                        {project.tags.map((tag, tagIndex) => (
                                            <Chip key={tagIndex} label={tag.name} style={{ margin: '0.2rem', backgroundColor:'#ffffff', border:'3px solid #d4eca5'}} />
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
                                <CardActions style={{ justifyContent: 'center', marginTop: 'auto', marginBottom:'5%' }}>
                                <Button
                                        variant="contained"
                                        color="primary"
                                        target="_blank"
                                        href={project.source_code_link} sx={{
                                            borderRadius:'25px',
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
