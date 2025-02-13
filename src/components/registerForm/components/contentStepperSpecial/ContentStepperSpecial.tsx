import { useState } from "react";
import {
  Box,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { OptionsButtons } from "../../../../globals/types";
import RenderOptions from "../renderOptions/RenderOptions";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const ContentStepperSpecial = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Definir las opciones antes de usarlas
  const options: OptionsButtons[] = [
    { id: 1, name: "Acne" },
    { id: 2, name: "Facial acne" },
  ];

  // Filtrar las opciones después de haberlas definido
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        height: 400,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Inter", fontSize: "27px", marginBottom: "18px" }}
        >
          {t("select the ")}
          <span
            style={{
              fontFamily: "Gabriela",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {t("trends")}
          </span>
          {t(" you have")}
        </Typography>
        <Typography sx={{ fontSize: "0.9em" }}>
          Enter the name of what you are looking for as many times as you need
          and add them one by one.
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: 115,
            // backgroundColor: "blue",
            mt: 3,
            p: 2,
            borderRadius: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Acne...."
              sx={{
                backgroundColor: "white",
                borderRadius: "20px", // Reduce el radio para menos altura
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Reduce la sombra
                "& .MuiOutlinedInput-input": {
                  padding: "13px 25px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  minHeight: "40px",
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
