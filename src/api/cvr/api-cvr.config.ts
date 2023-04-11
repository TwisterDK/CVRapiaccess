import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';

require('dotenv').config();

interface APIs {
  '/cvr-permanent': string;
}

interface Controllers {
  virksomhed: string;
}

const auth = `Basic ${Buffer.from(`${process.env.CVR_USER}:${process.env.CVR_PASSWORD}`).toString('base64')}`;

const headers = {
  Accept: '*/*',
  'access-control-allow-credentials': 'true',
  'content-type': 'application/json; charset=UTF-8',
  Authorization: auth,
};

const apiCVRConfig: GOTCConfig<APIs, Controllers> = {
  headers,
  baseURL: process.env.CVR_API_URL,
};

const apiCVR = new GOTCApiClient(apiCVRConfig);

export default apiCVR;
