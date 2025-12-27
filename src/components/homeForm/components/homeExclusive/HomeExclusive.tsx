import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next"; // Importar la función de traducción
import { exclusive_2, fondo_Vetor } from "../../../../assets/images.ts";
import CustomCarouselExclusive from "../../../customCarousel/CustomCarouselExclusive.tsx";

// types
import type {
  ImagesExclusive,
  Supplement,
} from "../../../../globals/types.tsx";

export const HomeExclusive = ({
  exclusiveOffers,
  loading,
}: {
  exclusiveOffers: Supplement[];
  loading: boolean;
}) => {
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

  const imagesExclusive: ImagesExclusive[] =
    exclusiveOffers && exclusiveOffers.length > 0
      ? exclusiveOffers.map((item) => ({
          id: item.id,
          src: item.image ?? exclusive_2,
          title:
            currentLang === "es"
              ? item.name_spanish || item.name_english
              : item.name_english || item.name_spanish,

          subtitle: "",
          description:
            currentLang === "es"
              ? item.description_spanish || item.description_english
              : item.description_english || item.description_spanish,

          description1: "",
          description2: "",
          description3: "",

          price: item.price ?? 0,
          price_final: item.price_final ?? 0,
          code: item.sku ?? "",
        }))
      : [];

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
