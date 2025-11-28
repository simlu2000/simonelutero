import React, { useState } from 'react';
import { projects } from "../Utils/datas";
import { 
    Typography, 
    Button, 
    Grid, 
    Chip, 
    Dialog,        
    DialogTitle,   
    DialogContent, 
    DialogActions, 
    IconButton,
    useMediaQuery,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close'; 

const Works = () => {
    const [selectedProject] = useState(''); 
    
    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md')); 

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

    const renderCard = (project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} 
            style={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
                <Accordion 
                    disabled={true} 
                    onClick={() => handleClickOpen(project)} 
                    sx={{ 
                        borderRadius: '25px', 
                        cursor: 'pointer',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.03)', 
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        backdropFilter: 'blur(5px)',
                        color: 'white',
                        mb: 2,
                        p: 1
                    }}
                >
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon sx={{ color: '#d4eca5' }} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <img 
                                src={project.logo} 
                                alt={`${project.name} logo`} 
                                style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius:'8px', marginRight: '15px' }}
                            />
                            <Box>
                                <Typography variant="h6" sx={{ color: '#d4eca5', fontSize: '1.1rem' }}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    {project.info}
                                </Typography>
                            </Box>
                        </Box>
                    </AccordionSummary>
                </Accordion>
            </Box>
        </Grid>
    );

    const renderAccordion = (project, index) => (
        <Accordion 
            key={index}
            sx={{ 
                borderRadius: '15px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(5px)',
                color: 'white',
                mb: 2
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#d4eca5' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                onClick={(e) => { e.stopPropagation(); }}
                sx={{ 
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <img 
                        src={project.logo} 
                        alt={`${project.name} logo`} 
                        style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius:'8px', marginRight: '15px' }}
                    />
                    <Box>
                        <Typography variant="h6" sx={{ color: '#d4eca5', fontSize: '1.2rem' }}>
                            {project.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white', fontSize: '0.9rem' }}>
                            {project.info}
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                    {project.description}
                </Typography>
                <Button 
                    variant="outlined"
                    onClick={() => handleClickOpen(project)}
                    sx={{ color: '#d4eca5', borderColor: '#d4eca5' }}
                >
                    Vedi Dettagli Completi
                </Button>
            </AccordionDetails>
        </Accordion>
    );
    
    return (
        <>
            <section className="works-menu">
                {/* Menu per selezionare i progetti */}
            </section>

            <div id="project-box" className="me-container">
                <h1 className="area-title">Projects</h1>

                {isMobileOrTablet ? (
                    <Box sx={{ width: '100%', px: 2 }}>
                        {filteredProjects.map(renderAccordion)}
                    </Box>
                ) : (
                    <Grid container spacing={4}> 
                        {filteredProjects.map(renderCard)}
                    </Grid>
                )}
            </div>

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
                        margin: { xs: '20px', sm: '32px' }
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
                                <Typography variant="h4" sx={{ color: '#d4eca5', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
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