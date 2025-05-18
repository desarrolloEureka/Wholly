import { Box, Typography } from "@mui/material";
import { SmallFace } from "../../assets/images";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 3, sm: 6 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Texto */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 25, sm: 26, md: 36 },
              fontWeight: 500,
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
              width: { xs: "100%", sm: "100%" },
              fontSize: { xs: 14, sm: 15, md: 20 },
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
            maxWidth: { xs: "100%", sm: "55%", md: "55%", lg: "100%" },
            maxHeight: { xs: "200px", sm: "230px", md: "100%" },
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
