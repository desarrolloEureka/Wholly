import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { t } from "i18next";
import React, { SetStateAction, useState } from "react";

export const Passwords = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "74%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center", // Centra el contenido horizontalmente
          alignItems: "center", // Centra el contenido verticalmente si es necesario
          margin: "0 auto", // Centra el contenedor en su contenedor principal
        }}
      >
        <Typography
          style={{
            fontSize: "0.880rem",
            marginTop: "28px",
            textAlign: "center", // Asegura que el texto esté centrado
          }}
        >
          {t("loginForm.new_password_text")}
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {/* Primer bloque */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "48%",
            marginTop: "38px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              paddingBlock: "1.5px",

              fontSize: "0.9rem",
              marginLeft: "0",
            }}
          >
            {t("loginForm.new_password")}
          </Typography>
          <FormControl
            sx={{
              width: "100%",
              height: "40px",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="-adornment-new-password"
              type={showPassword ? "text" : "password"}
              value={password}
              sx={{
                fontSize: "0.875rem",
                padding: "6px 8px",
                height: "100%",
                lineHeight: "1.5",
                borderRadius: "8px",
              }}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        {/* Segundo bloque */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "48%",
            marginTop: "38px",
            marginBottom: "20px ",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "8px",
              fontSize: "0.9rem",
              marginLeft: "0",
            }}
          >
            {t("loginForm.repeat_password")}
          </Typography>
          <FormControl
            sx={{
              width: "100%",
              height: "40px",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="adornment-repeat-password"
              type={showPassword ? "text" : "password"}
              value={password}
              sx={{
                fontSize: "0.875rem",
                padding: "6px 8px",
                height: "100%",
                lineHeight: "1.5",
                borderRadius: "8px",
              }}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
