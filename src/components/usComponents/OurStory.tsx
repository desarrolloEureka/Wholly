import { Box, IconButton, Typography } from "@mui/material";
import { logo_app, sunBlock } from "../../assets/images";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LinkedIn,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const OurStory = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: 8,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "190px",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center", px: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {t("Us.ourStory")}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", color: "gray", mb: 1 }}
          >
            {t("Us.About")}
          </Typography>
          <img
            src={logo_app}
            alt="logo"
            width="42%"
            style={{ marginBottom: 20 }}
          />
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 400, mx: "auto", mb: 7 }}
          >
            {t("Us.Lorem")}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {[Facebook, Instagram, Pinterest, Twitter, LinkedIn].map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                    p: 1.2,
                  }}
                >
                  <Icon sx={{ color: "#7e826e", fontSize: 24 }} />
                </IconButton>
              )
            )}
          </Box>
        </Box>

        {/* Imagen con fondo */}

        <Box
          component="img"
          src={sunBlock}
          alt="Sun Block Box"
          sx={{
            maxWidth: 500,
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
