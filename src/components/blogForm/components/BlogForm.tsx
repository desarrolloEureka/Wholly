import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, CircularProgress, Typography } from "@mui/material";
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
import { ConfigConstants } from "../../../globals/config/config";

export const BlogForm = ({ blogs, loading }: any) => {
  const navigate = useNavigate();
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

  if (!blogs || blogs.length === 0) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>No hay Blogs disponibles.</div>;
  }

  const defaultImages: ImagesCategories[] = [
    {
      id: 1,
      src: blog_1,
      title: "Lorem Ipsumg",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
    {
      id: 2,
      src: blog_2,
      title: "Lorem Ipsum",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
    {
      id: 3,
      src: blog_3,
      title: "Lorem Ipsum",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
    {
      id: 4,
      src: blog_4,
      title: "Lorem Ipsumg",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
    {
      id: 5,
      src: blog_5,
      title: "Lorem Ipsum",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
    {
      id: 6,
      src: blog_6,
      title: "Lorem Ipsum",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      subtitle: "SEE MORE",
    },
  ];

  const formattedBlogs: ImagesCategories[] =
    blogs.length > 0
      ? blogs.map((item: any, index: number) => ({
        id: item.id || index,
        src: item.image
          ? `${ConfigConstants.webServiceName}${item.image}`
          : blog_1,
        title:
          currentLang === "es"
            ? item.name_spanish || item.name_english
            : item.name_english || item.name_spanish,
        description:
          currentLang === "es"
            ? item.description_spanish || item.description_english
            : item.description_english || item.description_spanish,
        subtitle: "SEE MORE",
      }))
      : defaultImages;


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
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          padding: "50px",
          justifyItems: "center",
        }}
      >
        {formattedBlogs.map((item) => (
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
            onClick={() => navigate(`/internalBlog/${item.id}`)}
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
                sx={{
                  marginBottom: "40px",
                  width: "60%",
                  color: "#FFFFFF",

                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                }}
              >
                {item.description}
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
                  {t("blogForm.see_more")}
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
