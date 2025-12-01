import { Box, Typography, Grid } from '@mui/material';

function Services() {
  return (
    <Box>
      <Typography variant='h5'>Our Services</Typography>
      <Typography variant='body1' sx={{ marginTop: '10px', textAlign: 'justify' }}>
        At Von Home Care, we are dedicated to offering round-the-clock care that caters to a diverse array of needs, including behavioral, mental health, and complex support.
        We adhere to the stringent quality and safety standards set by the NDIA to help you reach your plan goals.
        Our personalized approach is led by committed Case Managers who work closely with clients to design weekly services and ensure high standards through regular check-ins.
        Health is our utmost priority, and our nursing team conducts monthly check-ups to proactively address any health issues. Our professional in-home support carers ensure household daily living tasks are managed, and the regular gardening services will enhance the overall living experience.
        Additionally, our extensive transport services guarantee that clients can easily access community events and medical appointments.
        At Von Home Care, our mission is to create a meaningful, positive difference in our clients's lives through personalized, high-quality support. We empower our clients to enjoy fulfilling lives and actively participate in their communities, always aiming to surpass their expectations.
      </Typography>
      <Grid container display={'flex'} flexDirection={'row'} sx={{ paddingTop: "15px" }}>

        <Grid size={{ xs: 12, md: 4, lg: 4 }} sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <img sizes="300px"
            id="img_WPht0-65v"
            src='src/assets/service-1.png'
            alt="A woman and another woman on a wheelchair"
            width="300" height="300" />
          <Typography variant='h6' style={{ textAlign: 'justify', fontStyle: 'italic' }}>
            Support Coordination
          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
            Experience a smooth NDIS journey with our knowledgeable coordinators.
            They are here to help you comprehend, execute, and make the most of your plan,
            ensuring you receive the appropriate services that match your aspirations.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }} sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
           <img sizes="300px"
            id="img_WPht0-65v"
            src='src/assets/service-2.png'
            alt="A woman and another woman on a wheelchair"
            width="300" height="300" />
          <Typography variant='h6' style={{ textAlign: 'justify', fontStyle: 'italic' }}>
            NDIS Core Support
          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
            Our team of dedicated professionals is here to prioritize your well-being.
            Our support workers provide tailored assistance, helping you with everyday activities and skill development,
            so you can enjoy a fulfilling and independent life.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }} sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
           <img sizes="300px"
            id="img_WPht0-65v"
            src='src/assets/service-3.png'
            alt="A woman and another woman on a wheelchair"
            width="300" height="300" />
          <Typography variant='h6' style={{ textAlign: 'justify', fontStyle: 'italic' }}>
            Community Nursing Care
          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
            Experience exceptional medical care right in your neighborhood.
            Our qualified nurses offer a variety of services, from regular check-ups to specialized treatments,
            making sure your health is always well taken care of.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Services
