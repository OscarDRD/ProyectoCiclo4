import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ListAltIcon from '@mui/icons-material/ListAlt';

function AppBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Menú" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Realizar Domicilios" icon={<DeliveryDiningIcon />} />
        <BottomNavigationAction label="Lista de domicilios" icon={<ListAltIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default AppBar;