import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  blog_1,
  blog_2,
  blog_3,
  blog_4,
  blog_5,
  blog_6,
} from "../../../assets/images";
import { ImagesCategories } from "../../../globals/types";
import { useTranslation } from "react-i18next";

export const BlogForm = () => {
  const { t } = useTranslation();

  const imagesAreas: ImagesCategories[] = [
    {
      id: 1,
      src: blog_1,
      title: "Lorem Ipsumg",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
    {
      id: 2,
      src: blog_2,
      title: "Lorem Ipsum",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
    {
      id: 3,
      src: blog_3,
      title: "Lorem Ipsum",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
    {
      id: 4,
      src: blog_4,
      title: "Lorem Ipsumg",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
    {
      id: 5,
      src: blog_5,
      title: "Lorem Ipsum",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
    {
      id: 6,
      src: blog_6,
      title: "Lorem Ipsum",
      subtitle:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      description: "SEE MORE",
    },
  ];

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingTop: "30px",
          paddingBottom: "30px",
          margin: "0 auto",
          borderBottom: "1px solid #A5AB94",
          width: "93%",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ color: "#A5AB94", fontSize: "1.6rem" }}
        >
          {t("blogForm.blog")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 columna en móviles
            sm: "repeat(2, 1fr)", // 2 columnas en tablets
            lg: "repeat(3, 1fr)", // 3 columnas en pantallas grandes,
          },
          gap: 2,
          padding: "50px",
          justifyItems: "center",
        }}
      >
        {imagesAreas.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              width: "98%",
              height: "500px",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
            }}
            onClick={() => navigate("/internalBlog")}
          >
            <img
              src={item.src}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />

            {/* Texto superpuesto sobre la imagen */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "rgba(0, 0, 0, 0.31)",
                color: "white",
                padding: "10px",
                textAlign: "center",
                height: "auto",
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  marginBottom: "40px",
                  color: "#FBFFDD",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ marginBottom: "40px", width: "60%", color: "#FFFFFF" }}
              >
                {item.subtitle}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginBottom: "30px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginRight: "5px",
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.description}
                </Typography>
                <ChevronRightIcon sx={{ fontSize: 20, color: "white" }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
