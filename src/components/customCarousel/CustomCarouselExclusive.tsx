import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesExclusive } from "../../globals/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomCarouselExclusive = ({ images }: { images: ImagesExclusive[] }) => {
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const textColor = "#3C3C3C";

  const itemTemplate = (item: ImagesExclusive) => {
    return (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          borderRadius: "10px",
          marginBottom: "60px",
          marginTop: "10%",
          marginLeft: "10px",
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
            borderRadius: "10px ",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
          }}
        />
        {/* Contenedor del título y subtítulo */}

        <Box
          sx={{
            width: "100%",
            padding: "10px 15px",
            textAlign: "start",
            borderTop: "none",

            borderRadius: "0 0 10px 10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: textColor,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "1.0rem",
              marginTop: "3px",
              color: textColor,
              marginBottom: "8px",
            }}
          >
            {item.subtitle}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "start",
              width: "50%",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            <span
              style={{
                textDecoration: "line-through",
                opacity: 0.6,
                marginRight: "10px",
              }}
            >
              {item.description}
            </span>
            {item.description1}
            <span
              style={{
                opacity: 0.6,
                marginLeft: "7px",
              }}
            >
              {item.description2}
            </span>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              width: "50%",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              fontSize: "0.9rem",
              marginTop: "15px",
              color: textColor,
              "&:hover": {
                transform: "translateX(5px)",
              },
            }}
          >
            {item.description3}
            <ChevronRightIcon
              sx={{
                fontSize: 20,
                color: textColor,
                position: "relative",
                top: "-2.5px",
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={4}
        numScroll={2}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
        showIndicators={false}
      />
    </div>
  );
};

export default CustomCarouselExclusive;
