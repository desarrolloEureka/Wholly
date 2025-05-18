import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useTranslation } from "react-i18next"; // Importar la función de traducción
import {
  exclusive_1,
  exclusive_2,
  exclusive_3,
  fondo_Vetor,
} from "../../../../assets/images.ts";
import CustomCarouselExclusive from "../../../customCarousel/CustomCarouselExclusive.tsx";
import { ImagesExclusive } from "../../../../globals/types.tsx";

export const HomeExclusive = () => {
  const { t } = useTranslation(); // Inicializar la función de traducción

  const imagesAreas: ImagesExclusive[] = [
    {
      id: 1,
      src: exclusive_1,
      title: t("homeform.titleExclusive1"),
      subtitle: t("homeform.subtitleExclusive1"),
      description: t("homeform.priceExclusiveBefore1"),
      description1: t("homeform.priceExclusiveNow1"),
      description2: t("homeform.saleExclusive"),
      description3: t("homeform.shopNowExclusive1"),
    },
    {
      id: 2,
      src: exclusive_2,
      title: t("homeform.titleExclusive2"),
      subtitle: t("homeform.subtitleExclusive2"),
      description: t("homeform.priceExclusiveBefore2"),
      description1: t("homeform.priceExclusiveNow2"),
      description2: t("homeform.saleExclusive"),
      description3: t("homeform.shopNowExclusive2"),
    },
    {
      id: 3,
      src: exclusive_3,
      title: t("homeform.titleExclusive3"),
      subtitle: t("homeform.subtitleExclusive3"),
      description: t("homeform.priceExclusiveBefore3"),
      description1: t("homeform.priceExclusiveNow3"),
      description2: t("homeform.saleExclusive"),
      description3: t("homeform.shopNowExclusive3"),
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
            color: "#3C3C3C",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "2.1rem",
          }}
        >
          {t("homeform.Exclusive")}
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
