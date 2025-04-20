import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Box,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { OptionsButtons } from "../../../../globals/types";
import ErrorLabel from "../../../errorLabel/ErrorLabel";
import RenderOptions from "../renderOptions/RenderOptions";

export const ContentStepperSpecial = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  const options: OptionsButtons[] = [
    { id: 1, name: "Acne" },
    { id: 2, name: "Facial acne" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const hasResults = options.some((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );

    if (value && !hasResults) {
      setErrorMessage(true);
      setIsError(true);
    } else {
      setErrorMessage(false);
      setIsError(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Inter", fontSize: "27px", marginBottom: "18px" }}
        >
          {t("registerForm.selectThe")}{" "}
          <span
            style={{
              fontFamily: "Gabriela",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {t("registerForm.trends")}
          </span>{" "}
          {t("registerForm.youHave")}
        </Typography>
        <Typography sx={{ fontSize: "0.9em" }}>
          {t("registerForm.enterName")}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: 115,
            borderRadius: 2,
            margin: { xs: "0px", sm: "0 3px", md: "0 3px" },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Box sx={{ minHeight: "22px" }}>
              {errorMessage && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    color="error"
                    sx={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <ErrorLabel text={t("registerForm.ErrorMessage")} />
                  </Typography>
                </Box>
              )}
            </Box>

            <TextField
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={t("registerForm.placeholder")}
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-input": {
                  padding: "13px 25px",
                  color: isError ? "error.main" : "inherit",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  minHeight: "40px",
                  borderColor: isError ? "error.main" : "rgba(0, 0, 0, 0.23)",
                  "&:hover fieldset": {
                    borderColor: isError ? "error.main" : "rgba(0, 0, 0, 0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: isError ? "error.main" : "primary.main",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => console.log("Botón presionado")}
                      sx={{
                        border: "1.5px solid rgba(0, 0, 0, 0.79)",
                        borderRadius: "50%",
                        padding: "2px",
                        width: "28px",
                        height: "28px",
                        backgroundColor: "rgba(49, 48, 48, 0.06)",
                        "&:hover": {
                          backgroundColor: "rgba(49, 48, 48, 0.3)",
                        },
                      }}
                    >
                      <KeyboardArrowRightOutlinedIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Box>
      </Box>
      <RenderOptions options={filteredOptions} additionalButtons />
    </Box>
  );
};
