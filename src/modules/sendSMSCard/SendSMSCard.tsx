import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';
import { PhoneNumber, SMSInput, Button } from '../../components';
import { sendSMS } from '../../services';

const handleClick = () => {
  sendSMS({number: "61414431273", message: "Here's a little note I wrote."});
};

const SendSMSCard: React.FC<{className: string;}> = ({className}) =>
  <MuiPaper elevation={3} className={className}>
    <PhoneNumber />
    <SMSInput maxLength={100} />
    <Button text="submit" onClick={handleClick} />
  </MuiPaper>;

const useStyles = makeStyles({
  container: {
    width: 400,
    height: 300,
    margin: '50px auto 0'
  }
});

export default () => {
   const classes = useStyles({});
 
   return <SendSMSCard className={classes.container} />;
};
