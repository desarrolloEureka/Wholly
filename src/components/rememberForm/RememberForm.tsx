import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Email } from "./components/email/Email";
import { useState } from "react";
import { Code } from "./components/code/Code";
import { useNavigate } from "react-router-dom";
import { Passwords } from "./components/passwords/Passwords";

export const RememberForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [code, setCode] = useState<string | null>(null);

  const stepper = () => {
    switch (step) {
      case 1:
        return <Code setCode={setCode} />;
      case 2:
        return <Passwords />;
      default:
        return <Email />;
    }
  };

  const handleContinue = () => {
    if (step === 0) {
      const validEmail = true;
      if (validEmail) {
        setStep(1);
      } else {
        console.log("entro al else");
      }
    } else if (step === 1) {
      if (!code) {
        setStep(2);
      } else {
        console.log("codigo invalido");
      }
    } else {
      navigate("/login");
      console.log("validar contrasenas");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          xs: 2, // móviles
          sm: 3, // tablets pequeñas
          md: 5, // pantallas medianas en adelante
        },
        backgroundColor: "background.paper",
        borderRadius: 4,
        boxShadow: 8,
        width: {
          xs: "90%", // móviles
          sm: "70%", // tablets
          md: "45%", // pantallas grandes
        },
        margin: "60px auto 45px",
      }}
    >
      <Box
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "1.7rem",
            md: "1.88rem",
          },
          color: "#A5AB94",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {t("loginForm.Recover_password")}
      </Box>

      <Box
        sx={{
          height: "1px",
          width: "105%",
          backgroundColor: "#A5AB94",
          marginTop: "14px",
        }}
      />

      {stepper()}

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#A5AB94",
          borderRadius: "25px",
          padding: "10px 20px",
          marginTop: "18px",
          textTransform: "none",
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
          },
          "&:hover": {
            backgroundColor: "rgb(87, 90, 77)",
          },
        }}
        disableElevation
        onClick={handleContinue}
      >
        {step === 0
          ? t("loginForm.button_step_one")
          : step === 1
          ? t("loginForm.button_step_two")
          : t("loginForm.button_step_three")}
      </Button>
    </Box>
  );
};
