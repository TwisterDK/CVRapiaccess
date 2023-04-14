/* eslint-disable no-underscore-dangle */
import { OdataQueryBuilder } from 'generic-odata-typescript-client';
import apiHeliosCore from './api-helios-core.config';
import { HeliosResponse } from './helios-response.type';
import { Company } from '../../types/helios/company.type';
import { UpsertCVRItem } from '../../types/helios/upsertcvrItem.type';
import { cvrData } from '../../types/cvr/cvrData.type';
import createUpsertCVRItem from '../../util/createUpsertCVRItem';

export const getDKcompanies = async (): Promise<Company[]> => {
  const queryBuilder = new OdataQueryBuilder<Company>();
  const response = await apiHeliosCore.get<Company, HeliosResponse<Company>>({
    api: 'universal',
    controller: 'LINK.tblCompanies',
    // url: queryBuilder.filter((filter) => filter.eq('Companies_SpeedguideStatus', 'Active').eq('Companies_Country', 'Denmark')).toQuery(),
    url: queryBuilder.filter((filter) => filter.eq('Companies_Country', 'Denmark')).toQuery(),
    validateStatus: () => true,
  });

  // Check status.

  // console.log(response.data.value);
  // const CVRlist: CVRcompany[] = response.data.value.map((company) => ({ CVR: Number(company.Companies_IDNo) }));
  // console.log(CVRlist);
  // console.log('message:', response.message);
  // console.log('valueCount:', response.valueCount);

  return response.data.value;
};

export const saveCVRData = async (cvr: number, data: cvrData): Promise<void> => {
  // TODO gem i datasen
  // const heliosItem: CVRItem = {
  //   CVR: cvr,
  //   JSON: JSON.stringify(data),
  //   Timestamp: new Date(),
  // };¨
  if (data.hits) {
    const heliosItems: UpsertCVRItem[] = await createUpsertCVRItem(cvr, data);

    await apiHeliosCore.post({
      api: 'universal',
      controller: 'dbo.CVRjsonData',
      data: heliosItems,
      validateStatus: () => true,
    });
  }
};
