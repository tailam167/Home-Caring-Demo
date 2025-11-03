import React from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'

function Home() {
  return (
    <Box display={'flex'} flexDirection={'column'} sx={{ paddingTop: "15px" }}>
      <Typography style={{ textAlign: 'center', fontWeight: '800' }}>
        Von Home Care. Your Partner in Disability Support Services.
      </Typography>
      <Divider orientation='horizontal' />
      <Typography style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px', fontStyle: 'italic' }}>
        Empowering individuals with disabilities to lead fulfilling lives is our
        mission at Von Home Care. We believe in providing compassionate and
        personalized support services tailored to the unique needs of each
        individual. Our team is dedicated to making a positive impact in the
        disability community.
      </Typography>
      <Divider orientation='horizontal' />
      <Typography style={{ textAlign: 'start', fontWeight: '800' }}>
        Von Home Care offers a comprehensive range of disability support
        services:
      </Typography>
      <List>
          <ListItem>NDIS Support Services,</ListItem>
          <ListItem>NDIS Core Support,</ListItem>
          <ListItem>Assistance with Personal Activities,</ListItem>
          <ListItem>Household Tasks,</ListItem>
          <ListItem>Community Nursing Care,</ListItem>
          <ListItem>In Home Nursing Care,</ListItem>
          <ListItem>Personal Care,</ListItem>
          <ListItem>Respite Care,</ListItem>
          <ListItem>Medication Management,</ListItem>
          <ListItem>NDIS Cleaning,</ListItem>
          <ListItem>Housekeeping Support,</ListItem>
          <ListItem>Community Participation and Companionship Support,</ListItem>
          <ListItem>Travel and Transport Assistance,</ListItem>
          <ListItem>Support Coordination Service</ListItem>
          <ListItem>NDIS Physiotherapy,</ListItem>
          <ListItem>NDIS Exercises Physiologist,</ListItem>
          <ListItem>NDIS Occupational Therapy,</ListItem>
          <ListItem>NDIS Speech Therapy,</ListItem>
          <ListItem>NDIS Positive Behaviour Therapy,</ListItem>
          <ListItem>NDIS Psychology,</ListItem>
          <ListItem>Disability Support Services,</ListItem>
        </List>
    </Box>
  )
}

export default Home
