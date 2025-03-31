import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const PaymentComponent = () => {
  const { t } = useTranslation();
  const Navigate = useNavigate();

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [valor, setValor] = useState("");

  const handleChange = (e: { target: { value: any } }) => {
    let value = e.target.value;

    // Permitir solo números y "/"
    value = value.replace(/[^0-9/]/g, "");

    // Formatear como mm/yy
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";
    }

    // Limitar longitud a 5 caracteres (mm/yy)
    if (value.length > 5) {
      return;
    }

    setValor(value);
  };

  return (
    <Box sx={{ width: "100%", padding: "16px" }}>
      <Box display="flex" flexDirection="column" gap={2} sx={{ width: "100%" }}>
        {/* Checkbox con fondo visible */}
        <Box display="flex" flexDirection="row" gap={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
                size="large"
                sx={{
                  "&.Mui-checked": { color: "#A5AB94" },
                  transform: "scale(0.8)",
                }}
              />
            }
            label="Visa3655"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked2}
                onChange={(e) => setChecked2(e.target.checked)}
                size="large"
                sx={{
                  "&.Mui-checked": { color: "#A5AB94" },
                  transform: "scale(0.8)",
                }}
              />
            }
            label="Visa1324"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked3}
                onChange={(e) => setChecked3(e.target.checked)}
                size="large"
                sx={{
                  "&.Mui-checked": { color: "#A5AB94" },
                  transform: "scale(0.8)",
                }}
              />
            }
            label="Mastercard0329"
          />
        </Box>

        <Typography>{t("shoppingCart.SecurePaymentMessage")}</Typography>

        {/* Número de tarjeta */}
        <TextField
          id="card-number"
          variant="outlined"
          placeholder={t("shoppingCart.CardNumber")}
          fullWidth
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />

        <Box display="flex" flexDirection="row" gap={1} sx={{ width: "100%" }}>
          {/* Campo de Fecha de Expiración con Máscara MM/YY */}
          <TextField
            id="expiration-date"
            variant="outlined"
            placeholder={t("shoppingCart.ExpirationDate")}
            value={valor}
            onChange={handleChange}
            inputProps={{ pattern: "^(0[1-9]|1[0-2])\\/\\d{2}$" }}
            fullWidth
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
                textAlign: "start",
                "& input": {
                  textAlign: "start",
                  fontSize: "16px",
                  letterSpacing: "1px",
                },
              },
            }}
          />
          {/* Campo de CVV */}
          <TextField
            id="cvv-code"
            variant="outlined"
            placeholder={t("shoppingCart.CVVCode")}
            fullWidth
            type="password"
            inputProps={{ maxLength: 4 }}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
              },
            }}
          />
        </Box>

        {/* Botón de continuar */}
        <Button
          variant="contained"
          fullWidth
          onClick={() => Navigate("/PaymentVerification")}
          sx={{
            marginTop: "30px",
            borderRadius: "16px",
            boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#A5AB94",
            textTransform: "uppercase",
          }}
        >
          {t("shoppingCart.MakeAPurchase")}
        </Button>
      </Box>
    </Box>
  );
};
