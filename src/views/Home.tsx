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
import { ChangeEvent, useEffect, useState } from 'react';
import { asyncSendApis } from '../globals/services/service';
import { ApiData } from '../globals/services/api';

export const Home = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem("Token");
  const isLogged = Boolean(token);

  const [varieties, setVarieties] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [exclusiveOffers, setExclusiveOffers] = useState<any[]>([]);
  const [latestBlog, setLatestBlog] = useState<any>(null);
  const [supplementsAll, setSupplementsAll] = useState<any[]>([]);
  const [filteredSupplements, setFilteredSupplements] = useState<any[]>([]);


  const [loadingVarieties, setLoadingVarieties] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingExclusive, setLoadingExclusive] = useState(true);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [loadingSupplementsAll, setLoadingSupplementsAll] = useState(true);

  const [selectedValue, setSelectedValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);

    if (value === "option1") {
      fetchAllSupplements();
    } else {
      setSupplementsAll([]);
      // Indications
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Búsqueda activada:', searchTerm);
    const search = searchTerm.trim().toLowerCase();

    if (selectedValue === "option1") {
      // Filtrar suplementos
      const result = supplementsAll.filter(item =>
        item.name_spanish?.toLowerCase().includes(search) ||
        item.name_english?.toLowerCase().includes(search)
      );
      setFilteredSupplements(result);
    }

    if (selectedValue === "option2") {
      // Filtrar indicaciones
    }
  };

  const getDataVariety = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis('/supplements/apiSupplementRandom', data);
      if (response.status) {
        const fetchedVarieties: any = response;
        setVarieties(fetchedVarieties);
      } else {
        console.error('Error en la respuesta:', response);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    } finally {
      setLoadingVarieties(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis('/supplements/apiCategory', data);
      if (response.status) {
        const fetchedCategories: any = response;
        setCategories(fetchedCategories);
      } else {
        console.error('Error en la respuesta:', response);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchExclusiveOffers = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis('/references/apiSupplementExclusiveOffers', data);
      if (response.status) {
        const fetchedExclusiveOffers: any = response;
        setExclusiveOffers(fetchedExclusiveOffers);
      } else {
        console.error('Error en la respuesta:', response);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    } finally {
      setLoadingExclusive(false);
    }
  };

  const fetchLatestBlog = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis('/references/apiBlogLatest/', data);
      if (response.status) {
        const fetchedBlog: any = response;
        setLatestBlog(fetchedBlog);
      } else {
        console.error('Error en la respuesta:', response);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    } finally {
      setLoadingBlog(false);
    }
  };

  const fetchAllSupplements = async () => {
    try {
      setLoadingSupplementsAll(true);

      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis("/supplements/apiAllSupplements", data);
      const fetchedSupplements: any = response;
      if (response?.status) {
        setSupplementsAll(fetchedSupplements);
        setFilteredSupplements(fetchedSupplements);
      }
    } catch (error) {
      console.error("Error cargando suplementos:", error);
    } finally {
      setLoadingSupplementsAll(false);
    }
  };

  useEffect(() => {
    getDataVariety();
    fetchCategories();
    fetchExclusiveOffers();
    fetchLatestBlog();
  }, []);

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
          <HomeSupplement
            selectedValue={selectedValue}
            handleSelectOption={handleSelectOption}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            handleSearchClick={handleSearchClick}
          />

        </Container>
      </Box>

      {!isLogged && (
        <RegisterHome />
      )}

      {selectedValue !== "" && (
        <Homevariety
          varieties={filteredSupplements}
          loading={loadingSupplementsAll}
        />
      )}

      <HomeCategories
        categories={categories}
        loading={loadingCategories}
      />

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

      <Homevariety
        varieties={varieties}
        loading={loadingVarieties}
      />

      <HomeExclusive
        exclusiveOffers={exclusiveOffers}
        loading={loadingExclusive}
      />

      <HomeCare
        blog={latestBlog}
        loading={loadingBlog}
      />

      <FooterApp />
    </Box>
  );
};
