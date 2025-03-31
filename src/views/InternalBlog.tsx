import { Box } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { CareBlog } from "../components/internalBlog/components/CareBlog";
import { CareSession } from "../components/internalBlog/components/CareSession";
import { VarietyBlog } from "../components/internalBlog/components/VarietyBlog";

export const InternalBlog = () => {
  return (
    <Box>
      <Box justifyContent="space-between">
        <Box className="bg_Blog">
          <CustomAppBar />
          <CareBlog />
        </Box>
        <CareSession />
        <VarietyBlog />

        <FooterApp />
      </Box>
    </Box>
  );
};
