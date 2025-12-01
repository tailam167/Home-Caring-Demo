import { Box, Typography } from "@mui/material";
import NavLink from "./NavLink";
import { EmailOutlined, PhoneInTalkOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [value, setValue] = useState(0);
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      padding={'10px'}
    >
      <Box display={'flex'} flexDirection={'row'} flexGrow={0}>
        <img
          sizes="323px"
          id="img_Clprt0-lmx"
          src="https://static.wixstatic.com/media/23c4bd_beb6fb5f06db4c5896bbdd238d09b345~mv2.png/v1/fill/w_356,h_133,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/
          VON%20CARE%20(1500%20x%20450%20px)%20(1500%20x%20830%20px)%20v1_tbg.png"
          alt="VON CARE (1500 x 450 px) (1500 x 830 px) v1_tbg.png"
          width="220"
          height="80"
        />
      </Box>
      <Box display={'flex'} flexDirection={'row'} width={'100%'} flexGrow={1}>
        <NavLink value={value} setValue={setValue}/>
      </Box>
      <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <EmailOutlined fontSize="small" />
          <Typography variant="caption" style={{ marginLeft: '5px' }}>Email:</Typography>
          <Link style={{ color: '#247d7c' }} to="mailto:info@vonhomecare.com.au" children={
            <Typography variant="caption" sx={{ marginLeft: '5px', color: '#247d7c' }}>info@vonhomecare.com.au</Typography>
          } />
        </Box>
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <PhoneInTalkOutlined fontSize="small" />
          <Typography variant="caption" style={{ marginLeft: '5px' }}>Hotline:</Typography>
          <Typography variant="caption" sx={{ marginLeft: '5px', color: '#247d7c' }}>0416 532 821</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
