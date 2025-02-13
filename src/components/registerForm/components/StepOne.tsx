import PersonIcon from '@mui/icons-material/Person';
import {
  useState,
  SetStateAction,
  useImperativeHandle,
  forwardRef,
} from 'react';
import KeyIcon from '@mui/icons-material/Key';
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TransgenderIcon from '@mui/icons-material/Transgender';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTranslation } from 'react-i18next';
import { StepOneHandle } from '../../../globals/types';
const dataErrors = {
  name: false,
  email: false,
  confirmEmail: false,
  password: false,
  confirmPassword: false,
  lastName: false,
  dateOfBirth: false,
  biologicalSex: false,
  gender: false,
  optionsList: false,
};
export const StepOne = forwardRef<StepOneHandle>((props, ref) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date1, setDate1] = useState(''); // Estado para el primer grupo
  const [date2, setDate2] = useState(''); // Estado para el segundo grupo
  const [date3, setDate3] = useState(''); // Estado para el tercer grupo
  const [errors, setErrors] = useState(dataErrors);
  const [generalError, setGeneralError] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setConfirmPassword(e.target.value);

  const handleChange1 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDate1(event.target.value); // Actualiza el estado para el primer grupo
  };

  const handleChange2 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDate2(event.target.value); // Actualiza el estado para el segundo grupo
  };

  const handleChange3 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDate3(event.target.value); // Actualiza el estado para el tercer grupo
  };

  const validateForm = () => {
    const newErrors = {
      name: !name,
      email: !email,
      confirmEmail: !confirmEmail,
      password: !password,
      confirmPassword: !confirmPassword,
      lastName: !lastName,
      dateOfBirth: !dateOfBirth,
      biologicalSex: !date1,
      gender: !date2,
      optionsList: !date3,
    };

    console.log('newErrors', newErrors);
    console.log('props', props);

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      setGeneralError('Todos los campos son requeridos');
      return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setGeneralError('Las contraseñas no coinciden');
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
        confirmPassword: true,
      }));
      return false;
    }

    // Validar que los correos electrónicos coincidan
    if (email !== confirmEmail) {
      setGeneralError('Los correos electrónicos no coinciden');
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
        confirmEmail: true,
      }));
      return false;
    }

    // Validar formato de correo electrónico
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(email)) {
      setGeneralError('El correo electrónico no es válido');
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return false;
    }

    setGeneralError('');
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  console.log('error.name', errors.name);

  return (
    <Box>
      {/* header form */}
      <Box sx={{ textAlign: 'center' }}>
        {generalError && (
          <Typography
            variant='body1'
            color='error'
            sx={{ marginBottom: '16px' }}
          >
            {generalError}
          </Typography>
        )}
        <Box>
          <Typography
            variant='h5'
            sx={{
              fontSize: '27px', // Nota: notación camelCase para 'fontSize'
              textDecorationSkipInk: 'none',
            }}
          >
            {t('registerForm.registrationTitle')}{' '}
            <span
              style={{
                fontFamily: 'Gabriela',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              {t('registerForm.registrationTitle2')}
            </span>
          </Typography>
        </Box>
      </Box>
      {/* content form */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginX: { xs: '10px', sm: '60px' }, // Alineación responsiva
            marginBottom: '50px',
            marginTop: '40px',
            flexDirection: { xs: 'column', sm: 'row' }, // Cambiar a columna en pantallas pequeñas
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '48%' }, // Ancho del formulario de la izquierda
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column', // Alineamos en columna
              alignItems: 'flex-start',
              gap: '18px',
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: errors.name ? 'red' : '#3C3C3C',
                  }}
                >
                  <PersonIcon sx={{ color: errors.name ? 'red' : '#3C3C3C' }} />
                  {t('registerForm.yourName')}
                </Box>
              </Typography>
              <OutlinedInput
                placeholder={t('registerForm.yourNamePlaceholder')}
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: errors.email ? 'red' : '#3C3C3C',
                  }}
                >
                  <EmailIcon sx={{ color: errors.email ? 'red' : '#3C3C3C' }} />
                  {t('registerForm.yourEmail')}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                placeholder={t('registerForm.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: errors.confirmEmail ? 'red' : '#3C3C3C',
                  }}
                >
                  <EmailIcon
                    sx={{ color: errors.confirmEmail ? 'red' : '#3C3C3C' }}
                  />
                  {t('registerForm.confirmEmail')}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                placeholder={t('registerForm.confirmEmailPlaceholder')}
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    color: errors.password ? 'red' : '#3C3C3C',
                  }}
                >
                  <KeyIcon
                    sx={{
                      transform: 'rotate(130deg)',
                      color: errors.password ? 'red' : '#3C3C3C',
                    }}
                  />
                  {t('registerForm.password')}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                type={showPassword ? 'text' : 'password'}
                placeholder={t('registerForm.passwordPlaceholder')}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    color: errors.confirmPassword ? 'red' : '#3C3C3C',
                  }}
                >
                  <KeyIcon
                    sx={{
                      transform: 'rotate(130deg)',
                      color: errors.confirmPassword ? 'red' : '#3C3C3C',
                    }}
                  />
                  {t('registerForm.confirmPassword')}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                type={showPassword ? 'text' : 'password'}
                placeholder={t('registerForm.confirmPasswordPlaceholder')}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '48%' },
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column', // Alineamos en columna
              alignItems: 'flex-start',
              gap: '18px',
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <Typography>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: errors.lastName ? 'red' : '#3C3C3C',
                  }}
                >
                  <PersonOutlineIcon
                    sx={{ color: errors.lastName ? 'red' : '#3C3C3C' }}
                  />
                  {t('registerForm.your_last_Name')}
                </Box>
              </Typography>
              <OutlinedInput
                placeholder={t('registerForm.yourNamePlaceholder')}
                sx={{
                  mt: 1,
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>

            <Typography>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: errors.dateOfBirth ? 'red' : '#3C3C3C',
                }}
              >
                <CalendarMonthIcon
                  sx={{ color: errors.dateOfBirth ? 'red' : '#3C3C3C' }}
                />
                {t('registerForm.dateOfBirth')}
              </Box>
            </Typography>

            <Box sx={{ width: '100%' }}>
              <TextField
                type='date'
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: ' 0px 3px 3px rgba(0, 0, 0, 0.4)',
                  },
                }}
                sx={{
                  width: '60%',
                  mt: -1.1,
                  marginBottom: '44px',
                }}
              />
            </Box>
            <Box
              gap={6}
              display='flex'
              flexDirection='column'
              alignItems='start'
            >
              {/* Primer Box para las opciones Biológicas */}
              <Box display='flex' justifyContent='space-around' gap={5}>
                <FormControl component='fieldset'>
                  <Typography>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#3C3C3C',
                      }}
                    >
                      <AccessibilityNewIcon sx={{ color: '#3C3C3C' }} />
                      {t('registerForm.optionsListBiologicalSex')}
                    </Box>
                  </Typography>
                  <FormLabel component='legend'></FormLabel>
                  <RadioGroup
                    value={date1}
                    onChange={handleChange1}
                    aria-label='options'
                    name='radio-buttons-group1'
                    row
                    sx={{ gap: '30px' }}
                  >
                    <FormControlLabel
                      value='option1'
                      control={
                        <Radio
                          sx={{
                            color: date1 === 'option1' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.sexoOption1')}
                    />
                    <FormControlLabel
                      value='option2'
                      control={
                        <Radio
                          sx={{
                            color: date1 === 'option2' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.sexoOption2')}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* Segundo Box para las opciones de Género */}
              <Box display='flex' justifyContent='space-around' gap={5}>
                <FormControl component='fieldset'>
                  <Typography>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#3C3C3C',
                      }}
                    >
                      <TransgenderIcon sx={{ color: '#3C3C3C' }} />
                      {t('registerForm.optionsListGender')}
                    </Box>
                  </Typography>

                  <FormLabel component='legend'></FormLabel>
                  <RadioGroup
                    value={date2}
                    onChange={handleChange2}
                    aria-label='options'
                    name='radio-buttons-group2'
                    row
                    sx={{ gap: '30px' }}
                  >
                    <FormControlLabel
                      value='option1'
                      control={
                        <Radio
                          sx={{
                            color: date2 === 'option1' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.male')}
                    />
                    <FormControlLabel
                      value='option2'
                      control={
                        <Radio
                          sx={{
                            color: date2 === 'option2' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.female')}
                    />
                    <FormControlLabel
                      value='option3'
                      control={
                        <Radio
                          sx={{
                            color: date2 === 'option3' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.nobinary')}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* Tercer Box para las opciones  */}
              <Box display='flex' justifyContent='space-around' gap={5}>
                <FormControl component='fieldset'>
                  <Typography>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#3C3C3C',
                      }}
                    >
                      <MoreHorizIcon sx={{ color: '#3C3C3C' }} />
                      {t('registerForm.optionsList')}
                    </Box>
                  </Typography>
                  <FormLabel component='legend'></FormLabel>
                  <RadioGroup
                    value={date3}
                    onChange={handleChange3}
                    aria-label='options'
                    name='radio-buttons-group3'
                    row
                    sx={{ gap: '30px' }} // Ajusta el espacio entre botones
                  >
                    <FormControlLabel
                      value='option1'
                      control={
                        <Radio
                          sx={{
                            color: date3 === 'option1' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.mr')}
                    />
                    <FormControlLabel
                      value='option2'
                      control={
                        <Radio
                          sx={{
                            color: date3 === 'option2' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.mrs')}
                    />
                    <FormControlLabel
                      value='option3'
                      control={
                        <Radio
                          sx={{
                            color: date3 === 'option3' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.miss')}
                    />
                    <FormControlLabel
                      value='option4'
                      control={
                        <Radio
                          sx={{
                            color: date2 === 'option4' ? '#FBFFDD' : 'default',
                            '&.Mui-checked': {
                              color: '#FBFFDD',
                            },
                          }}
                        />
                      }
                      label={t('registerForm.ms')}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: '1px', // Ajusta la altura según lo necesites
            width: '98%',
            backgroundColor: ' #A5AB94',
          }}
        />
      </Box>
    </Box>
  );
});
