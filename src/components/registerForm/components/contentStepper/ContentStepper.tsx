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

export const ContentStepper = ({
  title1,
  title2,
  title3,
  ButtonsOptions,
  description,
  placeholder,
  toggleConditionSelection,
  selectedOptions,
  errorMessageNoSelected,
  errorMessageText
}: {
  title1?: string;
  title2?: string;
  title3?: string;
  ButtonsOptions: OptionsButtons[] | any[];
  description: string;
  placeholder: string;
  toggleConditionSelection?: any;
  selectedOptions?: any;
  errorMessageNoSelected?: any;
  errorMessageText?: any;
}) => {

  //console.log('ButtonsOptions ', ButtonsOptions);

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const hasResults = ButtonsOptions && ButtonsOptions?.some((option) =>
      option.name_spanish.toLowerCase().includes(value.toLowerCase())
    );

    if (value && !hasResults) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  // Filtrar opciones
  const filteredOptions = ButtonsOptions && ButtonsOptions?.filter((option) =>
    option.name_spanish?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        mt: 3,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontFamily: "Inter", fontSize: "27px" }}>
          {title1}
          <span
            style={{
              fontFamily: "Gabriela",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {title2}
          </span>
          {title3}
        </Typography>
      </Box>
      <Typography sx={{ textAlign: "center", mt: 2 }}>{description}</Typography>

      <Box
        sx={{
          mt: 2,
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "60px",
        }}
      >
        <Box sx={{
          minHeight: "22px"
        }}>
          {errorMessage && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "center"
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
          {errorMessageNoSelected && (
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
                <ErrorLabel text={errorMessageText} />
              </Typography>
            </Box>
          )}
        </Box>

        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            maxWidth: "700px",
            padding: { sx: 0, sm: 6, md: 2 },
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={placeholder}
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              "& .MuiOutlinedInput-input": {
                padding: "13px 25px",
                color: errorMessage ? "red" : "black",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                minHeight: "40px",
                borderColor: errorMessage ? "red" : "inherit",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: errorMessage ? "red !important" : "inherit",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      console.log("Búsqueda activada:", searchTerm)
                    }
                    sx={{
                      border: "1.5px solid rgba(0, 0, 0, 0.79)",
                      borderRadius: "50%",
                      padding: "2px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "rgba(49, 48, 48, 0.06)",
                      "&:hover": { backgroundColor: "rgba(49, 48, 48, 0.3)" },
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

      {/* Renderizar solo las opciones filtradas */}
      <RenderOptions
        options={filteredOptions}
        toggleOptionsSelection={toggleConditionSelection}
        selectedOptions={selectedOptions}
      />
    </Box>
  );
};
