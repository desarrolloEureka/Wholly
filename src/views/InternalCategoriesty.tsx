import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import FooterApp from '../components/footerApp/FooterApp';
import { HomeCategories } from '../components/homeForm/components/homeCategories/HomeCategories';
import { HomeExclusive } from '../components/homeForm/components/homeExclusive/HomeExclusive';
import { InternalCategoriestyform } from '../components/categoriesForm.ts/componets/internalCategoriestyform/InternalCategoriestyform';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { asyncSendApis } from '../globals/services/service';
import { ApiData } from '../globals/services/api';
import { CircularProgress } from '@mui/material';

export const InternalCategoriesty = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nameCategory, setNameCategory] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  const getData = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };
      const response = await asyncSendApis(`/supplements/apiCategoryDetail/${id}?page=${pageNumber}`, data);
      const dataDetail: any = response;
      if (pageNumber === 1) {
        setItems(dataDetail.results);
      } else {
        setItems(prev => [...prev, ...dataDetail.results]);
      }

      setNameCategory(dataDetail?.category_name);
      setPage(dataDetail.page);
      setTotalItems(dataDetail.count_total_category);
      setHasMore(dataDetail.page < dataDetail.total_pages);

    } catch (error) {
      console.error("Error cargando datos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setItems([]);
    setPage(1);
    getData(1);
  }, [id]);

  return (
    <Box justifyContent='space-between'>
      <Box className='bg_InternalCategoriesty_image'>
        <CustomAppBar />
        <Typography
          variant='h2'
          sx={{
            textAlign: 'start',
            width: '50%',
            mt: '9%',
            marginLeft: '50px',
            fontSize: '2.6rem',
            fontWeight: 100,
            color: '#Ffff',
          }}
        >
          {t('categoriesIternal.supplementsSkinCare')}
        </Typography>
      </Box>
      {loading && items.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "400px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: '90px',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                marginTop: '5%',
                marginBottom: '3%',
                fontWeight: 'bold',
                color: '#3C3C3C',
                fontSize: '2.1rem',
              }}
            >
              {nameCategory}
            </Typography>
          </Box>

          <InternalCategoriestyform
            items={items}
            onLoadMore={() => !loading && getData(page + 1)}
            hasMore={hasMore}
            totalItems={totalItems}
          />
        </>
      )}

      <Box
        sx={{
          backgroundColor: '#E8E4DE',
        }}
      >
        <HomeExclusive />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ' rgba(28, 28, 28, 0.7)',
            height: '2px',
            width: '90%',
            margin: 'auto',
            marginTop: '6%',
            marginBottom: '8%',
          }}
        ></Box>

        <Typography
          variant='h3'
          sx={{
            marginBottom: '6%',
            fontWeight: 'bold',
            ml: '60px',
            color: '#3C3C3C',
            fontSize: '2.1rem',
          }}
        >
          {t('categoriesIternal.YouLike')}
        </Typography>
        <HomeCategories />
      </Box>

      <FooterApp />
    </Box>
  );
};
