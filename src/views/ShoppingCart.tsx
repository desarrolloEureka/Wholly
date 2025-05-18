import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { CheckoutSummary } from "../components/shoppingCartForm/CheckoutSummary";
import { CheckoutForm } from "../components/shoppingCartForm/CheckoutForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ShoppingCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CustomAppBar />

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "3%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box sx={{ padding: { xs: "30px", sm: "0px" } }}>
          <Box
            sx={{
              padding: "20px",
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              width: "100%",
              height: "95px",
              margin: "0 auto",
            }}
          >
            <Typography sx={{ fontWeight: 500, color: "#3C3C3C" }}>
              {t("shoppingCart.AlreadyAccount")}
              <span
                onClick={() => navigate("/login")}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                {t("shoppingCart.Login")}
              </span>
              {t("shoppingCart.forCheckout")}
            </Typography>
          </Box>
        </Box>
        {/* CheckoutSummary primero en móviles */}
        <Box
          flex={1}
          sx={{
            backgroundColor: "#E8E4DE",
            pb: 4,
            padding: "1px 1px",
            width: { xs: "100%", sm: "100%", md: "50%" },
            order: { xs: 0, sm: 0, md: 1 }, // Primero en móvil, segundo en pantallas grandes
          }}
        >
          <CheckoutSummary />
        </Box>

        <Box
          flex={1}
          sx={{
            pb: 4,
            order: { xs: 1, sm: 1, md: 0 },
          }}
        >
          <CheckoutForm />
        </Box>
      </Box>

      <FooterApp />
    </Box>
  );
};
