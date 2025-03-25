import { Box } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { CheckoutSummary } from "../components/shoppingCartForm/components/checkoutSummary/CheckoutSummary";
import { CheckoutForm } from "../components/shoppingCartForm/components/checkout/CheckoutForm";

export const ShoppingCart = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CustomAppBar />

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "3%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box flex={1} sx={{ pb: 4 }}>
          <CheckoutForm />
        </Box>

        <Box
          flex={1}
          sx={{
            backgroundColor: "#E8E4DE",
            pb: 4,
            padding: "1px 1px",
          }}
        >
          <CheckoutSummary />
        </Box>
      </Box>

      <FooterApp />
    </Box>
  );
};
