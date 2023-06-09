/* eslint-disable no-underscore-dangle */
import { OdataQueryBuilder } from 'generic-odata-typescript-client';
import apiHeliosCore, { HTTP_OK } from './api-helios-core.config';
import { HeliosResponse } from './types/helios-response.type';
import { Company } from '../../types/helios/company.type';
import { UpsertCVRItem } from '../../types/helios/upsertcvrItem.type';
import { cvrData } from '../../types/cvr/cvrData.type';
import { createUpsertCVRItem } from '../../util/createUpsertCVRItem';
import { createUpsertCVRLedelser } from '../../util/createUpserCVRLedelser';
import { UpsertCVRManagement } from '../../types/helios/upsertcvrManagement.type';

export const getDKcompanies = async (): Promise<Company[]> => {
  const queryBuilder = new OdataQueryBuilder<Company>();
  const response = await apiHeliosCore.get<Company, HeliosResponse<Company[]>>({
    api: 'universal',
    controller: 'LINK.tblCompanies',
    url: queryBuilder.filter((filter) => filter.eq('Companies_Country', 'Denmark')).toQuery(),
    validateStatus: () => true,
  });

  // Check status.
  // response.status === 200

  // console.log(response.data.value);
  // const CVRlist: CVRcompany[] = response.data.value.map((company) => ({ CVR: Number(company.Companies_IDNo) }));
  // console.log(CVRlist);
  // console.log('message:', response.message);
  // console.log('valueCount:', response.valueCount);
  return response.data.value;
};

export const deleteCVRledelser = async (cvr: number): Promise<void> => {
  const queryBuilder = new OdataQueryBuilder<UpsertCVRManagement>();
  const response = await apiHeliosCore.get<UpsertCVRItem, HeliosResponse<UpsertCVRItem>>({
    api: 'universal',
    controller: 'dbo.CVRManagement',
    url: queryBuilder
      .filter((filter) => filter.eq('CVR', cvr))
      .select('CVR', 'ParticipantName', 'Subtype')
      .toQuery(),
    validateStatus: () => true,
  });
  if (response.status === HTTP_OK) {
    const response2 = await apiHeliosCore.delete<UpsertCVRItem, HeliosResponse<UpsertCVRItem>>({
      api: 'universal',
      controller: 'dbo.CVRManagement',
      data: response.data.value,
      validateStatus: () => true,
    });
  }
};

export const saveCVRData = async (cvr: number, data: cvrData): Promise<void> => {
  if (data.hits) {
    const heliosItems: UpsertCVRItem[] = await createUpsertCVRItem(cvr, data);

    await apiHeliosCore.post({
      api: 'universal',
      controller: 'dbo.CVRjsonData',
      data: heliosItems,
      validateStatus: () => true,
    });
  }

  if (data.hits) {
    await deleteCVRledelser(cvr);
    const heliosledelserItems: UpsertCVRManagement[] = await createUpsertCVRLedelser(cvr, data);

    const response = await apiHeliosCore.post({
      api: 'universal',
      controller: 'dbo.CVRManagement',
      data: heliosledelserItems,
      validateStatus: () => true,
    });
    // console.log('response', response);
  }
};
