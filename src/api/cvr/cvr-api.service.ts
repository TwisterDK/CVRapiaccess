import { cvrData } from '../../types/cvr/cvrData.type';
import apiCVR from './api-cvr.config';

const getCVRData = async (cvr: number): Promise<cvrData | undefined> => {
  const queryURL: string = `/_search?q=Vrvirksomhed.cvrNummer:${cvr}`;
  const response = await apiCVR.get<unknown, cvrData>({
    api: '/cvr-permanent',
    controller: 'virksomhed',
    url: queryURL,
  });

  if (response.status === 200) {
    return response.data;
  }
  const errMsg = response.status + response.statusText;
  // TDOD Send mail ?

  return undefined;
};

export default getCVRData;
