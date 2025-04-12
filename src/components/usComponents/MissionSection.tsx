import { Box, Typography } from "@mui/material";
import { SmallFace } from "../../assets/images";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Texto */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              color: "#333",
              mb: 2,
            }}
          >
            wholly
            <span>{t("Us.mission")}</span>
          </Typography>
          <Typography
            sx={{
              color: "#444",
              textAlign: "justify",
              width: "85%",
              fontSize: 20,
            }}
          >
            {t("Us.lorem3")}
          </Typography>
        </Box>

        {/* Imagen */}

        <Box
          component="img"
          src={SmallFace}
          alt="Mission"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: "400px",
            width: "700px",
            objectFit: "contain",
            borderRadius: "50px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MissionSection;
