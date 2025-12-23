import { Box, Button, MobileStepper, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { StepOne } from "./components/StepOne";
import { ContentStepper } from "./components/contentStepper/ContentStepper";
import { ContentStepperSpecial } from "./components/contentStepperSpecial/ContentStepperSpecial";
import { InteractiveText } from "../../globals/elements";
import RegisterFormHook from "./hooks/RegisterFormHook";

const RegisterForm = () => {
  const {
    t,
    navigate,
    name,
    setName,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    password,
    showPassword,
    confirmPassword,
    date1,
    date2,
    date3,
    errors,
    generalError,
    handleClickShowPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleChange1,
    handleChange2,
    handleChange3,
    theme,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    idUser,
    //Paso2
    searchTerm,
    setSearchTerm,
    errorMessage,
    setErrorMessage,
    errorMessageNoSelected,
    setErrorMessageNoSelected,
    isError,
    setIsError,
    options,
    setOptions,
    conditions,
    selectedTendencies,
    setSelectedTendencies,
    customTendency,
    setCustomTendency,
    getDataTendency,
    handleAddCustomTendency,
    toggleTendencySelection,
    selectedConditions,
    toggleConditionSelection,
    allergies,
    selectedAllergies,
    toggleAllergySelection,
    medicines,
    selectedMedicines,
    toggleMedicineSelection,
    diseases,
    selectedDiseases,
    toggleDiseaseSelection,
  } = RegisterFormHook();

  const steps = [
    {
      label: t("registerForm.campaignSettings"),
      description: (
        <StepOne
          t={t}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          confirmEmail={confirmEmail}
          setConfirmEmail={setConfirmEmail}
          lastName={lastName}
          setLastName={setLastName}
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          password={password}
          showPassword={showPassword}
          confirmPassword={confirmPassword}
          date1={date1}
          date2={date2}
          date3={date3}
          errors={errors}
          generalError={generalError}
          handleClickShowPassword={handleClickShowPassword}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          handleChange1={handleChange1}
          handleChange2={handleChange2}
          handleChange3={handleChange3}
        />
      ),
    },
    {
      label: "2",
      description: (
        <ContentStepperSpecial
          idUser={idUser}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          errorMessageNoSelected={errorMessageNoSelected}
          setErrorMessageNoSelected={setErrorMessageNoSelected}
          isError={isError}
          setIsError={setIsError}
          options={options}
          setOptions={setOptions}
          selectedTendencies={selectedTendencies}
          setSelectedTendencies={setSelectedTendencies}
          customTendency={customTendency}
          setCustomTendency={setCustomTendency}
          getDataTendency={getDataTendency}
          handleAddCustomTendency={handleAddCustomTendency}
          toggleTendencySelection={toggleTendencySelection}
          errorMessageText={t("registerForm.ErrorMessageTendencies")}
        />
      ),
    },
    {
      label: "3",
      description: (
        <ContentStepper
          title1={t("registerForm.selectThe")}
          title2={t("registerForm.conditions")}
          title3={t("registerForm.youHave")}
          placeholder="Hair...."
          ButtonsOptions={conditions}
          description={t("registerForm.enterDescription")}
          toggleConditionSelection={toggleConditionSelection}
          selectedOptions={selectedConditions}
          errorMessageNoSelected={errorMessageNoSelected}
          errorMessageText={t("registerForm.ErrorMessageConditions")}
        />
      ),
    },
    {
      label: "4",
      description: (
        <ContentStepper
          step="4"
          title1={t("registerForm.selectThe")}
          title2={t("registerForm.allergies")}
          title3={t("registerForm.youHave")}
          placeholder="Nuts..."
          ButtonsOptions={allergies}
          description={t("registerForm.enterDescription")}
          toggleConditionSelection={toggleAllergySelection}
          selectedOptions={selectedAllergies}
          errorMessageNoSelected={errorMessageNoSelected}
          errorMessageText={t("registerForm.ErrorMessageAllergies")}
        />
      ),
    },
    {
      label: "5",
      description: (
        <ContentStepper
          title1={t("registerForm.selectThe")}
          title2={t("registerForm.medicines")}
          title3={t("registerForm.youHave")}
          placeholder="Sertraline..."
          ButtonsOptions={medicines}
          description={t("registerForm.enterDescription")}
          toggleConditionSelection={toggleMedicineSelection}
          selectedOptions={selectedMedicines}
          errorMessageNoSelected={errorMessageNoSelected}
          errorMessageText={t("registerForm.ErrorMessageMedicines")}
        />
      ),
    },
    {
      label: "6",
      description: (
        <ContentStepper
          title1={t("registerForm.selectThe")}
          title2={t("registerForm.diseases")}
          title3={t("registerForm.youHave")}
          placeholder="Epilepsy...."
          ButtonsOptions={diseases}
          description={t("registerForm.enterDescription")}
          toggleConditionSelection={toggleDiseaseSelection}
          selectedOptions={selectedDiseases}
          errorMessageNoSelected={errorMessageNoSelected}
          errorMessageText={t("registerForm.ErrorMessageDiseases")}
        />
      ),
    },
  ];

  const maxSteps = steps.length;

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "0 auto",
        padding: "30px",
        background:
          "linear-gradient(to left,rgba(238, 244, 252, 0.97), #EEF1F02B)", // Gradiente de azul claro a transparente
        borderRadius: "20px",
        backdropFilter: "blur(4px)", // Efecto de desenfoque
        boxShadow: " 0px 5px 16px rgba(0, 0, 0, 0.4)",
      }}
    >
      {activeStep !== 0 && activeStep !== 5 && (
        <Box sx={{ textAlign: "end", mt: 1, paddingRight: 2 }}>
          <InteractiveText
            onClick={() =>
              setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
            style={{
              textDecoration: "underline",
              fontFamily: "sans-serif",
              fontSize: "0.845rem",
              cursor: "pointer",
            }}
          >
            {t("registerForm.later")}
          </InteractiveText>
        </Box>
      )}
      <Box sx={{ width: "100%", minHeight: 400, p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: "transparent",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            //disabled={activeStep === maxSteps - 1}
          >
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {activeStep === 5
                ? t("stepper.finishButton")
                : t("stepper.nextButton")}
            </Typography>

            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {t("stepper.backButton")}
            </Typography>
          </Button>
        }
      />
    </Box>
  );
};

export default RegisterForm;
