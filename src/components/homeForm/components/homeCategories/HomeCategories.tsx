import { Box } from "@mui/material";
import CustomCarouselCategories from "../../../customCarousel/CustomCarouselCategories";
import { ImagesCategories } from "../../../../globals/types";
import { rectangle1, rectangle2, rectangle3 } from "../../../../assets/images";

export const HomeCategories = () => {
  const imagesAreas: ImagesCategories[] = [
    {
      id: 1,
      src: rectangle1,
      title: "Anti-aging",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW",
    },
    {
      id: 2,
      src: rectangle2,
      title: "Skin care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW",
    },
    {
      id: 2,
      src: rectangle3,
      title: "Face care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW",
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
        <CustomCarouselCategories images={imagesAreas} />
      </Box>
    </Box>
  );
};
