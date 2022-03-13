import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, Route, Routes } from 'react-router-dom';
import { lngs } from '../../utils/i18next';
import Auth from '../auth';
import { useTranslation } from 'react-i18next';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserAC } from '../../reducers/userReducer';
import HomeScreen from './../../screens/home';
import MainScreen from './../../screens/main';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const NavBar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggleChagne] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [isAuthShown, changeIsAuthShown] = React.useState(false);

  const handleChange = (event) => {
    // changeIsAuthShown(!isAuthShown);
    setToggleChagne(!toggle);
    Object.keys(lngs).map((lng) => i18n.changeLanguage(lng));
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Auth isAuthShown={isAuthShown} isAuthOpenChange={changeIsAuthShown} />
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="nav">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>

          {isLogged ? (
            <div className="user_icon">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={toggle}
                          onChange={handleChange}
                          aria-label="login switch"
                        />
                      }
                      label={toggle ? 'EN' : 'UA'}
                    />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => dispatch(clearUserAC())}>
                  {t('auth.login.login')}
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="user_icon">
              <button onClick={() => changeIsAuthShown(!isAuthShown)}>
                <p>{t('auth.login.logOut')}</p>
              </button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/home">Home</Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/main">Main</Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => alert('Yo')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'text'} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      </Main>
    </Box>
  );
};
