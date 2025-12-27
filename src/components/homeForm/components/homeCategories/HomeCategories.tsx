import { Box, CircularProgress } from "@mui/material";
import CustomCarouselCategories from "../../../customCarousel/CustomCarouselCategories";
import type { Category, ImagesCategories } from "../../../../globals/types";
import { rectangle1 } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../../globals/config/config";

export const HomeCategories = ({
  categories,
  loading,
}: {
  categories: Category[];
  loading: boolean;
}) => {
  const { i18n } = useTranslation();
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
      : [];

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
