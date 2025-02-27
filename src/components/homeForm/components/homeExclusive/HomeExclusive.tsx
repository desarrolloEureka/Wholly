import { Box, Typography } from "@mui/material";
import {
  exclusive_1,
  exclusive_2,
  exclusive_3,
  fondo_Vetor,
} from "../../../../assets/images.ts";
import CustomCarouselExclusive from "../../../customCarousel/CustomCarouselExclusive.tsx";
import { ImagesExclusive } from "../../../../globals/types.tsx";

export const HomeExclusive = () => {
  const imagesAreas: ImagesExclusive[] = [
    {
      id: 1,
      src: exclusive_1,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#S146",
      description: "$24.00",
      description1: "$16.00",
      description2: "  sale",
      description3: "SHOP NOW",
    },
    {
      id: 2,
      src: exclusive_2,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#S146",
      description: "$24.00",
      description1: "$16.00",
      description2: "  sale",
      description3: "SHOP NOW",
    },
    {
      id: 2,
      src: exclusive_3,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#F479",
      description: "$24.00",
      description1: "$16.00",
      description2: "  sale",
      description3: "SHOP NOW",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#E8E4DE",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${fondo_Vetor})`,
          backgroundSize: "50%",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          padding: "100px",
          borderRadius: "15px",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "98%", // Reducir el ancho máximo del contenedor
          margin: "0 auto",
          position: "relative",
          overflow: "hidden", // Para ocultar las imágenes fuera del contenedor
        }}
      >
        <CustomCarouselExclusive images={imagesAreas} />
      </Box>
    </Box>
  );
};
