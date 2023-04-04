import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';
import { CVRItemEnriched } from './CVRjsonData.type';
import apiCVR from '../api/api-cvr.config';

// interface HeliosCoreAPIs {
//   universal: string;
// }

// export interface HeliosCoreControllers {
//   'dbo.CVRjsonDataTEST': string;
// }

// export const configName: GOTCConfig<HeliosCoreAPIs, HeliosCoreControllers> = {
//   baseURL: 'https://helios-api-core.obton.com/universal' || '',
// };

// type CVRjsonDataItem = {
//   CVR: number;
//   JSON: string;
//   Timestamp: string;
// };

// const client = new GOTCApiClient(configName);

const response = await client.get<CVRjsonDataItem[]>({ api: 'universal', controller: 'dbo.CVRjsonDataTEST' });
if (response.status < 300) {
  // success
  response.data.map((item) => {
    console.log('item', item);

    return item;
  });
} else {
  // error
}
console.log(client);
