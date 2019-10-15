import React, { useState } from 'react';
import MuiTextField from '@material-ui/core/TextField';

const MAX_PHONE_NUMBER_DIGITS = 10;

interface PhoneNumberProps {
  value: string;
  onChange({value, valid}: {value: string, valid: boolean}): void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({value, onChange}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const raw = event.target.value.replace(/\D/g, '').slice(0, MAX_PHONE_NUMBER_DIGITS);

    // First digit not entered or 0 and second digit not entered or 4 i.e. if given starts with 04
    const prefixValid = (raw[0] == null || raw[0] === '0') && (raw[1] == null || raw[1] === '4');
    const lengthValid = raw.length === MAX_PHONE_NUMBER_DIGITS;

    if (!prefixValid) {
      setErrorMessage('Cell number must start with 04');
    } else if (!lengthValid) {
      setErrorMessage(`${MAX_PHONE_NUMBER_DIGITS} digit cell number required`);
    } else {
      setErrorMessage('');
    }

    onChange({
      value: format(raw),
      valid: prefixValid && lengthValid
    });
  };

  const format = (cellNumber: string) => {
    const groups = [3, 3, 4];   // Format digits into groups of 3 3 4

    const spaced = [];
    let index = 0;
    groups.forEach(group => {
      spaced.push(cellNumber.slice(index, index + group));
      index += group;
    });

    return spaced.join(' ').trimRight();  // neet to trim when backspacing
  };

  return (
    <MuiTextField
      fullWidth
      error={errorMessage.length > 0}
      label="Phone Number"
      helperText={errorMessage}
      value={value}
      onChange={handleChange}
    />
  );
};

export default PhoneNumber;
