import { Box, Typography } from "@mui/material";

import { blog_1, blog_2, blog_3 } from "../../assets/images";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 4, py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {t("Us.loremstats")}
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", maxWidth: 600 }}>
          {t("Us.loremstats2")}
        </Typography>
      </Box>

      {/* Imágenes */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 6 }}>
        {[blog_3, blog_1, blog_2].map((img, i, arr) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`img-${i}`}
            sx={{
              width: { xs: "100%", sm: 460 },
              objectFit: "cover",
              height: 410,
              ...(i === arr.length - 1 && {
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }),
            }}
          />
        ))}
      </Box>

      {/* Métricas */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 36,
          maxWidth: 800,
          mx: "auto",
          my: 6,
          pl: 6,
        }}
      >
        {[
          { number: "2K+", label: t("Us.users") },
          { number: "20+", label: t("Us.supplements") },
          { number: "300+", label: t("Us.references") },
        ].map((stat, i) => (
          <Box key={i} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ color: "#6D7D7D" }}>
              {stat.number}
            </Typography>
            <Typography
              variant="h6"
              sx={{ letterSpacing: 2, color: "#000000" }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsSection;
