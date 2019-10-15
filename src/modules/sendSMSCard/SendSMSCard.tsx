import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';
import { PhoneNumber, SMSInput, Button } from '../../components';
import { sendSMS } from '../../services';

const SendSMSCard: React.FC<{className: string;}> = ({className}) => {
  const [sendResult, setSendResult] = useState('');
  const [sendingSMS, setSendingSMS] = useState(false);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [numberValid, setNumberValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const handleNumberChange = ({value, valid}: {value: string, valid: boolean}) => {
    setNumber(value);
    setNumberValid(valid);
    setSendResult('');
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    setMessageValid(value.length > 0);
    setSendResult('');
  };

  const handleClick = () => {
    setSendingSMS(true);
    setSendResult('Sending SMS');
    sendSMS({number: format(number), message})
      .then(() => {
        setNumber('');
        setMessage('');
        setNumberValid(false);
        setMessageValid(false);
        setSendResult('SMS sent successfully');
      })
      .catch(() => {
        setSendResult('Error sending SMS');
      })
      .finally(() => setSendingSMS(false))
  };

  const format = (number: string) => `61${number.split(' ').join('').slice(1)}`;

  return (
    <MuiPaper elevation={3} className={className}>
      <PhoneNumber value={number} onChange={handleNumberChange} />
      <SMSInput value={message} onChange={handleMessageChange} />
      <Button
        text="submit"
        onClick={handleClick}
        enable={!sendingSMS && numberValid && messageValid}
      />
      <span className="send-result">{sendResult}</span>
    </MuiPaper>
  );
};

const useStyles = makeStyles({
  container: {
    width: 400,
    height: 270,
    margin: '50px auto 0',
    padding: 20,
    '& span.send-result': {
      color: 'red',
      float: 'right',
      paddingTop: 10
    }
  }
});

export default () => {
   const classes = useStyles({});
 
   return <SendSMSCard className={classes.container} />;
};
