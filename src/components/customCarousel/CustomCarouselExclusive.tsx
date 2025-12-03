import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesExclusive } from "../../globals/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

const CustomCarouselExclusive = ({ images }: { images: ImagesExclusive[] }) => {
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const textColor = "#3C3C3C";

  const itemTemplate = (item: ImagesExclusive) => {
    const { t } = useTranslation();
    return (
      <Box>
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: {
              xs: "320px",
              md: "450px",
            },
            mx: "auto",
            borderRadius: "10px",
            marginBottom: {
              xs: "40px",
              md: "60px",
            },
            marginTop: {
              xs: "20px",
              md: "10%",
            },
            /* marginLeft: {
              xs: "auto",
              md: "10px",
            },
            marginRight: {
              xs: "auto",
            }, */
            gap: "10px",
          }}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
            }}
          />

          <Box
            sx={{
              width: "100%",
              padding: {
                xs: "10px 12px",
                md: "10px 15px",
              },
              textAlign: "start",
              borderTop: "none",
              borderRadius: "0 0 10px 10px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.3rem",
                },
                fontWeight: 600,
                color: textColor,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: {
                  xs: "0.95rem",
                  md: "1.0rem",
                },
                marginTop: "3px",
                color: textColor,
                marginBottom: "8px",
                minHeight: "3em",
              }}
            >
              {item.description || ''}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.95rem",
                  md: "1.0rem",
                },
                marginTop: "1px",
                color: textColor,
                marginBottom: "8px",
              }}
            >
              {item.code}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "start",
                width: {
                  xs: "100%",
                  md: "50%",
                },
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.75rem",
                  md: "0.8rem",
                },
              }}
            >
              <span
                style={{
                  textDecoration: "line-through",
                  opacity: 0.6,
                  marginRight: "10px",
                }}
              >
                ${item.price?.toLocaleString("es-CO") ?? "—"}
              </span>

              <span
                style={{
                  opacity: 0.6,
                  marginLeft: "7px",
                }}
              >
                ${item.price_final?.toLocaleString("es-CO") ?? "—"}
              </span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                width: {
                  xs: "100%",
                  md: "50%",
                },
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.85rem",
                  md: "0.9rem",
                },
                marginTop: "15px",
                color: textColor,
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography variant="h4" sx={{ fontSize: "17px" }}>
                {t("homeform.ShopNow")}
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: 20,
                  color: textColor,
                  position: "relative",
                  bottom: "-2.9px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <div className="card" style={{ width: "100%", overflow: "hidden" }}>
      <Carousel
        value={images}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={images.length > 3 ? 3000 : 0} // Solo autoplay si hay más de 3
        itemTemplate={itemTemplate}
      />
    </div>
  );
};

export default CustomCarouselExclusive;
