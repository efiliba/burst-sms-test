import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';
import { PhoneNumber, SMSInput, Button } from '../../components';
import { sendSMS } from '../../services';

const SendSMSCard: React.FC<{className: string;}> = ({className}) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);

  const handleChange = ({value, valid}: {value: string, valid: boolean}) => {
    setValue(value);
    setValid(valid);
  };

  const handleClick = () => {
    sendSMS({number: value, message: "Here's a little note I wrote."});
  };

  return (
    <MuiPaper elevation={3} className={className}>
      <PhoneNumber value={value} onChange={handleChange} />
      <SMSInput />
      <Button text="submit" onClick={handleClick} enable={valid} />
    </MuiPaper>
  );
};

const useStyles = makeStyles({
  container: {
    width: 400,
    height: 255,
    margin: '50px auto 0',
    padding: 20
  }
});

export default () => {
   const classes = useStyles({});
 
   return <SendSMSCard className={classes.container} />;
};
