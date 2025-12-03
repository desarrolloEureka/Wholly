import { Box, CircularProgress } from "@mui/material";
import CustomCarouselCategories from "../../../customCarousel/CustomCarouselCategories";
import { ImagesCategories } from "../../../../globals/types";
import { rectangle1, rectangle2, rectangle3 } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../../globals/config/config";

export const HomeCategories = ({ categories, loading }: any) => {
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

  /* if (!categories || categories.length === 0) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>No hay Categorias disponibles.</div>;
  } */

  const defaultImages: ImagesCategories[] = [
    {
      id: 1,
      src: rectangle1,
      title: t("homeform.AntiAging"),
      subtitle: t("homeform.AntiAgingSubtitle"),
      description: t("homeform.ShopNow"),
    },
    {
      id: 2,
      src: rectangle2,
      title: t("homeform.SkinCare"),
      subtitle: t("homeform.SkinCareSubtitle"),
      description: t("homeform.ShopNow"),
    },
    {
      id: 3,
      src: rectangle3,
      title: t("homeform.FaceCare"),
      subtitle: t("homeform.FaceCareSubtitle"),
      description: t("homeform.ShopNow"),
    },
  ];

  const imagesCategories: ImagesCategories[] =
    categories && categories.length > 0
      ? categories.map((item: any) => ({
        id: item.id,
        src: item?.image
          ? `${ConfigConstants.webServiceName}${item.image}`
          : rectangle1,
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
      : defaultImages;

  //const imagesCategories: ImagesCategories[] = defaultImages;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "98%", // Reducir el ancho máximo del contenedor
          margin: { xs: "0 auto", md: "0 auto" },
          marginTop: { xs: "500px", md: "0px" },
          marginBottom: "100px",
          position: "relative",
          overflow: "hidden", // Para ocultar las imágenes fuera del contenedor
        }}
      >
        <CustomCarouselCategories images={imagesCategories} />
      </Box>
    </Box>
  );
};
