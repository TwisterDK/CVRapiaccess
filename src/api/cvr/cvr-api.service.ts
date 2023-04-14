import { cvrData } from '../../types/cvr/cvrData.type';
import apiCVR from './api-cvr.config';

const getCVRData = async (cvr: number): Promise<cvrData | undefined> => {
  const queryURL: string = `/_search?q=Vrvirksomhed.cvrNummer:${cvr}`;
  const response = await apiCVR.get({
    api: '/cvr-permanent',
    controller: 'virksomhed',
    url: queryURL,
    // validateStatus: () => true,
  });

  if (response.data) {
    return response.data as cvrData;
  }
  return undefined;
};

export default getCVRData;
