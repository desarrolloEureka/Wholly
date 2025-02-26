import { Box, Typography } from "@mui/material";
import { fondo_Vetor } from "../../../../assets/images.ts";

export const HomeExclusive = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E8E4DE",
        position: "relative",
      }}
    >
      <img src={fondo_Vetor} alt="vector" />
      <Box
        sx={{
          position: "absolute",
          top: "10%", // Ajusta según la posición deseada
          left: "50%",
          transform: "translate(-50%, 0)", // Elimina la traslación en Y
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Asegura que el texto esté centrado en el ancho
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Gabriela",
            color: "#3C3C3C",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Exclusive offers
        </Typography>
      </Box>
    </Box>
  );
};
