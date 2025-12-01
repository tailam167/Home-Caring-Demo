import { EmailOutlined, LocalPhoneOutlined, LocationOnOutlined } from '@mui/icons-material'
import { Button, FormControl, FormLabel, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'

function Contact() {
  return (
    <Grid container display={'flex'} flexDirection={'row'} sx={{ paddingTop: "15px" }}>
      <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <Typography variant='h5'>Contact</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <LocationOnOutlined fontSize='medium' sx={{ color: '#247d7c' }} />
            </ListItemIcon>
            <ListItemText children={<Typography variant='h6'>83 Mc Intosh Road Altona  North, Victoria 3025</Typography>} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <LocalPhoneOutlined fontSize='medium' sx={{ color: '#247d7c' }} />
            </ListItemIcon>
            <ListItemText children={<Typography variant='h6'>0416 532 821</Typography>} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <EmailOutlined fontSize='medium' sx={{ color: '#247d7c' }} />
            </ListItemIcon>
            <ListItemText children={<Typography variant='h6'>info@vonhomecare.com.au</Typography>} />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <FormControl fullWidth>
          <FormLabel content='First Name'> First Name </FormLabel>
          <TextField id="first-name" size='small' variant="outlined" margin="normal" />
          <FormLabel content='Last Name'> Last Name </FormLabel>
          <TextField id="last-name" size='small' variant="outlined" margin="normal" />
          <FormLabel content='Email Address'> Email Address </FormLabel>
          <TextField id="email-address" size='small' variant="outlined" margin="normal" />
          <FormLabel content='Phone Number'> Phone Number </FormLabel>
          <TextField id="phone-number" size='small' variant="outlined" margin="normal" />
          <FormLabel content='Message'> Message </FormLabel>
          <TextField
            id="message"
            size='small'
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" sx={{ marginTop: '10px', backgroundColor: '#247d7c' }}>Send</Button>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Contact
