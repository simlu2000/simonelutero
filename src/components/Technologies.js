import React from 'react';
import { technologies } from "../Utils/datas";
import { Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';

const Technologies = () => {
    return (
        <div className="work-info">
            <Typography variant="h6" className="works-item-tags">My Skills</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '1rem' }}>
                {technologies.map((tech, index) => (
                    <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="80"
                                image={tech.icon}
                                alt={tech.name}
                                style={{ objectFit: 'contain', padding: '10px' }}
                            />
                            <CardContent style={{ textAlign: 'center' }}>
                                <Typography variant="body2">{tech.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Technologies;