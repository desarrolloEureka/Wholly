import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { useState } from "react";
import PaymentMethodsForm from "../components/userMenuComponents/paymentMethodsForm/components/PaymentMethodsForm";
import PaymentMethodsList from "../components/userMenuComponents/paymentMethodsForm/PaymentMethodsList";

export const PaymentMethods = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />
      <Box className="bg_user_menu">
        <Container
          component="main"
          sx={{
            width: "100%",
            margin: "0 auto",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          {showForm ? (
            <PaymentMethodsForm onBack={handleToggle} />
          ) : (
            <PaymentMethodsList onAddPaymentMethod={handleToggle} />
          )}
        </Container>
      </Box>
      <FooterApp />
    </Box>
  );
};
