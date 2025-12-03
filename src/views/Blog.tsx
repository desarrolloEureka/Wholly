import { Box } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { BlogContainer } from "../components/blogForm/components/BlogContainer";
import { BlogForm } from "../components/blogForm/components/BlogForm";
import { useEffect, useState } from "react";
import { asyncSendApis } from "../globals/services/service";
import { ApiData } from "../globals/services/api";

export const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [latestBlog, setLatestBlog] = useState<any>(null);
  const [loadingLastBlog, setLoadingLastBlog] = useState(true);
  const [, setErrorLastBlog] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "GET",
      };

      const response = await asyncSendApis("/references/apiBlog/", data);

      if (response.status) {
        const fetchedBlogs: any = response;
        setBlogs(fetchedBlogs);
      } else {
        console.error("Error en la respuesta:", response);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestBlog = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem('Token'),
        method: 'GET',
      };

      const response = await asyncSendApis('/references/apiBlogLatest/', data);
      if (response.status) {
        const fetchedBlog: any = response;
        setLatestBlog(fetchedBlog);
      } else {
        console.error('Error en la respuesta:', response);
        setErrorLastBlog('No se pudo cargar el último blog.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setErrorLastBlog('Error de conexión con el servidor.');
    } finally {
      setLoadingLastBlog(false);
    }
  };

  useEffect(() => {
    fetchLatestBlog();
    fetchBlogs();
  }, []);

  return (
    <Box justifyContent="space-between">
      <Box className="bg_Blog">
        <CustomAppBar
        />
        <BlogContainer
          blog={latestBlog}
          loading={loadingLastBlog}
        />
      </Box>

      <BlogForm
        blogs={blogs}
        loading={loading}
      />

      <FooterApp />
    </Box>
  );
};
