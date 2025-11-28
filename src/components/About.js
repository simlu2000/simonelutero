import React, { useState } from 'react';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Link,
    Box,
    Divider,
    Tabs, 
    Tab, 
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import Interests from './Interests'; 

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const About = () => {
    const [tabValue, setTabValue] = useState('1'); 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const tabStyle = {
        color: 'white',
        '&.Mui-selected': {
            color: '#d4eca5', 
        },
        fontSize: { xs: '0.75rem', sm: '1rem' }
    };
    
    const cardStyle = { 
        maxWidth: '100%', 
        width: { xs: '100%', sm: '80%', md: '100%' }, 
        borderRadius: '25px', 
        boxShadow: 3, 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(10px)',
        color: 'white', 
        padding: 0 
    };

    const typographyStyle = { fontSize: "1.2rem", color: 'white' };
    const typographyTitleStyle = { fontSize: "1.2rem", color: '#d4eca5', fontWeight: "bold" };

    const personalData = [
        { title: "Age", value: "25" },
        { title: "Nationality", value: "Italian" },
        { title: "Based in", value: "Rapallo, GE" },
        { title: "Languages", value: "Italian (mothertongue), English (B1)" },
    ];

    return (

        <div className="me-container">
            <h1 className="area-title" style={{ color: 'white' }}>About me</h1>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <Card sx={cardStyle}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#d4eca5' }}>
                            Simone Lutero
                        </Typography>
                        
                        <Divider sx={{ mb: 2, bgcolor: 'rgba(212, 236, 165, 0.5)' }} />

                        <Grid container spacing={isMobile ? 1 : 2} sx={{ mb: 3 }}>
                            {personalData.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Typography variant="subtitle2" sx={typographyTitleStyle}>{item.title}</Typography>
                                    <Typography variant="body2" sx={typographyStyle}>{item.value}</Typography>
                                </Grid>
                            ))}
                            
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" sx={typographyTitleStyle}>E-mail</Typography>
                                <Link
                                    href="mailto:simone.lutero1@gmail.com"
                                    variant="body2"
                                    sx={{...typographyStyle, color: '#d4eca5'}}
                                >
                                    simone.lutero1@gmail.com
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" sx={typographyTitleStyle}>Socials</Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Link href="https://github.com/simlu2000" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', '&:hover': { color: '#d4eca5' } }}><FontAwesomeIcon icon={faGithub} className="social_icon" /></Link>
                                    <Link href="https://www.linkedin.com/in/simone-lutero-027317216/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', '&:hover': { color: '#d4eca5' } }}><FontAwesomeIcon icon={faLinkedin} className="social_icon" /></Link>
                                    <Link href="https://www.instagram.com/sim0ne_lu" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', '&:hover': { color: '#d4eca5' } }}><FontAwesomeIcon icon={faInstagram} className="social_icon" /></Link>
                                    <Link href="mailto:simone.lutero1@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', '&:hover': { color: '#d4eca5' } }}><FontAwesomeIcon icon={faEnvelope} className="social_icon" /></Link>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle2" sx={typographyTitleStyle}>Who I Am</Typography>
                                <Typography variant="body2" sx={typographyStyle} >
                                    I am currently a computer science student at the University of Genoa and I am doing a development training course at Alten Italia. 
                                    Passionate about consumer electronics and technology since I was a child, I have always found technological 
                                    advancement a source of inspiration and curiosity. Lately, my interest has also turned to the world of data, as I believe that understanding and using 
                                    them are essential to make the most of the potential of digital innovation. Besides technology, 
                                    photography is my second passion, which has allowed me to develop an artistic mind. 
                                    My goal is to become a full stack developer, combining my passion for technology 
                                    with my artistic streak. I am determined to create engaging and intuitive digital 
                                    experiences, developing both the front and back-end for projects that combine 
                                    innovation and aesthetics.Becoming a full stack web developer is my 
                                    main focus, but I am also open to other opportunities in the IT world 
                                    that can help me grow professionally.
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ my: 3, bgcolor: 'rgba(212, 236, 165, 0.5)' }} />

                        <Box sx={{ borderBottom: 1, borderColor: 'rgba(212, 236, 165, 0.5)' }}>
                            <Tabs 
                                value={tabValue} 
                                onChange={handleChange} 
                                aria-label="About sections"
                                variant={isMobile ? "scrollable" : "fullWidth"}
                                scrollButtons={isMobile ? "auto" : false}
                                indicatorColor="secondary"
                            >
                                <Tab label="Skills" value="1" sx={tabStyle} {...a11yProps('1')} />
                                <Tab label="Experience" value="2" sx={tabStyle} {...a11yProps('2')} />
                                <Tab label="Education" value="3" sx={tabStyle} {...a11yProps('3')} />
                                <Tab label="Interests" value="4" sx={tabStyle} {...a11yProps('4')} />
                            </Tabs>
                        </Box>

                        <TabPanel value={tabValue} index="1">
                            <Technologies />
                        </TabPanel>
                        <TabPanel value={tabValue} index="2">
                            <Experience />
                        </TabPanel>
                        <TabPanel value={tabValue} index="3">
                            <Education />
                        </TabPanel>
                        <TabPanel value={tabValue} index="4">
                            <Interests />
                        </TabPanel>

                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default About;