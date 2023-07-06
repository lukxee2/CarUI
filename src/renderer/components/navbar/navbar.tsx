import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LanguageIcon from '@mui/icons-material/Language';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import './navbar.scss';

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation value={value} sx={{ width: '100%', position: 'absolute', bottom: 0}} onChange={(event, newValue) => { setValue(newValue) }}>
      <BottomNavigationAction
        label="Home"
        icon={<HomeRoundedIcon />}
        value="home"
        onClick={()=>navigate('/')}
      />
      <BottomNavigationAction
        label="Browser"
        icon={<LanguageIcon />}
        value="browser"
        onClick={()=>navigate('/browser')}
      />
      <BottomNavigationAction
        label="Camera"
        icon={<CameraAltRoundedIcon />}
        value="camera"
        onClick={()=>navigate('/camera')}
      />
      <BottomNavigationAction
        label="Carplay"
        icon={<DirectionsCarFilledRoundedIcon />}
        value="carplay"
        onClick={()=>navigate('/carplay')}
      />
      <BottomNavigationAction
        label="Settings"
        icon={<TuneRoundedIcon />}
        value="settings"
        onClick={()=>navigate('/settings')}
      />
    </BottomNavigation>
  );
}
