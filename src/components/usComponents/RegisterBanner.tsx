import { Box, Typography, Button } from "@mui/material";
import { SmallFace } from "../../assets/images";
import { useTranslation } from "react-i18next";

const RegisterBanner = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ede9e3",
        borderRadius: "50px 50px 0 50px",
        overflow: "hidden",
        width: "98%",
        height: 318,
        margin: "0 auto",
      }}
    >
      {/* Imagen */}

      <Box
        component="img"
        src={SmallFace}
        alt="register"
        sx={{
          width: 500,
          height: "100%",
          objectFit: "cover",
          borderRadius: "0 100% 100% 0",
        }}
      />

      {/* Contenido de texto */}
      <Box sx={{ textAlign: "start", flex: 1, ml: "7%" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "#333",
            mb: 3,
            width: "60%",
          }}
        >
          {t("Us.RegisterDescription")}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#7e826e",
            color: "#000",
            borderRadius: "999px",
            px: 5,
            py: 1,
            letterSpacing: 2,
            fontSize: 12,
            width: "30%",
          }}
        >
          {t("Us.Register")}
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterBanner;
