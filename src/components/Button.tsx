import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface ButtonProps {
  text: string;
  onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) =>
  <MuiButton
    type="submit"
    color="primary"
    variant="contained"
    size="large"
    disabled={false}
    onClick={onClick}
  >
    {text}
  </MuiButton>;

export default Button;
