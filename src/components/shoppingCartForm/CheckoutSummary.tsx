import { Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CheckoutSummarySelect } from "./components/checkoutSummary/checkoutSummarySlect";
import { useTranslation } from "react-i18next";

export const CheckoutSummary = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={{ padding: "8px 72px" }}>
        <Typography
          variant="h6"
          sx={{
            width: "50%",
            padding: "10px",
            color: "#3C3C3C",
            fontSize: "12px",
            margin: "15px 0px",
            marginTop: "30px",
          }}
        >
          {t("shoppingCart.ORDER_SUMMARY")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CheckoutSummarySelect />
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(76, 76, 76, 0.25)",
              mt: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              marginTop: "10px",
              marginBottom: "12px",
            }}
          >
            <Typography sx={{ color: "rgba(60, 60, 60, 0.7)" }}>
              {t("shoppingCart.discountMessage")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <TextField
                id="outlined-basic-2"
                variant="outlined"
                placeholder={t("shoppingCart.discountPlaceholder")}
                fullWidth
                sx={{
                  width: "220px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    height: "40px",
                    backgroundColor: "#ffff",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "100px",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "#A5AB94",
                  height: "34px",
                }}
              >
                {t("shoppingCart.apply")}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "1px",
              backgroundColor: "rgba(76, 76, 76, 0.25)",
              mt: 1,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: "10px",
            marginBottom: "12px",
          }}
        >
          <Box
            sx={{
              padding: "3px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "#3C3C3C" }}>
              {t("shoppingCart.subtotal")}
            </Typography>
            <Typography sx={{ color: "#3C3C3C", textAlign: "end" }}>
              $100.00
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "#3C3C3C" }}>
              {t("shoppingCart.shipping")}
            </Typography>
            <Typography sx={{ color: "#3C3C3C", textAlign: "end" }}>
              {t("shoppingCart.shippingMessage")}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(76, 76, 76, 0.25)",
            mt: 1,
          }}
        />
        <Box sx={{ marginTop: "10px", marginBottom: "12px" }}>
          <Box
            sx={{
              padding: "3px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "485px",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <Typography sx={{ color: "#3C3C3C" }}>
              {t("shoppingCart.total")}
            </Typography>
            <Typography sx={{ color: "#3C3C3C", textAlign: "end" }}>
              $100.00
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "3px",
            display: "flex",
            flexDirection: "row",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ color: "#3C3C3C" }}>
              {t("shoppingCart.secureCheckout")}
            </Typography>
            <LockOutlinedIcon sx={{ color: "#3C3C3C" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
