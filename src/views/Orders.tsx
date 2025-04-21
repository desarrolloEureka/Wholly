import { Box, Container, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { useState } from "react";
import { ActiveOrders } from "../components/userMenuComponents/orders/ActiveOrders";
import { OrdersHistory } from "../components/userMenuComponents/orders/OrdersHistory";
import { OrderDetails } from "../components/userMenuComponents/orders/components/activeOrders/OrderDetails";
import { OrderDetailsHistory } from "../components/userMenuComponents/orders/components/ordersHistory/OrderDetailsHistory";
import { useTranslation } from "react-i18next";

export const Orders = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [OrderForm, setOrderForm] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setOrderForm((prev) => !prev);
  };
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />
      {OrderForm ? (
        activeTab === "active" ? (
          <OrderDetails onBackOrder={handleToggle} />
        ) : (
          <OrderDetailsHistory onBackOrder={handleToggle} />
        )
      ) : (
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
            {/* Tabs */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={20}
              sx={{ mb: 2 }}
            >
              <Typography
                onClick={() => setActiveTab("history")}
                sx={{
                  cursor: "pointer",
                  color: activeTab === "history" ? "#A5AB94" : "#B9B9B9",
                  fontWeight: activeTab === "history" ? 500 : "normal",
                  borderBottom:
                    activeTab === "history" ? "1px solid #A5AB94" : "none",
                  pb: 0.5,
                }}
              >
                {t("Orders.OrdersHistory")}
              </Typography>
              <Typography
                onClick={() => setActiveTab("active")}
                sx={{
                  cursor: "pointer",
                  color: activeTab === "active" ? "#A5AB94" : "#B9B9B9",
                  fontWeight: activeTab === "active" ? 500 : "normal",
                  borderBottom:
                    activeTab === "active" ? "1px solid #A5AB94" : "none",
                  pb: 0.5,
                }}
              >
                {t("Orders.ActiveOrders")}
              </Typography>
            </Box>

            {/* Tab content */}
            <Box display="flex" justifyContent="flex-start">
              {activeTab === "active" ? (
                <ActiveOrders onAddNew={handleToggle} />
              ) : (
                <OrdersHistory onAddNew={handleToggle} />
              )}
            </Box>
          </Container>
        </Box>
      )}
      <FooterApp />
    </Box>
  );
};
