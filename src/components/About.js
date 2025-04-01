import React from 'react';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa le icone dei brand
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa l'icona dell'e-mail
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Link,
    Box,
    Divider,
} from '@mui/material';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import Interests from './Interests';

const About = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3}}>
            <Card sx={{ maxWidth: '100%', width: { xs: '100%', sm: '80%', md: '82%' },borderRadius:'25px', boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Personal Info
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" fontWeight="bold" sx={{fontSize:"1.2rem"}}>First Name</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>Simone</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Last Name</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>Lutero</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Age</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>24</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Nationality</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>Italian</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Based in</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>Rapallo, GE</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">E-mail</Typography>
                            <Link
                                href="mailto:simone.lutero1@gmail.com"
                                variant="body2"
                            >
                                simone.lutero1@gmail.com
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Languages</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}}>Italian (mothertongue), English (B1)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">Socials</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Link
                                    href="https://github.com/simlu2000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="social_icon"
                                    />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/simone-lutero-027317216/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="social_icon"
                                    />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/sim0ne_lu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="social_icon"
                                    />
                                </Link>
                                <Link
                                    href="mailto:simone.lutero1@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="social_icon"
                                    />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" sx={{fontSize:"1.2rem"}} fontWeight="bold">About me</Typography>
                            <Typography variant="body2" sx={{fontSize:"1.2rem"}} >
                                I am currently a computer science student at the University
                                of Genoa and I am doing a development training course at Alten Italia.
                                Passionate about consumer electronics and technology since I was a child,
                                I have always found technological
                                advancement a source of inspiration and curiosity. Lately, my interest has
                                also turned to the world of data, as I believe that understanding and using
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
                    <Divider sx={{ my: 3 }} />

                    <section id="myskills">
                        <Technologies />
                    </section>

                    <Divider sx={{ my: 3 }} />

                    <section id="interests">
                        <Interests />
                    </section>

                    <Divider sx={{ my: 3 }} />

                    <section id="myexp">
                        <Experience />
                    </section>

                    <Divider sx={{ my: 3 }} />

                    <section id="myedu">
                        <Education />
                    </section>
                </CardContent>
            </Card>
        </Box>
    );
};

export default About;