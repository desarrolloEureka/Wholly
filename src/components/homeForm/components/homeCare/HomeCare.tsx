import { Box, Button, Typography } from "@mui/material";
import { imagen_2, VectorIcono } from "../../../../assets/images";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const HomeCare = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px 21%",
        }}
      >
        <img
          src={imagen_2}
          alt="image"
          style={{
            width: "100%",
            height: "auto",
            boxShadow: "1px 0px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Box>

      {/* Contenedor encima de la imagen */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "61%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "25px",
          borderRadius: "10px",
          color: "#FBFFDD",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            color: "black",
            backgroundColor: "#FBFFDD",
            fontFamily: "Inter",
            marginBottom: "12px",

            padding: "6px 4px",
            minWidth: "auto",
            lineHeight: 1,
            "&:hover": {
              backgroundColor: "rgb(172, 180, 154)", // Color en el hover
            },
          }}
        >
          blog
        </Button>
        <Box>
          <Typography
            variant="h4"
            sx={{
              marginRight: "70px",
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "14px",
            }}
          >
            Best care to prevent acne
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "row",
            marginBottom: "30px",
          }}
        >
          <Box
            component="img"
            src={VectorIcono} // Reemplaza esto con la imagen del icono
            alt="icono"
            sx={{
              width: 23, // Ajusta el tamaño del icono
              height: 23,
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ lineHeight: 1 }}>Wholly</Typography>
            <Typography sx={{ lineHeight: 1 }}>Jan 18, 2024</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            marginLeft: "67%", // Mueve el Box al extremo derecho
            "&:hover": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Typography>LEARN MORE</Typography>
          <ChevronRightIcon sx={{ fontSize: 20, color: "#FBFFDD" }} />
        </Box>
      </Box>
    </Box>
  );
};
