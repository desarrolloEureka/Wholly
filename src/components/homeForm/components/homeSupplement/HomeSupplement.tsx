import {
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const HomeSupplement = ({ selectedValue, handleSelectOption, searchTerm, handleSearchChange, handleSearchClick }: any) => {
  const { t } = useTranslation();

  const handleRadioChange = (event: any) => {
    handleSelectOption(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-end' },
        justifyContent: { xs: 'center', md: 'flex-end' },
        padding: { xs: 2, sm: 3, md: 5 },
        backgroundColor: 'rgba(173, 173, 173, 0.22)',
        backdropFilter: 'blur(6px)',
        borderRadius: 4,
        boxShadow: 3,
        width: { xs: '80%', md: '100%' },
        marginTop: '60px',
        marginBottom: '45px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography
        variant='h3'
        sx={{
          mb: 2,
          fontFamily: 'Montserrat',
          color: '#3C3C3C',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
        }}
      >
        {t('homeform.title')}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.8rem' },
          color: '#333',
          mb: 4,
        }}
      >
        {t('homeform.subtitle')}
      </Typography>

      <Box
        gap={3}
        sx={{
          alignSelf: { xs: 'center', md: 'flex-start' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'flex-start',
          width: '100%',
          mb: 3,
        }}
      >
        <FormControl component='fieldset'>
          <FormLabel component='legend'></FormLabel>
          <RadioGroup
            value={selectedValue}
            onChange={handleRadioChange}
            aria-label='options'
            name='radio-buttons-group3'
            row
            sx={{
              gap: { xs: '20px', md: '40px' },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <FormControlLabel
              value='option1'
              control={
                <Radio
                  sx={{
                    transform: 'scale(1.1)',
                    color: selectedValue === 'option1' ? '#3C3C3C' : 'default',
                    '&.Mui-checked': {
                      color: '#3C3C3C',
                    },
                  }}
                />
              }
              label={
                <span style={{ fontSize: '1rem' }}>
                  {t('homeform.supplements')}
                </span>
              }
            />
            <FormControlLabel
              value='option2'
              control={
                <Radio
                  sx={{
                    transform: 'scale(1.1)',
                    color: selectedValue === 'option2' ? '#3C3C3C' : 'default',
                    '&.Mui-checked': {
                      color: '#3C3C3C',
                    },
                  }}
                />
              }
              label={
                <span style={{ fontSize: '1rem' }}>
                  {t('homeform.indications')}
                </span>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '100%',
          padding: 0,
        }}
      >
        <TextField
          variant='outlined'
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={t('homeform.searchPlaceholder')}
          sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.46)',
            '& .MuiOutlinedInput-input': {
              padding: '13px 25px',
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              minHeight: '60px',
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={handleSearchClick}
                  sx={{
                    border: '1.5px solid rgb(62, 62, 62)',
                    borderRadius: '50%',
                    padding: '2px',
                    width: '35px',
                    height: '35px',
                    backgroundColor: 'rgb(62, 62, 62)',
                    '&:hover': { backgroundColor: 'rgba(49, 48, 48, 0.3)' },
                  }}
                >
                  <SearchIcon fontSize='small' sx={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Box>
  );
};
