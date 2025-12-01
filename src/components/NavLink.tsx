import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ContactMail, Home, Info, MedicalServices } from '@mui/icons-material';
import { Divider } from '@mui/material';

function NavLink({value, setValue}: {value: number, setValue: (newValue: number) => void}) {
  const navigate = useNavigate();
  console.log(navigate.toString());
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
        <Divider orientation='vertical' flexItem />
        <BottomNavigationAction onClick={() => navigate('/about')} label="About" icon={<Info />} />
        <Divider orientation='vertical' flexItem />
        <BottomNavigationAction onClick={() => navigate('/services')} label="What we do" icon={<MedicalServices />} />
        <Divider orientation='vertical' flexItem />
        <BottomNavigationAction onClick={() => navigate('/contact')} label="Contact" icon={<ContactMail />} />
      </BottomNavigation>
    </Box>
  );
}

export default NavLink;
