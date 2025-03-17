import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { Homevariety } from "../components/homeForm/components/homeVariety/HomeVariety";
import { SupplementsIngredients } from "../components/supplements/components/SupplementsIngredients";
import { SupplementsSblock } from "../components/supplements/components/SupplementsSblock";
import { SupplementSession } from "../components/supplements/components/SupplementSsession";

export const Supplements = () => {
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      <SupplementSession />

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
            fontSize: "2.1rem",
          }}
        >
          {t("You may also like")}
        </Typography>
      </Box>
      <Homevariety />

      <FooterApp />
    </Box>
  );
};
