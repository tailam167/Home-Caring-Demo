import { Divider, Grid, List, ListItemText, Typography } from '@mui/material'

function Home() {
  return (
    <Grid container display={'flex'} flexDirection={'row'} sx={{ paddingTop: "15px" }}>
      <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <Typography style={{ textAlign: 'justify', fontStyle: 'italic' }}>
          Empowering individuals with disabilities to lead fulfilling lives is our
          mission at Von Home Care. We believe in providing compassionate and
          personalized support services tailored to the unique needs of each
          individual. Our team is dedicated to making a positive impact in the
          disability community.
        </Typography>
        <Divider flexItem orientation='horizontal' />
        <Typography style={{ textAlign: 'start', fontWeight: '800' }}>
          Von Home Care offers a comprehensive range of disability support
          services:
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, sm: 6}}>
            <List>
              <ListItemText children={<Typography variant='caption'>NDIS Support Services</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Core Support</Typography>} />
              <ListItemText children={<Typography variant='caption'>Assistance with Personal Activities</Typography>} />
              <ListItemText children={<Typography variant='caption'>Household Tasks</Typography>} /> 
              <ListItemText children={<Typography variant='caption'>Community Nursing Care</Typography>} />
              <ListItemText children={<Typography variant='caption'>In Home Nursing Care</Typography>} />
              <ListItemText children={<Typography variant='caption'>Personal Care</Typography>} />
              <ListItemText children={<Typography variant='caption'>Respite Care</Typography>} />
              <ListItemText children={<Typography variant='caption'>Medication Management</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Cleaning</Typography>} />
              <ListItemText children={<Typography variant='caption'>Housekeeping Support</Typography>} />
            </List>
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <List>
              <ListItemText children={<Typography variant='caption'>Community Participation and Companionship Support</Typography>} />
              <ListItemText children={<Typography variant='caption'>Travel and Transport Assistance</Typography>} />
              <ListItemText children={<Typography variant='caption'>Support Coordination Servic</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Physiotherapy</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Exercises Physiologist</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Occupational Therapy</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Speech Therapy</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Positive Behaviour Therapy</Typography>} />
              <ListItemText children={<Typography variant='caption'>NDIS Psychology</Typography>} />
              <ListItemText children={<Typography variant='caption'>Disability Support Services</Typography>} />
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
         <Typography style={{ textAlign: 'center', fontWeight: '800' }}>
          Von Home Care. Your Partner in Disability Support Services.
        </Typography>
        <img sizes="600px"
          id="img_WPht0-65v"
          src='src/assets/home-img.png'
          alt="A woman and another woman on a wheelchair"
          width="680" height="363"></img>
      </Grid>
    </Grid>
  )
}

export default Home
