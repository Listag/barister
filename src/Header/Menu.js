import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider, IconButton, Typography } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import axios from 'axios';

export default class BasicMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'email': '',
        'firstName': '',
        'anchorEl': null,
        'open': false
    }
  }

  handleClick = (event) => {
    this.setState({'anchorEl': event.currentTarget});
    this.setState({'open': Boolean(event.currentTarget)})
  };

  getUserData = async() => {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');
    const response = axios.get(`http://localhost:3002/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    }).then(res => {
        this.setState({'email': res.data.email});
        this.setState({'firstName': res.data.firstName});
    });
  }

  handleClose = (event) => {
    this.setState({'open': !this.state.open});
  };
  
  handleLogout = () => {
    localStorage.removeItem('accessToken');
    this.props.navigation('/authentication')
  };

  componentDidMount() {
    this.getUserData();
  }
  render() {
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={this.state.open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={this.state.open ? 'true' : undefined}
        onClick={this.handleClick}
      >
        <PermIdentityIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Typography sx={{lineHeight: 1, ml: 2, mr: 2, mt: 1, fontWeight: 700, fontSize: "1rem"}}>{this.state.firstName}</Typography>
        <Typography sx={{ ml: 2, mr: 2, mb: 1, color: "gray", fontSize: '.875rem'}}>{this.state.email}</Typography>
        <Divider />
        <MenuItem onClick={this.handleClose}>Профиль</MenuItem>
        <MenuItem onClick={this.handleClose}>Настройки</MenuItem>
        <MenuItem onClick={this.handleLogout}>Выйти</MenuItem>
      </Menu>
    </div>
  )}
    }