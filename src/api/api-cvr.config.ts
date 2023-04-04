import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';

interface APIs {
  'cvr-permanent': string;
}

interface Controllers {
  virksomhed: string;
}

const apiCVRConfig: GOTCConfig<APIs, Controllers> = {
  baseURL: 'http://distribution.virk.dk',
};

const apiCVR = new GOTCApiClient(apiCVRConfig);

export default apiCVR;
