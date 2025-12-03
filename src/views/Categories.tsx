import { Box, Typography } from "@mui/material";
import FooterApp from "../components/footerApp/FooterApp";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import { CategoriesForm } from "../components/categoriesForm.ts/componets/categoriesForm/CategoriesForm";
import { useTranslation } from "react-i18next";
import { ApiData } from "../globals/services/api";
import { useEffect, useState } from "react";
import { asyncSendApis } from "../globals/services/service";

export const Categories = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "GET",
      };

      const response = await asyncSendApis("/supplements/apiCategory", data);
      if (response.status) {
        const fetchedCategories: any = response;
        setCategories(fetchedCategories);
      } else {
        console.error("Error en la respuesta:", response);
        setError("No se pudieron cargar las categorías.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setError("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Box justifyContent="space-between">
      <Box className="bg_Category_image">
        <CustomAppBar />
        <Typography
          variant="h3"
          sx={{
            textAlign: "start",
            width: "100%",
            mt: "11%",
            ml: "5%",
            fontSize: "3.1rem",
            fontWeight: 100,
            color: "#FBFFDD",
          }}
        >
          {t("categories.knoWcategories")}
        </Typography>
      </Box>

      <CategoriesForm
        categories={categories}
        loading={loading}
      />

      <FooterApp />
    </Box>
  );
};

export default Categories;
