import { Box, Typography } from "@mui/material";
import FooterApp from "../components/footerApp/FooterApp";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import { CategoriesForm } from "../components/categoriesForm.ts/componets/categoriesForm/CategoriesForm";
import { useTranslation } from "react-i18next";

export const Categories = () => {
  const { t } = useTranslation();

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
      <CategoriesForm />

      <FooterApp />
    </Box>
  );
};
