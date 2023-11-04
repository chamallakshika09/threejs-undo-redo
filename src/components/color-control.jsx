import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from 'react-color';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectColor, setColor } from 'store/cube-slice';
import { addHistory } from 'store/history-slice';

const ColorControl = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const handleColorChange = (newColor) => {
    dispatch(
      addHistory({
        type: setColor.type,
        payload: {
          oldValue: color,
          newValue: newColor.hex,
        },
      })
    );
    dispatch(setColor(newColor.hex));
  };

  return (
    <Box>
      <Typography gutterBottom>Cube Color</Typography>
      <SketchPicker color={color} onChangeComplete={handleColorChange} />
    </Box>
  );
};

export default ColorControl;
