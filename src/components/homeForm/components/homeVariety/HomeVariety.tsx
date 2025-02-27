import { Box } from "@mui/material";
import CustomCarouselVariety from "../../../customCarousel/CustomCarouselVariety";
import { variety1, variety2, variety3 } from "../../../../assets/images";
import { ImagesVariety } from "../../../../globals/types";

export const Homevariety = () => {
  const imagesAreas: ImagesVariety[] = [
    {
      id: 1,
      src: variety1,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#S385",
      description: "$24.00",
    },
    {
      id: 2,
      src: variety2,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#S385",
      description: "$24.00",
    },
    {
      id: 2,
      src: variety3,
      title: "Lorem Ipsum",
      subtitle: "Lorem ipsum dolor sit amet consecte tur SKU-#S385",
      description: "$24.00",
    },
  ];
  return (
    <Box>
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
        <CustomCarouselVariety images={imagesAreas} />
      </Box>
    </Box>
  );
};
