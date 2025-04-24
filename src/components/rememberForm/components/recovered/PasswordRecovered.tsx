import { Box, Typography } from "@mui/material";
import { t } from "i18next";

export const PasswordRecovered = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "80%", // móviles
          sm: "100%", // tablets
          md: "100%", // pantallas grandes
        },
      }}
    >
      <Typography
        style={{
          fontSize: "0.880rem",
          textAlign: "center",
          marginTop: "28px",
          marginBottom: "18px",
        }}
      >
        {t("loginForm.passwordRecovery")}
      </Typography>
    </Box>
  );
};
