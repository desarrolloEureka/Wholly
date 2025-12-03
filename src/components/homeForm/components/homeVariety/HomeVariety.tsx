import { Box, CircularProgress } from "@mui/material";
import CustomCarouselVariety from "../../../customCarousel/CustomCarouselVariety";
import { variety1, variety2, variety3 } from "../../../../assets/images";
import { ImagesVariety } from "../../../../globals/types";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../../globals/config/config";

export const Homevariety = ({ varieties, loading }: any) => {
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

  /*  if (!varieties || varieties.length === 0) {
     return <div style={{ textAlign: "center", padding: "2rem" }}>No hay Variedades disponibles.</div>;
   } */

  const defaultImages: ImagesVariety[] = [
    {
      id: 1,
      src: variety1,
      title: t("homeform.titleVariety1"),
      description: t("homeform.subtitleVariety1"),
      amount: t("homeform.priceVariety1"),
      code: "1",
      subtitle: ""
    },
    {
      id: 2,
      src: variety2,
      title: t("homeform.titleVariety2"),
      description: t("homeform.subtitleVariety2"),
      amount: t("homeform.priceVariety2"),
      code: "2",
      subtitle: ""
    },
    {
      id: 3,
      src: variety3,
      title: t("homeform.titleVariety3"),
      description: t("homeform.subtitleVariety3"),
      amount: t("homeform.priceVariety3"),
      code: "3",
      subtitle: ""
    },
  ];

  const imagesAreas: ImagesVariety[] =
    varieties && varieties.length > 0
      ? varieties.map((item: any) => ({
        id: item.id,
        src: item?.image ? `${ConfigConstants.webServiceName}${item.image}` : variety1,
        title:
          currentLang === "es"
            ? item.name_spanish || item.name_english
            : item.name_english || item.name_spanish,
        description:
          currentLang === "es"
            ? item.description_spanish || item.description_english
            : item.description_english || item.description_spanish,
        amount: item.amount || 0,
        code: item.code || 0
      }))
      : defaultImages;

  //const imagesAreas: ImagesVariety[] = defaultImages;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "92%", // Reducir el ancho máximo del contenedor
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
