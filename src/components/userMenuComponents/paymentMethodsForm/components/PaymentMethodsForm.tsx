import {
  CalendarMonth,
  CreditCard,
  Key,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PaymentMethodsForm = ({ onBack }: { onBack: () => void }) => {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <Box>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          paddingTop: "50px",
          margin: "0 auto",
        }}
      >
        {/* Card Number */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <CreditCard sx={{ color: "#3C3C3C" }} />
            <Typography sx={{ color: "#3C3C3C" }}>
              {t("PaymentMethodsForm.cardNumber")}
            </Typography>
          </Box>
          <TextField
            fullWidth
            placeholder="56385 36585 93067 73957"
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                "& fieldset": {
                  border: "1px solid #ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#858585",
                },
              },
            }}
          />
        </Box>

        {/* Good Thru and Security Code */}
        <Box sx={{ display: "flex", gap: 1, height: "100px" }}>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <CalendarMonth sx={{ color: "#3C3C3C" }} />
              <Typography sx={{ color: "#3C3C3C" }}>
                {t("PaymentMethodsForm.goodThru")}
              </Typography>
            </Box>

            <TextField
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                },
              }}
              sx={{
                width: "85%",
                marginBottom: "44px",
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Key sx={{ color: "#3C3C3C" }} />
              <Typography sx={{ color: "#3C3C3C" }}>
                {t("PaymentMethodsForm.securityCode")}
              </Typography>
            </Box>
            <TextField
              fullWidth
              type={showCode ? "text" : "password"}
              placeholder="****"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowCode(!showCode)}>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  "& fieldset": {
                    border: "1px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#9da089",
                "&.Mui-checked": {
                  color: "#9da089",
                },
              }}
            />
          }
          label={t("PaymentMethodsForm.defaultCardForShopping")}
          sx={{ mb: 3, color: "#3C3C3C" }}
        />

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 500,
              width: "140px",
              height: "38px",
              color: "#3C3C3C",
              borderColor: "#b2b69d",
              fontSize: "0.9rem",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#9da089",
              },
            }}
          >
            {t("PaymentMethodsForm.cancel")}
          </Button>
          <Button
            variant="contained"
            onClick={onBack}
            sx={{
              bgcolor: "#b2b69d",
              "&:hover": { bgcolor: "#9da089" },
              borderRadius: "20px",
              width: "140px",
              height: "38px",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#fff",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            {t("PaymentMethodsForm.save")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentMethodsForm;
