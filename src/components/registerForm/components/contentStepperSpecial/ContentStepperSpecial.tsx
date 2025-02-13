import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { OptionsButtons } from '../../../../globals/types';
import RenderOptions from '../renderOptions/RenderOptions';

export const ContentStepperSpecial = () => {
  const options: OptionsButtons[] = [
    {
      id: 1,
      name: 'name button',
    },
    {
      id: 2,
      name: 'name button',
    },
    {
      id: 3,
      name: 'name button',
    },
    // {
    //   id: 4,
    //   name: 'name button',
    // },
    // {
    //   id: 5,
    //   name: 'name button',
    // },
    // {
    //   id: 1,
    //   name: 'name button',
    // },
    // {
    //   id: 2,
    //   name: 'name button',
    // },
    // {
    //   id: 3,
    //   name: 'name button',
    // },
    // {
    //   id: 4,
    //   name: 'name button',
    // },
    // {
    //   id: 5,
    //   name: 'name button',
    // },
    // {
    //   id: 1,
    //   name: 'name button',
    // },
    // {
    //   id: 2,
    //   name: 'name button',
    // },
    // {
    //   id: 3,
    //   name: 'name button',
    // },
  ];
  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h5'
          sx={{ fontFamily: 'Inter', fontSize: '27px', marginBottom: '18px' }}
        >
          {t('select the ')}
          <span
            style={{
              fontFamily: 'Gabriela',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {t('trends')}
          </span>
          {t(' you have')}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.9em',
          }}
        >
          Enter the name of what you are looking for as many times as you need
          and add them one by one.
        </Typography>
      </Box>

      <RenderOptions options={options} additionalButtons />
    </Box>
  );
};
