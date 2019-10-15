# Burst SMS Test Submission

## NextJS template configured with TypeScript, Jest, Styled Components and Material-UI

## Based on create-next-app
### --example with-jest-typescript

## Assumptions
- Can only send SMS's to Australian numbers.

## Security config file
create a .env file in the root with the following key/values:
```bash
BASE_URL=https://sendsms.transmitsms.com
API_KEY=...
API_SECRET=...
```

## Setup / run
```bash
yarn
yarn dev
```

## ToDo
- Finish the unit tests (only stubs created)
- Add validation for text message length
