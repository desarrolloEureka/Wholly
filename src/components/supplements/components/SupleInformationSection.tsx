import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const SupleInformationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "60%", md: "100%" },
        display: "flex",
        justifyContent: "center",
        margin: { xs: "0 auto", sm: "0 auto", md: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "10px",
          width: isMobile || isTablet ? "100%" : "480px",
          height: isMobile || isTablet ? "auto" : "280px",
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.35)",
          marginTop: isMobile || isTablet ? "0" : "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "335px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* Reference Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                color: "#3C3C3C",
              }}
            >
              {t("supplementsForm.Reference")}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#EEF1F0",
                borderRadius: "8px",
                padding: "5px 12px",
                minWidth: "80px",
                textAlign: "center",
                fontSize: { xs: "0.85rem", sm: "1.0rem" },
                color: "#3C3C3C",
                fontWeight: 400,
              }}
            >
              0.7 oz/20 ml
            </Typography>
          </Box>

          {/* Recommended Application Time Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 500,
                width: "50%",
                textAlign: "left",
                color: "#3C3C3C",
              }}
            >
              {t("supplementsForm.RecommendedTime")}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#EEF1F0",
                borderRadius: "8px",
                padding: "5px 26px",
                minWidth: "80px",
                textAlign: "center",
                fontSize: { xs: "0.85rem", sm: "1.0rem" },
                color: "#3C3C3C",
                fontWeight: 400,
              }}
            >
              {t("supplementsForm.months")}
            </Typography>
          </Box>
        </Box>

        {/* Compatibility Message */}
        <Box
          sx={{
            backgroundColor: "#A5AB94",
            width: { xs: "98%", sm: "76%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: "2px",
            marginTop: { xs: "20px", sm: "30px" },
          }}
        >
          <Typography
            sx={{
              width: { xs: "83%", sm: "80%" },
              backgroundColor: "#ffff",
              marginLeft: { xs: "51px", sm: "71px" },
              color: "#3C3C3C",
              fontSize: { xs: "0.85rem", sm: "1rem" },
            }}
          >
            {t("supplementsForm.productCompatible")}
          </Typography>
        </Box>

        {/* Botón */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#a5ab94",
              borderRadius: 1,
              boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
              paddingX: 4,
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "0.85rem", sm: "1rem" },
              height: "35px",
              mt: { xs: "10px", sm: "10px" },
              mr: { xs: "auto", sm: "50px" },
              ml: { xs: "auto", sm: "0" },
              width: "105px",
            }}
          >
            {t("supplementsForm.Register")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
