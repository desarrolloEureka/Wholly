import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField, Typography } from "@mui/material";
import { OptionsButtons } from "../../../../globals/types";
import { useTranslation } from "react-i18next";

const RenderOptions = ({
  options,
  additionalButtons,
  toggleOptionsSelection,
  selectedOptions,
  customOption,
  setCustomOption,
  handleAddCustomOption
}: {
  options: OptionsButtons[];
  additionalButtons?: boolean;
  toggleOptionsSelection?: any;
  selectedOptions?: any;
  customOption?: any,
  setCustomOption?: any
  handleAddCustomOption?: any
}) => {

  const { i18n } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        mx: "auto",
        flexWrap: "wrap",
        width: { xs: "62%", sm: "65%", md: "72%" },
        my: "40px",

        justifyContent: options.length <= 2 ? "center" : "flex-start",
        maxHeight: 200,

        overflowY: "auto", // Scroll vertical cuando se desborda
      }}
    >

      {options.map((val: any, index) => {
        const isSelected = selectedOptions && selectedOptions?.some((item: any) => item.id === val.id);

        const text = i18n.language === "es" ? val.name_spanish : val.name_english;

        return (
          <Button
            key={val.name_spanish + index}
            onClick={() => toggleOptionsSelection(val)}
            variant={isSelected ? "contained" : "outlined"}
            color={isSelected ? "primary" : "secondary"}
            sx={{
              border: isSelected ? "none" : "1px solid #A5AB95",
              color: isSelected ? "#fff" : "#000",
              backgroundColor: isSelected ? "#A5AB94" : "transparent",
              borderRadius: isSelected ? "16px" : "5px",
              textTransform: "none",
              fontSize: "14px",
              width: "170px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#rgb(87, 90, 77)",
              },
            }}
            disableElevation
          >
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                width: "100%", // Asegura que el texto respete el ancho del botón
                textAlign: "center",
              }}
            >
              {text}
            </span>
          </Button>
        );
      })}

      <Box
        sx={{
          display: additionalButtons ? "flex" : "none",
          alignItems: "center",
          width: "170px",
          height: "40px",
          padding: "3px",
          border: "1px solid  #A5AB95",
          borderRadius: "5px",
          flexShrink: 0, // Evita que este contenedor crezca innecesariamente
        }}
      >
        <Typography sx={{ marginRight: "4px", fontSize: "14px" }}>
          other:
        </Typography>
        <TextField
          id="custom-input"
          variant="standard"
          size="small"
          value={customOption}
          onChange={(e: any) => setCustomOption(e.target.value)}
          InputProps={{
            disableUnderline: false,
            sx: {
              "&:after": {
                borderBottom: "1px solid rgb(87, 90, 77)",
              },
            },
          }}
          sx={{
            width: "65%",
            "& .MuiInputBase-input": {
              padding: "4px",
              fontSize: "14px",
            },
          }}
        />
      </Box>

      <Button
        onClick={handleAddCustomOption}
        variant="text"
        startIcon={<AddCircleOutlineIcon />}
        sx={{
          display: additionalButtons ? "flex" : "none",
          width: "170px",
          height: "40px",
          textTransform: "none",
          padding: "10px 20px",
        }}
      >
        Other
      </Button>

      {/* {additionalButtons && (
        <Box
          sx={{
            // background: 'blue',
            width: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            ml: -0.2,
            gap: '10px',
          }}
        >
         
        </Box>
      )} */}
    </Box>
  );
};
export default RenderOptions;
