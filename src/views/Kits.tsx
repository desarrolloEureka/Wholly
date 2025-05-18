import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { HomeCategories } from "../components/homeForm/components/homeCategories/HomeCategories";
import { HomeExclusive } from "../components/homeForm/components/homeExclusive/HomeExclusive";
import { useTranslation } from "react-i18next";
import { Sectionkits } from "../components/kits/Sectionkits";

export const Kits = () => {
  const { t } = useTranslation();

  return (
    <Box justifyContent="space-between">
      <Box className="bg_Kits_image">
        <CustomAppBar />
        <Typography
          variant="h2"
          sx={{
            textAlign: "start",
            width: "50%",
            mt: "9%",
            marginLeft: "50px",
            fontSize: { xs: "1.9rem", md: "2.1rem" },
            fontWeight: 100,
            color: "#Ffff",
          }}
        >
          {t("Kits.title")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: { xs: "10px", md: "90px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: "5%",
            marginBottom: "3%",
            fontWeight: "bold",
            color: "#3C3C3C",
            fontSize: { xs: "1.9rem", md: "2.1rem" },
          }}
        >
          {t("Kits.completeKits")}
        </Typography>
      </Box>
      <Sectionkits />

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
        }}
      >
        <HomeExclusive />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: " rgba(28, 28, 28, 0.7)",
            height: "2px",
            width: "90%",
            margin: "auto",
            marginTop: "6%",
            marginBottom: "8%",
          }}
        ></Box>

        <Typography
          variant="h3"
          sx={{
            marginBottom: "6%",
            fontWeight: "bold",
            ml: "60px",
            color: "#3C3C3C",
            fontSize: { xs: "1.9rem", md: "2.1rem" },
          }}
        >
          {t("categoriesIternal.YouLike")}
        </Typography>
        <HomeCategories />
      </Box>

      <FooterApp />
    </Box>
  );
};
