import React from 'react';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiInput from '@material-ui/core/Input';

interface PhoneNumberProps {
}

const PhoneNumber: React.FC<PhoneNumberProps> = () =>
  <MuiFormControl
    disabled={false}
    error={false}
    fullWidth
  >
    <MuiInputLabel>Phone Number</MuiInputLabel>
    <MuiInput type="text" />
    <MuiFormHelperText>message</MuiFormHelperText>
  </MuiFormControl>;

export default PhoneNumber;
