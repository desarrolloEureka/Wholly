import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import { InteractiveText } from "../../../globals/elements";
import { ContentStepper } from "../../registerForm/components/contentStepper/ContentStepper";
import { ContentStepperSpecial } from "../../registerForm/components/contentStepperSpecial/ContentStepperSpecial";
import { EditStepOne } from "./components/EditStepOne";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import EditProfileHook from "../../registerForm/hooks/EditProfileHook";

const EditProfileForm = () => {
  const stepOneRef = useRef<{ validateForm: () => boolean }>(null);
  const {
    t,
    theme,
    activeStep,
    handleNext,
    handleBack,
    idUser,

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
  } = EditProfileHook();

  const steps = [
    {
      label: t("registerForm.campaignSettings"),
      description: <EditStepOne ref={stepOneRef} />,
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
      <Box sx={{ textAlign: "end", mt: 1, paddingRight: 2 }}>
        <InteractiveText
          // onClick={() => navigate("/remember")}
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

      <Box
        sx={{
          width: "100%",
          minHeight: 400,
          p: 2,
          position: "relative",
        }}
      >
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
          <Button size="small" onClick={handleNext}>
            <Typography>
              {activeStep === maxSteps - 1
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
            <Typography>{t("stepper.backButton")}</Typography>
          </Button>
        }
      />
    </Box>
  );
};

export default EditProfileForm;
