import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const PaymentComponent = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

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
            label="Visa 3655"
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
            label="Visa 1324"
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
            label="Mastercard 0329"
          />
        </Box>

        <Typography>Pay by card. Your payment is secure.</Typography>

        {/* Número de tarjeta */}
        <TextField
          id="card-number"
          variant="outlined"
          placeholder="Card Number"
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
            placeholder="MM/YY"
            fullWidth
            inputProps={{ maxLength: 5 }} // Limita la entrada a 5 caracteres (MM/YY)
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
                textAlign: "start",
                "& input": {
                  textAlign: "start",
                  fontSize: "16px",
                  letterSpacing: "1px", // Añade espaciado entre caracteres
                },
              },
            }}
          />
          {/* Campo de CVV */}
          <TextField
            id="cvv-code"
            variant="outlined"
            placeholder="CVV Code"
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
          sx={{
            marginTop: "30px",
            borderRadius: "16px",
            boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#A5AB94",
            textTransform: "uppercase",
          }}
        >
          CONTINUE TO SHIPPING
        </Button>
      </Box>
    </Box>
  );
};
