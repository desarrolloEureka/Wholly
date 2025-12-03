import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next"; // Importar la función de traducción
import {
  exclusive_1,
  exclusive_2,
  exclusive_3,
  fondo_Vetor,
} from "../../../../assets/images.ts";
import CustomCarouselExclusive from "../../../customCarousel/CustomCarouselExclusive.tsx";
import { ImagesExclusive } from "../../../../globals/types.tsx";

export const HomeExclusive = ({ exclusiveOffers, loading }: any) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  /* if (!exclusiveOffers || exclusiveOffers.length === 0) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>No hay ofertas disponibles.</div>;
  } */

  const defaultImages: ImagesExclusive[] = [
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

  const imagesExclusive: ImagesExclusive[] =
    exclusiveOffers && exclusiveOffers.length > 0
      ? exclusiveOffers.map((item: any) => ({
        id: item.id,
        src: item?.image
          ? item.image
          : exclusive_2,
        title:
          currentLang === "es"
            ? item.name_spanish || item.name_english
            : item.name_english || item.name_spanish,
        description:
          currentLang === "es"
            ? item.description_spanish || item.description_english
            : item.description_english || item.description_spanish,
        price: item.price || 0,
        price_final: item.price_final || 0,
        code: item.sku || 0,
      }))
      : defaultImages;

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
          padding: "50px",
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
        <CustomCarouselExclusive images={imagesExclusive} />
      </Box>
    </Box>
  );
};
