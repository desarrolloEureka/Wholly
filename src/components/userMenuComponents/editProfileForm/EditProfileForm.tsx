import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import { InteractiveText } from '../../../globals/elements';
import { ContentStepper } from '../../registerForm/components/contentStepper/ContentStepper';
import { ContentStepperSpecial } from '../../registerForm/components/contentStepperSpecial/ContentStepperSpecial';
import { EditStepOne } from './components/EditStepOne';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import useTheme from '@mui/material/styles/useTheme';

const EditProfileForm = () => {
  const stepOneRef = useRef<{ validateForm: () => boolean }>(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const options2: any[] = [
    { id: 1, name: t('registerForm.options.oilyHair') },
    { id: 2, name: t('registerForm.options.dryHair') },
    { id: 3, name: t('registerForm.options.thinHair') },
    { id: 4, name: t('registerForm.options.hairLoss') },
    { id: 5, name: t('registerForm.options.aLotOfHair') },
    { id: 6, name: t('registerForm.options.LoremIHair') },
    { id: 7, name: t('registerForm.options.LoremIHair') },
    { id: 8, name: t('registerForm.options.LoremIHair') },
    { id: 9, name: t('registerForm.options.LoremIHair') },
    { id: 10, name: t('registerForm.options.LoremIHair') },
    { id: 11, name: t('registerForm.options.LoremIHair') },
    { id: 12, name: t('registerForm.options.LoremIHair') },
    { id: 13, name: t('registerForm.options.LoremIHair') },
    { id: 14, name: t('registerForm.options.LoremIHair') },
    { id: 15, name: t('registerForm.options.LoremIHair') },
    { id: 16, name: t('registerForm.options.LoremIHair') },
  ];

  const options3: any[] = [
    { id: 1, name: t('registerForm.options.walnuts') },
    { id: 2, name: t('registerForm.options.brazilNuts') },
  ];

  const options4: any[] = [
    { id: 1, name: t('registerForm.options.sertraline') },
  ];

  const options5: any[] = [
    { id: 1, name: t('registerForm.options.epilepsy') },
  ];

  const steps = [
    {
      label: t('registerForm.campaignSettings'),
      description: <EditStepOne ref={stepOneRef} />,
    },
    {
      label: '2',
      description: <ContentStepperSpecial />,
    },
    {
      label: '3',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.conditions')}
          title3={t('registerForm.youHave')}
          placeholder='Hair....'
          ButtonsOptions={options2}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '4',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.allergies')}
          title3={t('registerForm.youHave')}
          placeholder='Nuts...'
          ButtonsOptions={options3}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '5',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.medicines')}
          title3={t('registerForm.youHave')}
          placeholder='Sertraline...'
          ButtonsOptions={options4}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '6',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.diseases')}
          title3={t('registerForm.youHave')}
          placeholder='Epilepsy....'
          ButtonsOptions={options5}
          description={t('registerForm.enterDescription')}
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

      <Box
        sx={{
          width: '100%',
          minHeight: 400,
          p: 2,
          position: 'relative',
        }}
      >
       
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

export default EditProfileForm;
