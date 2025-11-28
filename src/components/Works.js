import { projects } from "../Utils/datas";
import { useState } from 'react';
import { 
    Card, 
    CardContent, 
    CardActions, 
    Typography, 
    Button, 
    Grid, 
    Chip, 
    Dialog,        
    DialogTitle,   
    DialogContent, 
    DialogActions, 
    IconButton    
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close'; 

const Works = () => {
    const [selectedProject] = useState(''); 
    
    // stati per il Dialog (Modale)
    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    // Gestori per l'apertura e la chiusura del Dialog
    const handleClickOpen = (project) => {
        setCurrentProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentProject(null);
    };

    const filteredProjects = selectedProject
        ? projects.filter(project => project.name === selectedProject)
        : projects;

    return (
        <>
            <section className="works-menu">
                {/* menu per selezionare i progetti */}
            </section>

            <div id="project-box" className="me-container">
                <h1 className="area-title">Projects</h1>

                <Grid container spacing={4}> 
                    {filteredProjects.map((project, index) => (
                        <Grid 
                            item xs={12} sm={6} md={4} key={index} 
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Card di Anteprima */}
                            <Card 
                                onClick={() => handleClickOpen(project)} 
                                sx={{ 
                                    borderRadius: '25px', 
                                    height: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    alignItems:'center', 
                                    padding: '20px',
                                    cursor: 'pointer', 
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.03)', 
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    },
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                                    backdropFilter: 'blur(5px)',
                                    color: 'white'
                                }} 
                            >
                                <CardContent style={{ flexGrow: 1, textAlign: 'center' }}>
                                    <img 
                                        src={project.logo} 
                                        alt={`${project.name} logo`} 
                                        style={{ width: '100px', height: '100px', objectFit: 'contain', borderRadius:'15px', marginBottom: '15px' }}
                                    />
                                    <Typography variant="h6" component="div" sx={{ color: '#d4eca5' }}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="white" sx={{ marginTop: '5px' }}>
                                        {project.info}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ color: '#d4eca5', border: '1px solid #d4eca5' }}>
                                        Vedi Dettagli
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* ---------------------------------------------------- */}
            {/* Dialog per i dettagli del progetto */}
            {/* ---------------------------------------------------- */}
            <Dialog 
                open={open} 
                onClose={handleClose} 
                maxWidth="md" 
                fullWidth 
                PaperProps={{
                    sx: {
                        borderRadius: '25px',
                        backgroundColor: '#010b47', 
                        color: 'white',
                        padding: '20px',
                    }
                }}
            >
                {currentProject && (
                    <>
                        <DialogTitle sx={{ m: 0, p: 2 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img 
                                    src={currentProject.logo} 
                                    alt={`${currentProject.name} logo`} 
                                    style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius:'10px'}}
                                />
                                <Typography variant="h4" sx={{ color: '#d4eca5', fontWeight: 'bold' }}>
                                    {currentProject.name}
                                </Typography>
                            </div>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: '#d4eca5',
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        
                        <DialogContent dividers>
                            <Typography gutterBottom variant="subtitle1" sx={{ color: '#d4eca5' }}>
                                {currentProject.info}
                            </Typography>
                            
                            <Typography gutterBottom sx={{ mt: 2 }}>
                                Description: {currentProject.description}
                            </Typography>
                            
                            <Typography variant="subtitle2" sx={{ marginTop: '1rem', color: '#d4eca5' }}>
                                Technologies:
                            </Typography>
                            <div style={{ marginBottom: '1rem' }}>
                                {currentProject.tags.map((tag, tagIndex) => (
                                    <Chip 
                                        key={tagIndex} 
                                        label={tag.name} 
                                        sx={{ 
                                            margin: '0.2rem', 
                                            backgroundColor: '#d4eca5', 
                                            color: '#010b47', 
                                            fontWeight: 'bold'
                                        }} 
                                    />
                                ))}
                            </div>

                            <Typography variant="subtitle2" sx={{ marginTop: '1rem', color: '#d4eca5' }}>
                                Main features:
                            </Typography>
                            <ul style={{ paddingLeft: '20px' }}>
                                {currentProject.features && currentProject.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} style={{ margin: '5px 0' }}>{feature}</li>
                                ))}
                            </ul>

                            <Typography variant="body2" sx={{ marginTop: '2rem', fontStyle: 'italic' }}>
                                Period: {currentProject.start} - {currentProject.end}
                            </Typography>

                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={handleClose}
                                sx={{ color: 'white', border: '1px solid white' }}
                            >
                                Close
                            </Button>
                            <Button
                                variant="contained"
                                target="_blank"
                                href={currentProject.source_code_link} 
                                sx={{
                                    borderRadius: '25px',
                                    backgroundColor: '#d4eca5',
                                    color: '#010b47',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#c1d98a',
                                    }
                                }}
                            >
                                View code
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
}

export default Works;