import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiTextField from '@material-ui/core/TextField';

interface SMSInputProps {
  value: string;
  onChange(value: string): void;
}

const SMSInput: React.FC<SMSInputProps & {className: string}> = ({className, value, onChange}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <MuiTextField
      className={className}
      fullWidth
      multiline
      rows={5}
      label="Enter message to send"
      value={value}
      onChange={handleChange}
    />
  );
};

const useStyles = makeStyles({
  container: {
    margin: '20px 0'
  }
});

export default ({value, onChange}: SMSInputProps) => {
   const classes = useStyles({});
 
   return <SMSInput className={classes.container} value={value} onChange={onChange} />;
};
