import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {
  Box,
  Drawer,
  List,
  ListItem,
  IconButton,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
  Article as ArticleIcon,
  Support as SupportIcon,
  Info as InfoIcon,
  Build as BuildIcon,
  AccountCircle as AccountCircleIcon,
  Edit as EditIcon,
  History as HistoryIcon,
  ShoppingCart as ShoppingCartIcon,
  LocationOn as LocationOnIcon,
  Payment as PaymentIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../alert/Alert';

interface DrawerMobileProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

const DrawerMobile: React.FC<DrawerMobileProps> = ({
  openDrawer,
  setOpenDrawer,
}) => {
  const { t } = useTranslation();
  const [showLogOut, setShowLogOut] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const handleProfileClick = () => setOpenProfile(!openProfile);
  const TEXT_COLOR = '#3C3C3C';
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('oooooo');

    setOpenDrawer(false);
    setShowLogOut(true);
  };

  return (
    <Box>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: 3,
            m: 2,
            width: 250,
            height: 450,
          },
        }}
      >
        <List>
          <ListItem>
            <IconButton onClick={() => setOpenDrawer(false)} sx={{ mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 400,
                textAlign: 'center',
                flexGrow: 1,
                marginRight: '40px',
                color: TEXT_COLOR,
              }}
            >
              {t('customAppBar.menu')}
            </Typography>
          </ListItem>
          {/* Home */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary={t('customAppBar.home')}
                sx={{ color: TEXT_COLOR }}
              />
            </ListItemButton>
          </ListItem>
          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleProfileClick}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary={t('customAppBar.profile')}
                sx={{ color: TEXT_COLOR }}
              />
              {openProfile ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Submenú de Profile */}
          <Collapse in={openProfile} timeout='auto' unmountOnExit>
            <List component='div' disablePadding sx={{ pl: 2 }}>
              {[
                {
                  label: 'edit_profile',
                  key: 'edit_profile',
                  route: '/EditProfile/true',
                  icon: <EditIcon />,
                },
                {
                  label: 'orders',
                  key: 'orders',
                  route: '/Orders',
                  icon: <ShoppingCartIcon />,
                },
                {
                  label: 'addresses',
                  key: 'addresses',
                  route: '/Addresses',
                  icon: <LocationOnIcon />,
                },
                {
                  label: 'payment_methods',
                  key: 'payment_methods',
                  route: '/PaymentMethods',
                  icon: <PaymentIcon />,
                },
                {
                  label: 'aboutUs',
                  key: 'about_us',
                  route: '/about_us',
                  icon: <SupportIcon />,
                },
                { label: 'logout', key: 'logout', icon: <LogoutIcon /> },
              ].map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={() =>
                      item.route ? navigate(item.route) : handleLogout()
                    }
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={t(`customAppBar.${item.label}`)}
                      sx={{ color: TEXT_COLOR }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
          {/* Botones principales */}
          {[
            {
              label: 'category',
              key: 'category',
              icon: <CategoryIcon />,
              route: '/category',
            },
            {
              label: 'blog',
              key: 'blog',
              icon: <ArticleIcon />,
              route: '/blog',
            },
            {
              label: 'support',
              key: 'support',
              icon: <SupportIcon />,
              route: '/support',
            },
            {
              label: 'aboutUs',
              key: 'about_us',
              icon: <InfoIcon />,
              route: '/about_us',
            },
            { label: 'kits', key: 'kits', icon: <BuildIcon />, route: '/kits' },
          ].map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => navigate(item.route)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={t(`customAppBar.${item.label}`)}
                  sx={{ color: TEXT_COLOR }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Alert
        showLogOut={showLogOut}
        setShowLogOut={setShowLogOut}
        isConfirm={true}
        icon={<ErrorIcon sx={{ color: 'red', fontSize: 60 }} />}
        description={t('alertError.description')}
      />
    </Box>
  );
};

export default DrawerMobile;
