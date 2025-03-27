import { Box, Typography } from "@mui/material";
import FooterApp from "../components/footerApp/FooterApp";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import { CategoriesForm } from "../components/categoriesForm.ts/componets/categoriesForm/CategoriesForm";

export const Categories = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_Category_image">
        <CustomAppBar />
        <Typography
          sx={{
            fontFamily: "Gabriela",
            textAlign: "start", // Centrar el texto dentro del Typography
            width: "100%", // Asegurar que el texto se centre correctamente
            mt: "11%",
            ml: "5%",
            fontSize: "3.5rem",
            color: "#FBFFDD",
          }}
        >
          Know our categories
        </Typography>
      </Box>
      <CategoriesForm />

      <FooterApp />
    </Box>
  );
};
