import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import FooterApp from '../components/footerApp/FooterApp';
import { HomeSupplement } from '../components/homeForm/components/homeSupplement/HomeSupplement';
import { RegisterHome } from '../components/homeForm/components/registerHome/RegisterHome';
import { HomeExclusive } from '../components/homeForm/components/homeExclusive/HomeExclusive';
import { HomeCare } from '../components/homeForm/components/homeCare/HomeCare';
import { HomeCategories } from '../components/homeForm/components/homeCategories/HomeCategories';
import { Homevariety } from '../components/homeForm/components/homeVariety/HomeVariety';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Box justifyContent='space-between'>
      <Box className='bg_Home_image'>
        <CustomAppBar />
        <Container
          component='main'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            width: {
              xs: '90%', // 90% del ancho en pantallas extra pequeñas
              sm: '80%', // 70% del ancho en pantallas pequeñas
              md: '50%', // 50% del ancho en pantallas medianas
              lg: '40%', // 40% del ancho en pantallas grandes
              xl: '38%', // 38% del ancho en pantallas extra grandes
            },
            marginRight: { sm: '10px', md: '100px' }, // Mueve el contenedor hacia la derecha
          }}
        >
          <HomeSupplement />
        </Container>
      </Box>
      <RegisterHome />
      <HomeCategories />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            marginTop: '5%',
            marginBottom: '3%',
            fontWeight: 'bold',
            color: '#3C3C3C',
            fontSize: '2.1rem',
          }}
        >
          {t('homeform.Variety')}
        </Typography>
      </Box>
      <Homevariety />

      <HomeExclusive />
      <HomeCare />

      <FooterApp />
    </Box>
  );
};
