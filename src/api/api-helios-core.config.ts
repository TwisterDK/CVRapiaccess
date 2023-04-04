import { GOTCApiClient, GOTCConfig } from 'generic-odata-typescript-client';

interface HeliosCoreAPIs {
  universal: string;
}

interface HeliosCoreControllers {
  'dbo.CVRjsonDataTEST': string;
  'LINK.tblCompanies': string;
}

const apiHeliosCoreConfig: GOTCConfig<HeliosCoreAPIs, HeliosCoreControllers> = {
  baseURL: 'https://helios-api-core.obton.com/universal' || '', // process.env.API_URL,
};

export const apiHeliosCore = new GOTCApiClient(apiHeliosCoreConfig);

export default apiHeliosCore;

// http://distribution.virk.dk/cvr-permanent/virksomhed/_search?q=Vrvirksomhed.cvrNummer:31596106
