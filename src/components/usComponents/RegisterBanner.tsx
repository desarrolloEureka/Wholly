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
        borderRadius: { xs: "20px 20px 0 20px", md: "50px 50px 0 50px" },
        overflow: "hidden",
        width: "98%",
        height: { xs: 100, sm: 200, lg: 318 },
        margin: "0 auto",
      }}
    >
      {/* Imagen */}

      <Box
        component="img"
        src={SmallFace}
        alt="register"
        sx={{
          width: { xs: "100px", sm: "200px", lg: 500 },
          height: { xs: "100px", sm: "200px", lg: "100%" },
          objectFit: "cover",
          borderRadius: "0 100% 100% 0",
        }}
      />

      {/* Contenido de texto */}
      <Box sx={{ textAlign: "start", flex: 1, ml: "7%" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 11, sm: 20, md: 24 },
            color: "#333",
            mb: { xs: 1, sm: 3 },
            width: { xs: "70%", sm: "60%" },
            lineHeight: 2,
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
            py: { xs: "4px", sm: "8px" },
            letterSpacing: 2,
            fontSize: { xs: 6, sm: 11, md: 12 },
            width: { xs: "40%", sm: "30%" },
          }}
        >
          {t("Us.Register")}
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterBanner;
