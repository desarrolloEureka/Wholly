import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { Homevariety } from "../components/homeForm/components/homeVariety/HomeVariety";
import { KitsSession } from "../components/kits/kitsSession/KitsSession";
import { SupplementsIngredients } from "../components/supplements/components/SupplementsIngredients";
import { SupplementsSblock } from "../components/supplements/components/SupplementsSblock";

export const InternalKits = () => {
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      <KitsSession />

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
        }}
      >
        <SupplementsSblock />
      </Box>
      <SupplementsIngredients />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: "5%",
            marginBottom: "3%",
            fontWeight: "bold",
            color: "#3C3C3C",
            fontSize: { xs: "1.5rem", sm: "2.1rem" },
          }}
        >
          {t("supplementsForm.YouLike")}
        </Typography>
      </Box>
      <Homevariety />

      <FooterApp />
    </Box>
  );
};
