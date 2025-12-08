import React from 'react';
import { technologies } from "../Utils/datas";
import { Grid, Typography, Box, CardMedia, CircularProgress, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faReact, faJs, faPhp, faHtml5, faCss3Alt, faFigma, faPython, faGoogle 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faCode 
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    faReact, faJs, faPhp, faHtml5, faCss3Alt, faFigma, faPython, faGoogle, faCode
);

const Technologies = () => {

    const renderIcon = (tech) => {
        const iconProp = tech.icon;
        
        const iconColor = '#ffffff'; 
        const iconSize = '2x';

        if (Array.isArray(iconProp)) {
            return <FontAwesomeIcon icon={iconProp} size={iconSize} style={{ color: iconColor }} />;
        } else if (typeof iconProp === 'string' && iconProp.startsWith('fa')) {
             const finalIcon = library.definitions.hasOwnProperty('fas') && library.definitions.fas.hasOwnProperty(iconProp) 
                ? iconProp : faCode;

            return <FontAwesomeIcon icon={finalIcon} size={iconSize} style={{ color: iconColor }} />;
        } else {
            return (
                <CardMedia
                    component="img"
                    height="40"
                    image={iconProp}
                    alt={tech.name}
                    style={{ objectFit: 'contain', padding: '5px' }}
                />
            );
        }
    };

    const DEFAULT_VISUAL_LEVEL = 100;
    const SIZE = 100;

    return (
        <div className="work-info">
            <Typography variant="h6" className="works-item-tags" sx={{ color: '#d4eca5', textAlign: 'center', mb: 3 }}>My Skills</Typography>
            
            <Grid container spacing={4} justifyContent="center">
                {technologies.map((tech, index) => {
                    const skillLevel = DEFAULT_VISUAL_LEVEL; 

                    return (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index} sx={{ textAlign: 'center' }}>
                            <Box 
                                sx={{ 
                                    position: 'relative', 
                                    display: 'inline-flex', 
                                    mb: 1.5,
                                }}
                            >
                                <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    size={SIZE}
                                    thickness={4}
                                    sx={{
                                        color: '#e0e0e0',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                                <CircularProgress
                                    variant="determinate"
                                    value={skillLevel}
                                    size={SIZE}
                                    thickness={4}
                                    sx={{
                                        color: '#d4eca5',
                                        transition: 'all 0.5s ease 0s',
                                        transform: 'rotate(-90deg)',
                                    }}
                                />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#010b47'
                                    }}
                                >
                                    {renderIcon(tech)}
                                </Box>
                            </Box>
                            <Typography 
                                variant="body2" 
                                sx={{ fontWeight: 'bold', color: 'white' }}
                            >
                                {tech.name}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Technologies;