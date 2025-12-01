import { Box, List, ListItemText, Typography } from '@mui/material'

function About() {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='h5'> About Von Home Care</Typography>
            <Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>
                Our organisation was established with the sole aim of offering support that always puts participants first.
                At Von Home Care we provide a range of disability services and aim to make a difference in the lives of those living with a disability. The goal is to make each of our participants’ lives easier, fairer, and more involved.
                Von Home Care values are centred around our staff, participants, and their families or guardians.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: '15px' }}>Our Values</Typography>
            <List>
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Respect - We respect people's decisions, opinions, and views.</Typography>} />
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Honesty - We strive to be trustworthy and truthful.</Typography>} />
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Privacy and Confidentiality - This is of the utmost importance as outlined in our Privacy and Confidentiality Policy and Procedure.</Typography>} />
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Development and Improvement - We will identify, with your help, areas for development and improvement projects. We always work to improve our services and uphold service standards. Your feedback is always valued.</Typography>} />
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Safe and Harmonious Working Environment - We offer a workplace that provides support, guidance, and acceptance to staff and participants.</Typography>} />
                <ListItemText
                    children={<Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>Passion - Every member of staff is passionate about the work that they do and considers all our participants a part of our Von Home Care family.</Typography>} />
            </List>
        </Box>
    )
}

export default About
