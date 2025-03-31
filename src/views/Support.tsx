import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { CustomerService } from "../components/supportForm/CustomerService";
import { useTranslation } from "react-i18next";

export const Support = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" minHeight="90vh">
      {/* Contenedor del AppBar y contenido */}
      <Box
        className="bg_support"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <CustomAppBar />

        <Box
          display="flex"
          flexGrow={1}
          justifyContent="flex-start"
          alignItems="flex-end"
          pb={2}
        >
          <Typography
            variant="h6"
            borderBottom="1px solid #3C3C3C"
            sx={{
              padding: "15px",
              width: "30%",
              color: "#3C3C3C",
              fontSize: "30px",
              marginLeft: "30px",
              marginBottom: "20px",
            }}
          >
            {t("Support.Support")}
          </Typography>
        </Box>
      </Box>
      <CustomerService />
      <FooterApp />
    </Box>
  );
};
