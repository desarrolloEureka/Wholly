import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  MobileStepper,
  Typography,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { StepOne } from './components/StepOne';
import { OptionsButtons } from '../../globals/types';
import { ContentStepper } from './components/contentStepper/ContentStepper';
import { ContentStepperSpecial } from './components/contentStepperSpecial/ContentStepperSpecial';
import { InteractiveText } from '../../globals/elements';

const RegisterForm = () => {
  const stepOneRef = useRef<{ validateForm: () => boolean }>(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const options2: OptionsButtons[] = [
    { id: 1, name: 'Oily hair' },
    { id: 2, name: 'Dry hair' },
    { id: 3, name: 'Thin hair' },
    { id: 4, name: 'Hair loss' },
    { id: 5, name: 'A lot of hair' },
    { id: 6, name: 'Lorem Impsum Hair' },
    { id: 7, name: 'Lorem Impsum Hair' },
    { id: 8, name: 'Lorem Impsum Hair' },
    { id: 9, name: 'Lorem Impsum Hair' },
    { id: 10, name: 'Lorem Impsum Hair' },
    { id: 11, name: 'Lorem Impsum Hair' },
    { id: 12, name: 'Lorem Impsum Hair' },
    { id: 13, name: 'Lorem Impsum Hair' },
    { id: 14, name: 'Lorem Impsum Hair' },
    { id: 15, name: 'Lorem Impsum Hair' },
    { id: 16, name: 'Lorem Impsum Hair' },
  ];

  const options3: OptionsButtons[] = [
    {
      id: 1,
      name: 'Walnuts  ',
    },
    {
      id: 2,
      name: 'Brazil nuts',
    },
  ];

  const options4: OptionsButtons[] = [
    {
      id: 1,
      name: 'Sertraline',
    },
  ];

  const options5: OptionsButtons[] = [
    {
      id: 1,
      name: 'Epilepsy',
    },
  ];
  // Definimos los pasos correctamente
  const steps = [
    {
      label: 'Select campaign settings',
      description: <StepOne ref={stepOneRef} />,
    },
    {
      label: '2',
      description: <ContentStepperSpecial />,
    },
    {
      label: '3',
      description: (
        <ContentStepper
          title1='select the '
          title2='conditions '
          title3='you have'
          ButtonsOptions={options2}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
    {
      label: '4',
      description: (
        <ContentStepper
          title1='select the '
          title2='allergies '
          title3='you have'
          ButtonsOptions={options3}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
    {
      label: '5',
      description: (
        <ContentStepper
          title1='select the '
          title2='medicines '
          title3='you have'
          ButtonsOptions={options4}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
    {
      label: '6',
      description: (
        <ContentStepper
          title1='select the '
          title2='diseases '
          title3='you have'
          ButtonsOptions={options5}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    if (stepOneRef.current && !stepOneRef.current.validateForm()) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        margin: '0 auto',
        padding: '30px',
        background:
          'linear-gradient(to left,rgba(238, 244, 252, 0.97), #EEF1F02B)', // Gradiente de azul claro a transparente
        borderRadius: '20px',
        backdropFilter: 'blur(4px)', // Efecto de desenfoque
        boxShadow: ' 0px 5px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box sx={{ textAlign: 'end', mt: 1, paddingRight: 2 }}>
        <InteractiveText
          // onClick={() => navigate("/remember")}
          style={{
            textDecoration: 'underline',
            fontFamily: 'sans-serif',
            fontSize: '0.845rem',
            cursor: 'pointer',
          }}
        >
          {t('registerForm.later')}
        </InteractiveText>
      </Box>
      <Box sx={{ width: '100%', minHeight: 400, p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{
          backgroundColor: 'transparent',
        }}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <Typography>{t('stepper.nextButton')}</Typography>

            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <Typography>{t('stepper.backButton')}</Typography>
          </Button>
        }
      />
    </Box>
  );
};

export default RegisterForm;
