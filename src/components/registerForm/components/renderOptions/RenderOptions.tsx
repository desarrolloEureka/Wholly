import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { OptionsButtons } from '../../../../globals/types';

const RenderOptions = ({ options }: { options: OptionsButtons[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        mx: 'auto',
        maxWidth: '800px',
        my: '40px',
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
            fontSize: '12px',
            width: '85%',
            '&:hover': {
              backgroundColor: '#rgb(87, 90, 77)',
            },
          }}
        >
          {val.name}
        </Button>
      ))}
    </Box>
  );
};
export default RenderOptions;
