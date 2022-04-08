import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import BasicMenu from './Menu';
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';

function Header() {
  const navigation = useNavigate();
  return (
    <Toolbar sx={{borderBottom:1, borderBottomColor: 'divider'}}>
      <Link href="/" underline="none" color="inherit" sx={{ flex: 1 }}>
        <Typography
          component="h2"
          variant="h5"
          align="left"
          color="lightBlack"
        >
          Barister
        </Typography>
        </Link>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <BasicMenu navigation={navigation}/>
    </Toolbar>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;