import { Box } from "@mui/material";
import CustomCarouselCategories from "../../../customCarousel/CustomCarouselCategories";
import { ImagesCategories } from "../../../../globals/types";
import { rectangle1, rectangle2, rectangle3 } from "../../../../assets/images";
import { useTranslation } from "react-i18next";

export const HomeCategories = () => {
  const { t } = useTranslation();

  const imagesAreas: ImagesCategories[] = [
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
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%", // Reducir el ancho máximo del contenedor
          margin: { xs: "0 auto", md: "0 auto" },
          marginTop: { xs: "500px", md: "0px" },
          marginBottom: "100px",
          position: "relative",
          overflow: "hidden", // Para ocultar las imágenes fuera del contenedor
        }}
      >
        <CustomCarouselCategories images={imagesAreas} />
      </Box>
    </Box>
  );
};
