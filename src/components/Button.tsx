import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) =>
  <MuiButton
    type="submit"
    color="primary"
    variant="contained"
    size="large"
    disabled={false}
  >
    {text}
  </MuiButton>;

export default Button;
