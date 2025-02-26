import {
  Box,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export const HomeForm = () => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Búsqueda activada:", searchTerm);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "end",
        padding: 5,
        backgroundColor: "rgba(173, 173, 173, 0.22)",
        backdropFilter: "blur(6px)",
        borderRadius: 4,
        boxShadow: 3,
        width: "100%",
        marginTop: "60px",
        marginBottom: "45px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, fontFamily: "Montserrat ", color: "#3C3C3C" }}
      >
        What supplement do you want today?
      </Typography>
      <Typography sx={{ fontSize: "1.8rem", color: "#333", mb: 4 }}>
        Consult the supplement indicated for you, that is 100% compatible with
        you.
      </Typography>
      <Box
        gap={5}
        sx={{
          alignSelf: "flex-start", // Mueve el Box a la izquierda
          display: "flex",
          justifyContent: "flex-start", // Asegura que el contenido también se alinee a la izquierda
          width: "100%", // O ajusta el ancho según lo necesites
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            value={selectedValue}
            onChange={handleChange}
            aria-label="options"
            name="radio-buttons-group3"
            row
            sx={{ gap: "40px", mb: "30px" }}
          >
            <FormControlLabel
              value="option1"
              control={
                <Radio
                  sx={{
                    transform: "scale(1.1)",
                    color: selectedValue === "option1" ? "#3C3C3C" : "default",
                    "&.Mui-checked": {
                      color: "#3C3C3C",
                    },
                  }}
                />
              }
              label={
                <span style={{ fontSize: "1.1rem" }}>{t("Supplements")}</span>
              }
            />
            <FormControlLabel
              value="option2"
              control={
                <Radio
                  sx={{
                    transform: "scale(1.1)",
                    color: selectedValue === "option2" ? "#3C3C3C" : "default",
                    "&.Mui-checked": {
                      color: "#3C3C3C",
                    },
                  }}
                />
              }
              label={
                <span style={{ fontSize: "1.1rem" }}>{t("Indications")}</span>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100%",
          padding: "0",
          marginBottom: "30px",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Sunscree..."
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.46)",
            "& .MuiOutlinedInput-input": {
              padding: "13px 25px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              minHeight: "60px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearchClick}
                  sx={{
                    border: "1.5px solid rgb(62, 62, 62)",
                    borderRadius: "50%",
                    padding: "2px",
                    width: "35px",
                    height: "35px",
                    backgroundColor: "rgb(62, 62, 62)",
                    "&:hover": { backgroundColor: "rgba(49, 48, 48, 0.3)" },
                  }}
                >
                  <SearchIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Box>
  );
};
