import { Box } from "@mui/material";
import CustomCarouselVariety from "../../../customCarousel/CustomCarouselVariety";
import { variety1, variety2, variety3 } from "../../../../assets/images";
import { ImagesVariety } from "../../../../globals/types";
import { useTranslation } from "react-i18next";

export const Homevariety = () => {
  const { t } = useTranslation();

  const imagesAreas: ImagesVariety[] = [
    {
      id: 1,
      src: variety1,
      title: t("homeform.titleVariety1"),
      subtitle: t("homeform.subtitleVariety1"),
      description: t("homeform.priceVariety1"),
    },
    {
      id: 2,
      src: variety2,
      title: t("homeform.titleVariety2"),
      subtitle: t("homeform.subtitleVariety2"),
      description: t("homeform.priceVariety2"),
    },
    {
      id: 3,
      src: variety3,
      title: t("homeform.titleVariety3"),
      subtitle: t("homeform.subtitleVariety3"),
      description: t("homeform.priceVariety3"),
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: { md: "96%", sm: "100%" }, // Reducir el ancho máximo del contenedor
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
