import { OdataQueryBuilder } from 'generic-odata-typescript-client';
import apiHeliosCore from './api-helios-core.config';
import { HeliosResponse } from './helios-response.type';
import { Company } from '../../types/company.type';
import { CVRItem } from '../../types/cvrItem.type';

export const getDKcompanies = async (): Promise<Company[]> => {
  const queryBuilder = new OdataQueryBuilder<Company>();
  const response = await apiHeliosCore.get<Company, HeliosResponse<Company>>({
    api: 'universal',
    controller: 'LINK.tblCompanies',
    // url: queryBuilder.filter((filter) => filter.eq('Companies_SpeedguideStatus', 'Active').eq('Companies_Country', 'Denmark')).toQuery(),
    url: queryBuilder.filter((filter) => filter.eq('Companies_Country', 'Denmark')).toQuery(),
  });

  // Check status.

  // console.log(response.data.value);
  // const CVRlist: CVRcompany[] = response.data.value.map((company) => ({ CVR: Number(company.Companies_IDNo) }));
  // console.log(CVRlist);
  // console.log('message:', response.message);
  // console.log('valueCount:', response.valueCount);

  return response.data.value;
};

export const saveCVRData = async (cvr: number, cvrData: any): Promise<void> => {
  // TODO gem i datasen
  const heliosItem: CVRItem = {
    CVR: cvr,
    JSON: cvrData,
    Timestamp: new Date(),
  };
  await apiHeliosCore.post({
    api: 'universal',
    controller: 'dbo.CVRjsonDataTEST',
    data: [heliosItem],
    validateStatus: () => true,
  });
  // TODO evt. map cvr data til db model.
};
