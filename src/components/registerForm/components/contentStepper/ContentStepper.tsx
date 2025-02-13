import { Box, Typography } from '@mui/material';
import { OptionsButtons } from '../../../../globals/types';
import RenderOptions from '../renderOptions/RenderOptions';

export const ContentStepper = ({
  title1,
  title2,
  title3,
  ButtonsOptions,
  description,
}: {
  title1?: string;
  title2?: string;
  title3?: string;
  ButtonsOptions: OptionsButtons[];
  description: string;
}) => {
  return (
    <Box
      sx={{
        mt: 3,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h5' sx={{ fontFamily: 'Inter', fontSize: '27px' }}>
          {title1}
          <span
            style={{
              fontFamily: 'Gabriela',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {title2}
          </span>
          {title3}
        </Typography>
      </Box>
      <Typography sx={{ textAlign: 'center', mt: 2 }}>{description}</Typography>
      <Box sx={{ flex: 1, height: 50, backgroundColor: 'red', mt: 3 }}></Box>
      <RenderOptions options={ButtonsOptions} />
    </Box>
  );
};
