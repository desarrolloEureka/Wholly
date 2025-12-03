import { Box } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { CareBlog } from "../components/internalBlog/components/CareBlog";
import { CareSession } from "../components/internalBlog/components/CareSession";
import { VarietyBlog } from "../components/internalBlog/components/VarietyBlog";
import { useEffect, useState } from "react";
import { asyncSendApis } from "../globals/services/service";
import { ApiData } from "../globals/services/api";
import { useParams } from "react-router-dom";

export const InternalBlog = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState<any>(null);
  const [loadingBlog, setLoadingBlog] = useState(true);

  const fetchBlogDetail = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "GET",
      };

      const response = await asyncSendApis(`/references/apiBlogDetail/${id}/`, data);
      if (response.status) {
        console.log('response ', response);
        setBlogDetail(response);
      } else {
        console.error("Error en la respuesta:", response);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setLoadingBlog(false);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [id]);

  return (
    <Box>
      <Box justifyContent="space-between">
        <Box className="bg_Blog">
          <CustomAppBar />
          <CareBlog
            blog={blogDetail}
            loading={loadingBlog}
          />
        </Box>

        <CareSession
          blog={blogDetail}
          loading={loadingBlog}
        />

        <VarietyBlog
          products={blogDetail?.supplements || []}
          loading={loadingBlog}
        />

        <FooterApp />
      </Box>
    </Box>
  );
};
