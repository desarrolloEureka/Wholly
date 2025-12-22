import { useState } from "react";
import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import AddressList from "../components/userMenuComponents/addressesForm/AddressList";
import AddressesForm from "../components/userMenuComponents/addressesForm/components/AddressesForm";

// types
import type { Address } from "../globals/types";

export const Addresses = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentItem, setCurrentItem] = useState<Address | null>(null);

  const handleToggle = () => {
    setShowForm((prev) => !prev); // Alterna entre true y false
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
          {/* Aquí mostramos uno u otro componente */}
          {showForm ? (
            <AddressesForm
              onBack={handleToggle}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          ) : (
            <AddressList
              onAddNew={handleToggle}
              setCurrentItem={setCurrentItem}
            />
          )}
        </Container>
      </Box>
      <FooterApp />
    </Box>
  );
};
