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
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <Card sx={{ width: '80%', boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Personal Info
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">First Name</Typography>
                            <Typography variant="body2">Simone</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Last Name</Typography>
                            <Typography variant="body2">Lutero</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Age</Typography>
                            <Typography variant="body2">24</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Nationality</Typography>
                            <Typography variant="body2">Italian</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Based in</Typography>
                            <Typography variant="body2">Rapallo, GE</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">E-mail</Typography>
                            <Link
                                href="mailto:simone.lutero1@gmail.com"
                                variant="body2"
                            >
                                simone.lutero1@gmail.com
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Languages</Typography>
                            <Typography variant="body2">Italian, English</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2">Socials</Typography>
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
                            <Typography variant="subtitle2">About me</Typography>
                            <Typography variant="body2">
                                I am currently a computer science student at the
                                University of Genoa. Passionate about consumer
                                electronics and technology since I was a child,
                                I have always found technological advancement a
                                source of inspiration and curiosity. Since
                                photography is my second passion, I also have
                                an artistic mind. My goal is to become a full
                                stack web developer, combining my passion for
                                technology with my artistic streak. I am
                                determined to create engaging and intuitive
                                digital experiences, developing both the front
                                and back-end for projects that combine
                                innovation and aesthetics.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 3 }} />

                    <section id="interests">
                        <Interests />
                    </section>

                    <Divider sx={{ my: 3 }} />

                    <section id="myskills">
                        <Technologies />
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