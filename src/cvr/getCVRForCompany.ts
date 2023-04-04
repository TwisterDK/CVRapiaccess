import apiCVR from '../api/api-cvr.config';
import { CVRItem } from './CVRjsonData.type';

export const getCVRForCompany = async (companyId: number): Promise<void> => {
  const data = await apiCVR.get({ api: 'cvr-permanent', controller: 'virksomhed', url: `?q=Vrvirksomhed.cvrNummer:${companyId}` });

  // TODO return data-.
  // return data.data;
};

export default getCVRForCompany;
