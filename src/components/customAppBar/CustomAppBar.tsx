import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { logo_app } from '../../assets/images';
import Stack from '@mui/material/Stack';

import { useTranslation } from 'react-i18next';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IsActiveLangButton } from './customAppBarTypes';
import DrawerMobile from './components/drawerMobile/DrawerMobile';
import { Box } from '@mui/material';
import { UserMenu } from './UserMenu';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isActiveLangButton, setIsActiveLangButton] =
    useState<IsActiveLangButton>({
      es: false,
      en: false,
    });

  const isSmallScreen = useMediaQuery('(max-width: 830px)'); // Para celulares
  const [openDrawer, setOpenDrawer] = useState(false);

  const validLanguage = (lang: string) => {
    setIsActiveLangButton({
      es: lang === 'es',
      en: lang === 'en',
    });
  };

  const handleLanguageChange = (languageCode: string) => {
    validLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    validLanguage(i18n.language.split('-')[0]); // Usa el idioma actual de i18n
  }, [i18n.language]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        'key' in event &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };

  return (
    <Box sx={{ position: 'relative' }}>
      <AppBar
        position='static'
        sx={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
          backdropFilter: 'blur(4px)',
          width: '100%',
          height: 80,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* logo */}
          <Box
            sx={{
              display: 'flex',
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              position: isSmallScreen ? 'absolute' : undefined,
              right: isSmallScreen ? '55%' : undefined,
            }}
          >
            <Button color='inherit' onClick={() => navigate(`/`)}>
              <img
                src={logo_app}
                alt='logo'
                style={{ width: 100, height: 30 }}
              />
            </Button>
          </Box>
          <>
            {/* Menú hamburguesa en pantallas pequeñas (izquierda) */}
            {isSmallScreen && (
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ position: 'absolute', left: '5%' }} // Alineado a la izquierda
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo (centrado en móviles) */}

            {/* Selector de idioma */}
            {isSmallScreen && (
              <Box
                sx={{
                  position: 'absolute',
                  right: '19%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.1,
                }}
              >
                <Button
                  sx={{
                    color: '#A5AB94',
                    fontWeight: isActiveLangButton?.en ? 'bold' : '100',
                    minWidth: 'auto',
                  }}
                  onClick={() => handleLanguageChange('en')}
                >
                  {t('customAppBar.en')}
                </Button>
                <Box
                  sx={{
                    height: '25px',
                    width: '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                  }}
                />
                <Button
                  sx={{
                    color: '#ADADAD',
                    fontWeight: isActiveLangButton?.es ? 'bold' : '100',
                    minWidth: 'auto',
                  }}
                  onClick={() => handleLanguageChange('es')}
                >
                  {t('customAppBar.es')}
                </Button>
              </Box>
            )}

            {/* Ícono del carrito (derecha en móviles) */}
            {isSmallScreen && (
              <Button
                onClick={() => navigate(`/shoppingCart`)}
                variant='contained'
                color='primary'
                sx={{
                  color: 'rgba(12, 12, 12, 0.57)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '50%',
                  padding: '10px',
                  minWidth: 'auto',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                  width: 42,
                  height: 42,
                  position: 'absolute',
                  right: '5%',
                }}
              >
                <ShoppingBagOutlinedIcon />
              </Button>
            )}
          </>
          <>
            {/* Menú en pantallas grandes */}
            {!isSmallScreen && (
              <Box
                sx={{
                  width: { md: '45%' },
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { md: 0, lg: 1 },
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {[
                    { label: 'home', key: '' },
                    { label: 'category', key: 'category' },
                    { label: 'blog', key: 'blog' },
                    { label: 'support', key: 'support' },
                    { label: 'aboutUs', key: 'about_us' },
                    { label: 'kits', key: 'kits' },
                    { label: 'comments', key: 'comments' },
                  ].map((button, index) => (
                    <Button
                      key={button.label + index}
                      onClick={() => navigate(`/${button.key}`)}
                      color='inherit'
                      sx={{
                        paddingLeft: { md: 0, lg: 2 },
                        textTransform: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                          textUnderlineOffset: '7px',
                          color: '#FBFFDD',
                        },
                      }}
                    >
                      {t(`customAppBar.${button.label}`)}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {/* Botones adicionales (Idioma, Carrito, Login, Registro y login icon) en pantallas grandes */}
            {!isSmallScreen && (
              <Box
                sx={{
                  width: { xs: '100%', md: '45%' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end', // Centrado en pantallas pequeñas
                }}
              >
                {/* Idioma */}
                <Stack direction='row' spacing={0.5} alignItems='center'>
                  <Button
                    sx={{
                      color: '#A5AB94',
                      fontWeight: isActiveLangButton?.en ? 'bold' : '100',
                      minWidth: 'auto',
                    }}
                    onClick={() => handleLanguageChange('en')}
                  >
                    {t('customAppBar.en')}
                  </Button>
                  <Box
                    sx={{
                      height: '25px',
                      width: '1px',
                      backgroundColor: 'rgb(255, 255, 255)',
                    }}
                  />
                  <Button
                    sx={{
                      color: '#ADADAD',
                      fontWeight: isActiveLangButton?.es ? 'bold' : '100',
                      minWidth: 'auto',
                    }}
                    onClick={() => handleLanguageChange('es')}
                  >
                    {t('customAppBar.es')}
                  </Button>
                </Stack>

                {/* Carrito */}
                <Button
                  onClick={() => navigate(`/shoppingCart`)}
                  variant='contained'
                  color='primary'
                  sx={{
                    color: 'rgba(12, 12, 12, 0.57)',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '100%',
                    padding: '20px',
                    minWidth: 'unset',
                    width: { md: 30, lg: 40 },
                    height: { md: 30, lg: 40 },
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    // flexShrink: 0, // Evita que se encoja mucho
                  }}
                >
                  <ShoppingBagOutlinedIcon />
                </Button>

                {/* Login */}
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={() => navigate('/login')}
                  sx={{
                    border: '1px solid #A5AB95',
                    color: '#FBFFDD',
                    borderRadius: '7px',
                    padding: '8px 16px',
                    textTransform: 'none',
                    width: {
                      xs: '100%', // móviles
                      md: 100, // >=960px
                      lg: 150,
                    },
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderColor: '#A5AB95',
                      color: '#FBFFDD',
                      boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                >
                  {t('customAppBar.nameLogin')}
                </Button>

                {/* Registro */}
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => navigate('/register')}
                  sx={{
                    color: '#383838',
                    backgroundColor: '#EEF1F1',
                    borderRadius: '7px',
                    padding: '8px 16px',
                    textTransform: 'none',
                    width: {
                      xs: '100%', // móviles
                      md: 100, // >=960px
                      lg: 150,
                    },
                    transition: 'box-shadow 0.3s ease-in-out',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                      boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                >
                  {t('customAppBar.nameRecord')}
                </Button>

                <UserMenu />
              </Box>
            )}
          </>
        </Toolbar>
      </AppBar>

      <DrawerMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Box>
  );
};

export default CustomAppBar;
