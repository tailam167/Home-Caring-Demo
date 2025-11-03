import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ContactMail, Home, MedicalServices } from '@mui/icons-material';

function NavLink() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        sx={{
          '.css-1scjuq2-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected': {color: '#247d7c'},
          textAlign: 'center',
        }}
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => {navigate('/')}} label="Who we are" icon={<Home />} />
        <BottomNavigationAction onClick={() => navigate('/services')} label="What we do" icon={<MedicalServices />} />
        <BottomNavigationAction onClick={() => navigate('/contact')} label="Contact" icon={<ContactMail />} />
      </BottomNavigation>
    </Box>
  );
}

export default NavLink;
