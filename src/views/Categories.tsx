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
          variant="h6"
          sx={{
            textAlign: "start",
            width: "100%",
            mt: "11%",
            ml: "5%",
            fontSize: "3.5rem",
            fontWeight: 100,
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
