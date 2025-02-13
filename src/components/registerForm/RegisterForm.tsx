import { useTranslation } from 'react-i18next';
import { useState } from 'react';
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
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const options2: OptionsButtons[] = [
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
    {
      id: 4,
      name: 'name button',
    },
    {
      id: 5,
      name: 'name button',
    },
    {
      id: 6,
      name: 'name button',
    },
    {
      id: 7,
      name: 'name button',
    },
    {
      id: 8,
      name: 'name button',
    },
    {
      id: 9,
      name: 'name button',
    },
    {
      id: 10,
      name: 'name button',
    },
    {
      id: 11,
      name: 'name button',
    },
    {
      id: 12,
      name: 'name button',
    },
    {
      id: 13,
      name: 'name button',
    },
    {
      id: 14,
      name: 'name button',
    },
    {
      id: 15,
      name: 'name button',
    },
    {
      id: 16,
      name: 'name button',
    },
  ];

  const options3: OptionsButtons[] = [
    {
      id: 1,
      name: 'name button',
    },
    {
      id: 2,
      name: 'name button',
    },
  ];

  const options4: OptionsButtons[] = [
    {
      id: 1,
      name: 'name button',
    },
  ];

  const options5: OptionsButtons[] = [
    {
      id: 1,
      name: 'name button',
    },
  ];
  // Definimos los pasos correctamente
  const steps = [
    {
      label: 'Select campaign settings',
      description: <StepOne />,
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
          title1='select the allergies you have'
          ButtonsOptions={options3}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
    {
      label: '5',
      description: (
        <ContentStepper
          title1='select the medicines you have'
          ButtonsOptions={options4}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
    {
      label: '6',
      description: (
        <ContentStepper
          title1='select the diseases you have'
          ButtonsOptions={options5}
          description='Enter the name of what you are looking for as many times as you need and add them one by one.'
        />
      ),
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
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
