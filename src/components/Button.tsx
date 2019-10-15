import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface ButtonProps {
  text: string;
  enable: boolean;
  onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ text, enable, onClick }) =>
  <MuiButton
    type="submit"
    color="primary"
    variant="contained"
    size="large"
    disabled={!enable}
    onClick={onClick}
  >
    {text}
  </MuiButton>;

export default Button;
