import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

import BubbleMenu from './BubbleMenu'

const items = [
  {
    label: 'Home',
    href: '#first',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'About',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'GitHub',
    href: 'https://github.com/simlu2000',
    ariaLabel: 'GitHub',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },

];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: '2%',
  left: 0,
  right: 0,
  width: 'auto',
  marginLeft: '4.5%',
  marginRight: '4.5%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '15px',
  borderRadius: '25px',
  zIndex: 1000,
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  [theme.breakpoints.down('sm')]: {
    top: '91%',
    justifyContent: 'center',
    //backgroundColor: 'rgba(21, 64, 70, 0.509)',
    marginLeft: 0,
    marginRight: 0,
    padding: '10px',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '1rem',
  margin: '0 20px',
  borderRadius: '25px',
  color: '#00BFFF',
  width: '20%',
  '&:hover': {
    color: '#F7F7F7',
  },
  [theme.breakpoints.down('sm')]: {
    width: '20%',
    fontSize: '1rem',
    backgroundColor: 'rgba(228, 228, 228, 0)',
    padding: '10px',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      {/*
      <Toolbar>
        <StyledIconButton component={Link} href="#first">
          Home
        </StyledIconButton>
        <StyledIconButton component={Link} href="#about">
          About
        </StyledIconButton>
        <StyledIconButton component={Link} href="https://github.com/simlu2000">
          Github
        </StyledIconButton>
      </Toolbar>*/}

      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </StyledAppBar>
  );
}

export default Navbar;