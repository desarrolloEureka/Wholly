import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import MissionSection from "../components/usComponents/MissionSection";
import { OurStory } from "../components/usComponents/OurStory";
import RegisterBanner from "../components/usComponents/RegisterBanner";
import StatsSection from "../components/usComponents/StatsSection";
import { useTranslation } from "react-i18next";

export const Us = () => {
  const { t } = useTranslation();

  return (
    <Box justifyContent="space-between">
      <Box className="bg_us">
        <CustomAppBar />
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="flex-start"
          alignItems="flex-end"
          pb={2}
        >
          <Typography
            variant="h3"
            borderBottom="1px solid #3C3C3C"
            sx={{
              padding: "15px",
              width: "30%",
              color: "#3C3C3C",
              fontSize: "30px",
              marginLeft: "30px",
              marginBottom: "20px",
              marginTop: "24%",
            }}
          >
            {t("Us.welcome")}
          </Typography>
        </Box>
      </Box>
      <OurStory />
      <RegisterBanner />
      <StatsSection />

      <MissionSection />

      <FooterApp />
    </Box>
  );
};
