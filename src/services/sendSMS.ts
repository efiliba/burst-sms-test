export const sendSMS = ({number, message}) =>
  fetch(`${process.env.BASE_URL}/send-sms-fast?
    key=${process.env.API_KEY}&
    secret=${process.env.API_SECRET}&
    to=${number}&
    message=${message}
  `, {
    mode: 'no-cors'
  });
