import { Card, CardContent, Grid, Typography } from '@mui/material';

function Interests() {
    const interests = [
        { emoji: '💻', text: 'Technology' },
        { emoji: '📸', text: 'Photography' },
        { emoji: '🎧', text: 'Music' },
        { emoji: '✈️', text: 'Travel' },
        { emoji: '🍕', text: 'Food' },
        { emoji: '👻', text: 'Horror' },
        { emoji: '🐕', text: 'Animals' },
        { emoji: '🌊', text: 'Sea' },
    ];

    return (
        <div className="work-info">
            <Typography variant="h6" className="works-item-tags">My interests</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '1rem' }}>
                {interests.map((interest, index) => (
                    <Grid item xs={6} sm={6} md={1.5} key={index}>
                        <Card sx={{borderRadius:'50px'}}>
                            <CardContent style={{ textAlign: 'center' }}>
                                <Typography variant="h4">{interest.emoji}</Typography>
                                <Typography variant="body2">{interest.text}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Interests;