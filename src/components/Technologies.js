import React from 'react';
import { technologies } from "../Utils/datas";
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa le librerie Font Awesome: brands (fab) e solid (fas)
import { 
    faReact, faJs, faPhp, faHtml5, faCss3Alt, faFigma, faPython 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase, faFire, faCode, faLaptopCode, faUserCheck, faUsers, faLightbulb, faCodeBranch // <--- SPOSTATO QUI!
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Aggiungi tutte le icone necessarie alla libreria FA
library.add(
    faReact, faJs, faPhp, faHtml5, faCss3Alt, faFigma, faPython, faCodeBranch,
    faDatabase, faFire, faCode, faLaptopCode, faUserCheck, faUsers, faLightbulb
);


const Technologies = () => {

    const renderIcon = (iconProp) => {
        // Gestisce i casi in cui l'icona è un array (es. ['fab', 'react']) o una stringa
        if (Array.isArray(iconProp)) {
            // Per icone FA Brand (es. React, Python)
            return <FontAwesomeIcon icon={iconProp} size="4x" style={{ color: '#010b47' }} />;
        } else if (typeof iconProp === 'string') {
            // Per icone FA Solid (es. faDatabase, faFire)
            // Se l'icona non è FA standard, usiamo un fallback generico
            const finalIcon = library.definitions.hasOwnProperty('fas') && library.definitions.fas.hasOwnProperty(iconProp) 
                ? iconProp : faCode;

            return <FontAwesomeIcon icon={finalIcon} size="4x" style={{ color: '#010b47' }} />;
        }
        return null; // Fallback se non è fornita nessuna icona valida
    };

    return (
        <div className="work-info">
            <Typography variant="h6" className="works-item-tags" sx={{ color: '#d4eca5', textAlign: 'center' }}>My Skills</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '1rem' }}>
                {technologies.map((tech, index) => (
                    <Grid item xs={6} sm={6} md={3} lg={2} key={index}>
                        <Card 
                            sx={{ 
                                borderRadius: '25px', 
                                backgroundColor: 'white',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                }
                            }}
                        >
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    height: '100px', 
                                    padding: '10px' 
                                }}
                            >
                                {renderIcon(tech.icon)}
                            </Box>
                            <CardContent sx={{ textAlign: 'center', padding: '8px', '&:last-child': { paddingBottom: '8px' } }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#010b47' }}>{tech.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Technologies;