import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';

require('dotenv').config();

interface HeliosCoreAPIs {
  universal: string;
}

interface HeliosCoreControllers {
  'dbo.CVRjsonDataTEST': string;
  'LINK.tblCompanies': string;
}

const apiHeliosCoreConfig: GOTCConfig<HeliosCoreAPIs, HeliosCoreControllers> = {
  baseURL: process.env.API_URL,
};

export const apiHeliosCore = new GOTCApiClient(apiHeliosCoreConfig);

export default apiHeliosCore;
