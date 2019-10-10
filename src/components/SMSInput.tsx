import React from 'react';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiInput from '@material-ui/core/Input';

interface SMSInputProps {
  maxLength: number;
}

const SMSInput: React.FC<SMSInputProps> = ({ maxLength }) =>
  <MuiFormControl
    disabled={false}
    error={false}
    fullWidth
  >
    <MuiInputLabel>Enter message to send</MuiInputLabel>
    <MuiInput type="text" />
    <MuiFormHelperText>{`update length ${maxLength}`}</MuiFormHelperText>
  </MuiFormControl>;

export default SMSInput;
