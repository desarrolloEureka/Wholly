import { Box, Typography, IconButton, Button } from "@mui/material";
import { Delete, Add, CreditCard } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type PaymentMethod = {
  id: number;
  type: "Visa" | "Mastercard";
  last4: string;
  expDate: string;
};

const paymentMethods: PaymentMethod[] = [
  { id: 1, type: "Visa", last4: "3675", expDate: "****" },
  { id: 2, type: "Visa", last4: "3675", expDate: "****" },
  { id: 3, type: "Mastercard", last4: "3675", expDate: "****" },
  { id: 3, type: "Mastercard", last4: "3675", expDate: "****" },
  { id: 3, type: "Mastercard", last4: "3675", expDate: "****" },
  { id: 3, type: "Mastercard", last4: "3675", expDate: "****" },

  { id: 3, type: "Mastercard", last4: "3675", expDate: "****" },
];

const PaymentMethodsList = ({
  onAddPaymentMethod,
}: {
  onAddPaymentMethod: () => void;
}) => {
  const { t } = useTranslation();

  const handleDelete = (id: number) => {
    console.log(`Eliminar método ${id}`);
  };

  return (
    <Box p={2} sx={{ backgroundColor: "#ece8e1", minHeight: "100vh" }}>
      <Button
        variant="outlined"
        startIcon={<Add />}
        sx={{ mb: 4, borderRadius: 8, textTransform: "none", width: "12%" }}
        onClick={onAddPaymentMethod}
      >
        {t("PaymentMethodsForm.new")}
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          height: "80vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        {paymentMethods.map((method) => (
          <Box
            key={method.id}
            onClick={onAddPaymentMethod}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff",
              p: 2,
              height: "180px",
              width: "360px",
              position: "relative",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <CreditCard sx={{ color: "#94a18c", mr: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#94a18c",
                  fontSize: { xs: "1.1rem", sm: "1.1rem" },
                }}
              >
                {method.type}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                fontWeight: 500,
              }}
            >
              **** **** **** {method.last4}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                fontWeight: 500,
                marginBottom: "40px",
              }}
            >
              {method.expDate}
            </Typography>

            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: "absolute",
                top: 65,
                right: 8,
              }}
            >
              <IconButton
                onClick={() => handleDelete(method.id)}
                sx={{ color: "#e57373" }}
              >
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PaymentMethodsList;
