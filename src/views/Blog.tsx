import { Box } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { BlogContainer } from "../components/blogForm/components/BlogContainer";
import { BlogForm } from "../components/blogForm/components/BlogForm";

export const Blog = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_Blog">
        <CustomAppBar />
        <BlogContainer />
      </Box>
      <BlogForm />

      <FooterApp />
    </Box>
  );
};
