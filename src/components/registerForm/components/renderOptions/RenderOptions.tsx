import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { OptionsButtons } from '../../../../globals/types';

const RenderOptions = ({
  options,
  additionalButtons,
}: {
  options: OptionsButtons[];
  additionalButtons?: boolean;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log('options.length', options.length);

  return (
    <Box
      sx={{
        display: 'flex',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        mx: 'auto',
        flexWrap: 'wrap',
        width: '80%',
        my: '40px',

        justifyContent: options.length <= 2 ? 'center' : 'flex-start',
        maxHeight: 200,
        overflowY: 'auto', // Scroll vertical cuando se desborda
      }}
    >
      {options.map((val, index) => (
        <Button
          key={val.name + index}
          onClick={() => setSelectedIndex(index)}
          variant={selectedIndex === index ? 'contained' : 'outlined'}
          color={selectedIndex === index ? 'primary' : 'secondary'}
          sx={{
            border: selectedIndex === index ? 'none' : '1px solid #A5AB95',
            color: selectedIndex === index ? '#fff' : '#000',
            backgroundColor:
              selectedIndex === index ? '#A5AB94' : 'transparent',
            borderRadius: selectedIndex === index ? '16px' : '5px',
            textTransform: 'none',
            fontSize: '14px',
            width: '170px', // Permite flexibilidad
            height: '40px',
            // flex: '1 1 auto', // Permite que los botones se ajusten dinámicamente
            '&:hover': {
              backgroundColor: '#rgb(87, 90, 77)',
            },
          }}
          disableElevation
        >
          <span
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              width: '100%', // Asegura que el texto respete el ancho del botón
              textAlign: 'center',
            }}
          >
            {val.name}
          </span>
        </Button>
      ))}
      <Box
        sx={{
          display: additionalButtons ? 'flex' : 'none',
          alignItems: 'center',
          width: '170px',
          height: '40px',
          padding: '3px',
          border: '1px solid  #A5AB95',
          borderRadius: '5px',
          flexShrink: 0, // Evita que este contenedor crezca innecesariamente
        }}
      >
        <Typography sx={{ marginRight: '4px', fontSize: '14px' }}>
          other:
        </Typography>
        <TextField
          id='custom-input'
          variant='standard'
          size='small'
          InputProps={{
            disableUnderline: false,
            sx: {
              '&:after': {
                borderBottom: '1px solid rgb(87, 90, 77)',
              },
            },
          }}
          sx={{
            width: '65%',
            '& .MuiInputBase-input': {
              padding: '4px',
              fontSize: '14px',
            },
          }}
        />
      </Box>

      <Button
        onClick={() => console.log('Botón clickeado')}
        variant='text'
        startIcon={<AddCircleOutlineIcon />}
        sx={{
          display: additionalButtons ? 'flex' : 'none',
          width: '170px',
          height: '40px',
          textTransform: 'none',
          padding: '10px 20px',
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
