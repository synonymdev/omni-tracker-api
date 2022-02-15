# omni-tracker-api

### Description

This library utilizes the api provided by the [Omnibolt Tracker service](https://github.com/omnilaboratory/obd/blob/master/tracker/router/router.go) in [OBD](https://github.com/omnilaboratory/obd).

### Installation
`yarn install https://github.com/synonymdev/omnibolt-tracker-api`

or

`npm i -S https://github.com/synonymdev/omnibolt-tracker-api`
   
### Run Tests & Examples
1. Clone omni-tracker-api:
   - `git clone git@github.com:synonymdev/omni-tracker-api.git && cd omni-tracker-api`

2. Install Dependencies:
   - `yarn install`

3. Build & Run tests:
   - `yarn build && yarn test`

4. Run example project:
   - `ts-node example`

### Usage
```
import OmniTrackerApi from 'omnibolt-tracker-api';

const omniApi = new OmniTrackerApi();

const response = await omniApi.omniGetAllBalancesForAddress('mqaZpPL3PjBhztgk6dYKWDHe22HqXSXhqP');
if (response.isErr()) {
  console.log('omniGetAllBalancesForAddress Error:', response.error.message);
  return;
}
console.log('omniGetAllBalancesForAddress Response:', response.value);
```
- Additional examples can be found in the [`examples`](https://github.com/synonymdev/omnibolt-tracker-api/tree/master/example) directory.
