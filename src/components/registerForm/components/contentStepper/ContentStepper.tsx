import { useState } from "react";
import {
  Box,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { OptionsButtons } from "../../../../globals/types";
import RenderOptions from "../renderOptions/RenderOptions";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const ContentStepper = ({
  title1,
  title2,
  title3,
  ButtonsOptions,
  description,
}: {
  title1?: string;
  title2?: string;
  title3?: string;
  ButtonsOptions: OptionsButtons[];
  description: string;
}) => {
  // Estado para el campo de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar opciones según el término de búsqueda
  const filteredOptions = ButtonsOptions.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          flex: 1,
          height: 90,
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "60%",
            maxWidth: "800px",
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Hair...."
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
      {/* Renderizar solo las opciones filtradas */}
      <RenderOptions options={filteredOptions} />
    </Box>
  );
};
