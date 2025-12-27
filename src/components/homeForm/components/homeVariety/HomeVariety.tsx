import { Box, CircularProgress } from "@mui/material";
import CustomCarouselVariety from "../../../customCarousel/CustomCarouselVariety";
import { variety1 } from "../../../../assets/images";
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

  const imagesAreas: ImagesVariety[] =
    varieties && varieties.length > 0
      ? varieties.map((item: any) => ({
          id: item.id,
          src: item?.image
            ? `${ConfigConstants.webServiceName}${item.image}`
            : variety1,
          title:
            currentLang === "es"
              ? item.name_spanish || item.name_english
              : item.name_english || item.name_spanish,
          description:
            currentLang === "es"
              ? item.description_spanish || item.description_english
              : item.description_english || item.description_spanish,
          amount: item.amount || 0,
          code: item.code || 0,
        }))
      : [];

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
        {varieties.length ? (
          <CustomCarouselVariety images={imagesAreas} />
        ) : (
          <span>{t("noResults.description")}</span>
        )}
      </Box>
    </Box>
  );
};
