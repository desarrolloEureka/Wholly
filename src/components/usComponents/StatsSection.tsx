import { Box, Typography } from "@mui/material";

import { blog_1, blog_2, blog_3 } from "../../assets/images";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 3, sm: 8 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 500, mb: 2, fontSize: { xs: 15, sm: 26 } }}
        >
          {t("Us.loremstats")}
        </Typography>
        <Typography
          sx={{ color: "#444", maxWidth: 600, fontSize: { xs: 11, sm: 20 } }}
        >
          {t("Us.loremstats2")}
        </Typography>
      </Box>

      {/* Imágenes */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "5px", sm: "16px" },
          flexWrap: "wrap",
          mb: 6,
        }}
      >
        {[blog_3, blog_1, blog_2].map((img, i, arr) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`img-${i}`}
            sx={{
              width: { xs: "32%", sm: "31%", md: "32%", lg: 460 },
              objectFit: "cover",
              height: { xs: 120, sm: 242, md: 310, lg: 410 },
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
          gap: { xs: "32px", sm: 12, md: 18, lg: 36 },
          maxWidth: 800,
          mx: "auto",
          my: 6,
          pl: { xs: "7px", sm: 0, md: 4, lg: 2 },
        }}
      >
        {[
          { number: "2K+", label: t("Us.users") },
          { number: "20+", label: t("Us.supplements") },
          { number: "300+", label: t("Us.references") },
        ].map((stat, i) => (
          <Box key={i} sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#6D7D7D",
                fontSize: { xs: 20, sm: 36, md: 39, lg: 60 },
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: 2,
                color: "#000000",
                fontSize: { xs: 13, sm: 20, md: 26, lg: 30 },
              }}
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
