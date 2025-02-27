import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesCategories } from "../../globals/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomCarouselCategories = ({
  images,
}: {
  images: ImagesCategories[];
}) => {
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const backgroundColors = ["#EEF1F0", "#A5AB94", "#E8E4DF"];
  const textColors = ["#3C3C3C", "#FBFFDD", "#3C3C3C"];

  const itemTemplate = (item: ImagesCategories) => {
    const index = images.indexOf(item);
    const backgroundColor = backgroundColors[index % backgroundColors.length];
    const textColor = textColors[index % textColors.length];

    return (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "96%",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
          borderRadius: "10px",
          marginBottom: "20px",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            borderRadius: "10px 10px 0 0 ",
          }}
        />

        {/* Contenedor del título y subtítulo */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: backgroundColor,
            padding: "15px 20px",
            textAlign: "start",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.4rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              color: textColor,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1.2rem",
              fontFamily: "Montserrat, sans-serif",
              marginTop: "4px",
              color: textColor,
              marginBottom: "28px",
            }}
          >
            {item.subtitle}
          </Typography>
          {/* texto interactivo */}
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
              color: textColor,
              "&:hover": {
                transform: "translateX(5px)",
              },
            }}
          >
            {item.description}
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
      />
    </div>
  );
};

export default CustomCarouselCategories;
