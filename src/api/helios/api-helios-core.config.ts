import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';

require('dotenv').config();

export const HTTP_OK = 200;

interface HeliosCoreAPIs {
  universal: string;
}

interface HeliosCoreControllers {
  'dbo.CVRjsonData': string;
  'dbo.CVRManagement': string;
  'LINK.tblCompanies': string;
}

const apiHeliosCoreConfig: GOTCConfig<HeliosCoreAPIs, HeliosCoreControllers> = {
  baseURL: process.env.HELIOS_API_URL,
};

export const apiHeliosCore = new GOTCApiClient(apiHeliosCoreConfig);

export default apiHeliosCore;
