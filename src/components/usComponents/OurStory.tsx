import { Box, Typography } from "@mui/material";
import { logo_app, sunBlock } from "../../assets/images";

export const OurStory = () => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "0px auto",
          width: "70%",
          padding: "30px ",
          gap: 6,
        }}
      >
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Our Story</Typography>
          <img src={logo_app} alt="Blog Image" />
          <Typography sx={{ textAlign: "center" }}>
            Lorem ipsum about qurs invers to de thurd Lorem ipsum about qurs
            invers to de thurd Lorem ipsum about qurs
          </Typography>
        </Box>

        <Box
          flex={1}
          sx={{ borderRadius: "20px", backgroundColor: "transparent" }}
        >
          <img
            src={sunBlock}
            alt="Blog Image"
            style={{
              borderRadius: "10px",
              boxShadow: "1px 3px 8px 1px rgba(0,0,0,0.61)",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
